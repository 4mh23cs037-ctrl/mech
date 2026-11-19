import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, Box, Maximize2, RotateCcw, Download, Sparkles, AlertCircle } from 'lucide-react';

interface STLViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileUrl?: string;
  file?: File;
  modelName: string;
}

export const STLViewerModal: React.FC<STLViewerModalProps> = ({
  isOpen,
  onClose,
  fileUrl,
  file,
  modelName,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [wireframe, setWireframe] = useState(false);
  const [color, setColor] = useState('#00e5ff');
  const [stats, setStats] = useState<{
    dimX: number;
    dimY: number;
    dimZ: number;
    volumeCm3: number;
    weightGrams: number;
    triangleCount: number;
  }>({ dimX: 0, dimY: 0, dimZ: 0, volumeCm3: 0, weightGrams: 0, triangleCount: 0 });

  const sceneRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    mesh?: THREE.Mesh;
    material?: THREE.MeshStandardMaterial;
  }>({});

  // Parse Binary or ASCII STL
  const parseSTL = (buffer: ArrayBuffer): THREE.BufferGeometry => {
    const isBinary = () => {
      if (buffer.byteLength < 84) return false;
      const reader = new DataView(buffer);
      const faceCount = reader.getUint32(80, true);
      const expectedSize = 84 + faceCount * 50;
      return expectedSize === buffer.byteLength;
    };

    if (isBinary()) {
      const reader = new DataView(buffer);
      const faces = reader.getUint32(80, true);
      const dataOffset = 84;
      const faceLength = 50;
      const positions = new Float32Array(faces * 9);
      const normals = new Float32Array(faces * 9);

      for (let face = 0; face < faces; face++) {
        const start = dataOffset + face * faceLength;
        const nx = reader.getFloat32(start, true);
        const ny = reader.getFloat32(start + 4, true);
        const nz = reader.getFloat32(start + 8, true);

        for (let i = 1; i <= 3; i++) {
          const vertexOffset = start + i * 12;
          const vx = reader.getFloat32(vertexOffset, true);
          const vy = reader.getFloat32(vertexOffset + 4, true);
          const vz = reader.getFloat32(vertexOffset + 8, true);

          const index = face * 9 + (i - 1) * 3;
          positions[index] = vx;
          positions[index + 1] = vy;
          positions[index + 2] = vz;

          normals[index] = nx;
          normals[index + 1] = ny;
          normals[index + 2] = nz;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
      return geometry;
    } else {
      // ASCII STL
      const decoder = new TextDecoder('utf-8');
      const text = decoder.decode(buffer);
      const normalPattern = /facet\s+normal\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g;
      const vertexPattern = /vertex\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g;

      const positions: number[] = [];
      const normals: number[] = [];

      let normalMatch;
      let vertexMatch;

      while ((normalMatch = normalPattern.exec(text)) !== null) {
        const nx = parseFloat(normalMatch[1]);
        const ny = parseFloat(normalMatch[2]);
        const nz = parseFloat(normalMatch[3]);

        for (let i = 0; i < 3; i++) {
          vertexMatch = vertexPattern.exec(text);
          if (vertexMatch) {
            positions.push(parseFloat(vertexMatch[1]), parseFloat(vertexMatch[2]), parseFloat(vertexMatch[3]));
            normals.push(nx, ny, nz);
          }
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      return geometry;
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const container = mountRef.current;
    if (!container) return;

    setLoading(true);
    setError(null);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070e24);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 50, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x00f0ff, 2.5);
    keyLight.position.set(100, 150, 100);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x2563eb, 1.8);
    fillLight.position.set(-100, 50, -100);
    scene.add(fillLight);

    const grid = new THREE.GridHelper(200, 40, 0x00f0ff, 0x1e293b);
    grid.position.y = -0.5;
    scene.add(grid);

    sceneRef.current = { renderer, scene, camera };

    // Fetch or Read File
    const loadGeometry = async () => {
      try {
        let buffer: ArrayBuffer;
        if (file) {
          buffer = await file.arrayBuffer();
        } else if (fileUrl) {
          const res = await fetch(fileUrl);
          if (!res.ok) throw new Error('Could not fetch 3D model from server');
          buffer = await res.arrayBuffer();
        } else {
          throw new Error('No 3D model source provided');
        }

        const geometry = parseSTL(buffer);
        geometry.computeVertexNormals();
        geometry.center();

        // Calculate Bounding Box
        geometry.computeBoundingBox();
        const bbox = geometry.boundingBox || new THREE.Box3();
        const size = new THREE.Vector3();
        bbox.getSize(size);

        // Calculate Mesh Volume roughly
        const posAttr = geometry.getAttribute('position');
        let signedVolume = 0;
        for (let i = 0; i < posAttr.count; i += 3) {
          const p1 = new THREE.Vector3().fromBufferAttribute(posAttr, i);
          const p2 = new THREE.Vector3().fromBufferAttribute(posAttr, i + 1);
          const p3 = new THREE.Vector3().fromBufferAttribute(posAttr, i + 2);
          signedVolume += p1.dot(p2.cross(p3)) / 6.0;
        }
        const volumeMm3 = Math.abs(signedVolume);
        const volumeCm3 = volumeMm3 / 1000.0;
        const weightGrams = volumeCm3 * 1.24; // Standard PLA density

        setStats({
          dimX: Math.round(size.x * 10) / 10,
          dimY: Math.round(size.y * 10) / 10,
          dimZ: Math.round(size.z * 10) / 10,
          volumeCm3: Math.max(0.1, Math.round(volumeCm3 * 10) / 10),
          weightGrams: Math.max(0.5, Math.round(weightGrams * 10) / 10),
          triangleCount: posAttr.count / 3,
        });

        // Material
        const material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(color),
          metalness: 0.35,
          roughness: 0.35,
          wireframe: wireframe,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = size.y / 2;
        mesh.castShadow = true;
        scene.add(mesh);

        // Adjust camera distance to fit model
        const maxDim = Math.max(size.x, size.y, size.z, 20);
        camera.position.set(maxDim * 1.5, maxDim * 1.2, maxDim * 1.8);
        camera.lookAt(0, size.y / 2, 0);

        sceneRef.current.mesh = mesh;
        sceneRef.current.material = material;
        setLoading(false);
      } catch (err: any) {
        console.error('Error loading STL:', err);
        setError(err.message || 'Failed to parse STL file');
        setLoading(false);
      }
    };

    loadGeometry();

    // Mouse Interaction
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMouseDown || !sceneRef.current.mesh) return;
      const dx = e.clientX - prevMouseX;
      const dy = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      sceneRef.current.mesh.rotation.y += dx * 0.01;
      sceneRef.current.mesh.rotation.x += dy * 0.01;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!sceneRef.current.camera) return;
      const cam = sceneRef.current.camera;
      cam.position.multiplyScalar(e.deltaY > 0 ? 1.08 : 0.92);
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Render loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isMouseDown && sceneRef.current.mesh) {
        sceneRef.current.mesh.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isOpen, fileUrl, file]);

  // Update wireframe
  useEffect(() => {
    if (sceneRef.current.material) {
      sceneRef.current.material.wireframe = wireframe;
    }
  }, [wireframe]);

  // Update color
  useEffect(() => {
    if (sceneRef.current.material) {
      sceneRef.current.material.color.set(color);
    }
  }, [color]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#070e24] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>3D Model Inspector</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  WebGL
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono truncate max-w-md">{modelName}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D Canvas Body */}
        <div className="relative flex-1 w-full min-h-[380px] bg-slate-950">
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/80 gap-3">
              <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
              <p className="text-sm font-mono text-cyan-300">Parsing 3D STL Mesh Geometry...</p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/90 gap-3">
              <AlertCircle className="w-10 h-10 text-rose-400" />
              <p className="text-sm text-rose-300 font-semibold">{error}</p>
              <p className="text-xs text-slate-400">Please verify the STL file is valid ASCII or Binary STL.</p>
            </div>
          )}

          {/* Model Metrics HUD */}
          {!loading && !error && (
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-cyan-500/20 text-xs font-mono">
              <div className="text-cyan-400 font-bold border-b border-cyan-500/20 pb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ESTIMATED SPECS</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span className="text-slate-400">Dimensions (X×Y×Z):</span>
                <span className="text-white font-bold">{stats.dimX} × {stats.dimY} × {stats.dimZ} mm</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span className="text-slate-400">Part Volume:</span>
                <span className="text-cyan-300">{stats.volumeCm3} cm³</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span className="text-slate-400">Est. PLA Weight:</span>
                <span className="text-emerald-400 font-semibold">~{stats.weightGrams} g</span>
              </div>
              <div className="flex justify-between gap-4 text-slate-300">
                <span className="text-slate-400">Triangles:</span>
                <span className="text-slate-200">{stats.triangleCount.toLocaleString()}</span>
              </div>
            </div>
          )}

          {/* Material Color Selector & Wireframe Controls */}
          {!loading && !error && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Color:</span>
                <div className="flex items-center gap-1.5">
                  {['#00e5ff', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#f8fafc'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-5 h-5 rounded-full border transition-transform ${
                        color === c ? 'scale-125 border-white' : 'border-transparent hover:scale-110'
                      }`}
                      style={{ backgroundColor: c }}
                      title={`Select ${c}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setWireframe(!wireframe)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${
                    wireframe
                      ? 'bg-cyan-500 text-black border-cyan-400'
                      : 'bg-black/70 text-slate-300 border-slate-800 hover:border-cyan-500/40'
                  }`}
                >
                  {wireframe ? 'Solid View' : 'Wireframe'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-t border-cyan-500/20 text-xs text-slate-400">
          <span>Click & drag to rotate • Scroll to zoom</span>
          {fileUrl && (
            <a
              href={fileUrl}
              download={modelName}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

