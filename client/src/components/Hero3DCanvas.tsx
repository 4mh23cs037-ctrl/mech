import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCcw, Zap, Layers, Cpu } from 'lucide-react';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [laserActive, setLaserActive] = useState(true);
  const [isRotating, setIsRotating] = useState(true);
  const sceneElementsRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    extruderGroup?: THREE.Group;
    printedObject?: THREE.Mesh;
    laserLight?: THREE.PointLight;
    laserBeam?: THREE.Line;
    materials: any[];
  }>({ materials: [] });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.025);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(18, 14, 22);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 3);
    dirLight1.position.set(20, 30, 20);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x2563eb, 2);
    dirLight2.position.set(-20, 10, -20);
    scene.add(dirLight2);

    const bedPointLight = new THREE.PointLight(0x00f0ff, 2, 20);
    bedPointLight.position.set(0, 3, 0);
    scene.add(bedPointLight);

    const laserLight = new THREE.PointLight(0x00f0ff, 4, 8);
    laserLight.position.set(0, 4, 0);
    scene.add(laserLight);

    const collectedMaterials: any[] = [];

    // --- 3D PRINTER ASSEMBLY ---
    const printerGroup = new THREE.Group();
    scene.add(printerGroup);

    // 1. Heated Bed Base
    const baseGeo = new THREE.BoxGeometry(16, 1.2, 16);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x070e24,
      metalness: 0.85,
      roughness: 0.25,
    });
    collectedMaterials.push(baseMat);
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.6;
    baseMesh.receiveShadow = true;
    printerGroup.add(baseMesh);

    // Heated Bed Top Surface (Grid plate)
    const bedGeo = new THREE.BoxGeometry(14, 0.2, 14);
    const bedMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x002244,
      emissiveIntensity: 0.3,
    });
    collectedMaterials.push(bedMat);
    const bedMesh = new THREE.Mesh(bedGeo, bedMat);
    bedMesh.position.y = 0.1;
    printerGroup.add(bedMesh);

    // Bed Grid Lines
    const grid = new THREE.GridHelper(13.8, 14, 0x00f0ff, 0x1e293b);
    grid.position.y = 0.21;
    printerGroup.add(grid);

    // 2. Dual Aluminum Vertical Pillars (Z-axis)
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3,
    });
    collectedMaterials.push(pillarMat);

    const pillarGeo = new THREE.BoxGeometry(1.2, 22, 1.2);
    const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
    leftPillar.position.set(-7.5, 11, 0);
    printerGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
    rightPillar.position.set(7.5, 11, 0);
    printerGroup.add(rightPillar);

    // Top Beam
    const topBeamGeo = new THREE.BoxGeometry(16.2, 1.2, 1.2);
    const topBeam = new THREE.Mesh(topBeamGeo, pillarMat);
    topBeam.position.set(0, 22, 0);
    printerGroup.add(topBeam);

    // Z-Axis Lead Screws (chrome steel rods)
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.1,
    });
    collectedMaterials.push(rodMat);
    const rodGeo = new THREE.CylinderGeometry(0.2, 0.2, 21, 16);
    const leftRod = new THREE.Mesh(rodGeo, rodMat);
    leftRod.position.set(-6.2, 11, 0);
    printerGroup.add(leftRod);

    const rightRod = new THREE.Mesh(rodGeo, rodMat);
    rightRod.position.set(6.2, 11, 0);
    printerGroup.add(rightRod);

    // 3. Horizontal X-Gantry (moving vertically and holding extruder)
    const gantryGroup = new THREE.Group();
    gantryGroup.position.y = 7.5;
    printerGroup.add(gantryGroup);

    const xBeamGeo = new THREE.BoxGeometry(15, 0.9, 0.9);
    const xBeam = new THREE.Mesh(xBeamGeo, pillarMat);
    gantryGroup.add(xBeam);

    // Extruder Assembly
    const extruderGroup = new THREE.Group();
    gantryGroup.add(extruderGroup);

    const carriageGeo = new THREE.BoxGeometry(2.4, 2, 2);
    const carriageMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.7,
      roughness: 0.3,
    });
    collectedMaterials.push(carriageMat);
    const carriage = new THREE.Mesh(carriageGeo, carriageMat);
    extruderGroup.add(carriage);

    // Hotend Nozzle (Cone)
    const nozzleGeo = new THREE.ConeGeometry(0.35, 0.9, 16);
    const nozzleMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Brass
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.6,
    });
    collectedMaterials.push(nozzleMat);
    const nozzle = new THREE.Mesh(nozzleGeo, nozzleMat);
    nozzle.rotation.x = Math.PI;
    nozzle.position.set(0, -1.4, 0);
    extruderGroup.add(nozzle);

    // Fan Duct / Cooler
    const fanGeo = new THREE.BoxGeometry(0.8, 1.2, 1.2);
    const fanMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });
    collectedMaterials.push(fanMat);
    const fan = new THREE.Mesh(fanGeo, fanMat);
    fan.position.set(1.4, 0, 0);
    extruderGroup.add(fan);

    // Laser / Extrusion Beam Line
    const beamMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      linewidth: 3,
      transparent: true,
      opacity: 0.8,
    });
    const beamGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, -1.8, 0),
    ]);
    const laserBeam = new THREE.Line(beamGeo, beamMat);
    nozzle.add(laserBeam);

    // 4. PRINTED OBJECT ON THE BED: Intricate Mechanical Planetary Gear Assembly
    const gearGroup = new THREE.Group();
    gearGroup.position.set(0, 0.22, 0);
    printerGroup.add(gearGroup);

    // Sun Gear (Center)
    const sunGeo = new THREE.CylinderGeometry(2.2, 2.2, 3.2, 24);
    const printMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      metalness: 0.4,
      roughness: 0.2,
      wireframe: false,
    });
    collectedMaterials.push(printMat);
    const sunMesh = new THREE.Mesh(sunGeo, printMat);
    sunMesh.position.y = 1.6;
    gearGroup.add(sunMesh);

    // Planet Gears (3 satellite gears)
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const planetGeo = new THREE.CylinderGeometry(1.4, 1.4, 3.2, 16);
      const planetMesh = new THREE.Mesh(planetGeo, printMat);
      planetMesh.position.set(Math.cos(angle) * 4.2, 1.6, Math.sin(angle) * 4.2);
      gearGroup.add(planetMesh);
    }

    // Outer Ring Gear
    const ringGeo = new THREE.TorusGeometry(5.8, 0.6, 16, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      metalness: 0.6,
      roughness: 0.3,
    });
    collectedMaterials.push(ringMat);
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 1.6;
    gearGroup.add(ringMesh);

    // Floating Engineering Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = Math.random() * 25;
      particlePositions[i + 2] = (Math.random() - 0.5) * 35;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.25,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Store references
    sceneElementsRef.current = {
      renderer,
      scene,
      camera,
      extruderGroup,
      printedObject: sunMesh,
      laserLight,
      laserBeam,
      materials: collectedMaterials,
    };

    // Mouse Drag Interaction for Orbiting
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let angleHorizontal = 0.8;
    let angleVertical = 0.5;
    const radius = 28;

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      angleHorizontal -= deltaX * 0.008;
      angleVertical = Math.max(0.1, Math.min(Math.PI / 2.2, angleVertical + deltaY * 0.008));
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Extruder dynamic path simulating printing
      const extX = Math.sin(elapsedTime * 2.5) * 4.2;
      const extZ = Math.cos(elapsedTime * 3.2) * 4.2;
      extruderGroup.position.set(extX, 0, extZ);

      // Subtle gantry elevation change
      gantryGroup.position.y = 5.2 + Math.sin(elapsedTime * 0.3) * 0.8;

      // Laser position update
      laserLight.position.set(extX, gantryGroup.position.y - 1.2, extZ);
      laserLight.intensity = 2.5 + Math.sin(elapsedTime * 15) * 1.5;

      // Gear rotation (kinetic movement)
      gearGroup.rotation.y = elapsedTime * 0.5;

      // Auto rotation if enabled
      if (!isMouseDown) {
        angleHorizontal += 0.002;
      }

      // Camera position from spherical coords
      camera.position.x = radius * Math.sin(angleHorizontal) * Math.cos(angleVertical);
      camera.position.z = radius * Math.cos(angleHorizontal) * Math.cos(angleVertical);
      camera.position.y = radius * Math.sin(angleVertical);
      camera.lookAt(0, 5, 0);

      // Particle floating
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Wireframe toggle effect
  const toggleWireframe = () => {
    setWireframe(!wireframe);
    sceneElementsRef.current.materials.forEach((mat) => {
      mat.wireframe = !wireframe;
    });
  };

  // Laser toggle
  const toggleLaser = () => {
    setLaserActive(!laserActive);
    if (sceneElementsRef.current.laserLight) {
      sceneElementsRef.current.laserLight.visible = !laserActive;
    }
    if (sceneElementsRef.current.laserBeam) {
      sceneElementsRef.current.laserBeam.visible = !laserActive;
    }
  };

  // Reset Camera
  const resetCamera = () => {
    if (sceneElementsRef.current.camera) {
      sceneElementsRef.current.camera.position.set(18, 14, 22);
      sceneElementsRef.current.camera.lookAt(0, 5, 0);
    }
  };

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-b from-[#070e24] via-[#030712] to-[#030712] shadow-[0_0_50px_rgba(0,240,255,0.1)]">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Industrial HUD Overlay */}
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 text-xs font-mono text-cyan-400 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>MIT MYSORE // AM-LAB SIMULATOR</span>
        </div>
        <div className="hidden sm:flex flex-col gap-1 bg-black/40 backdrop-blur-md p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">MACHINE:</span>
            <span className="text-cyan-300">MITM Industrial FDM-300</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">HOTEND TEMP:</span>
            <span className="text-amber-400 font-bold">215.4 °C</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">HEATED BED:</span>
            <span className="text-emerald-400">60.0 °C</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">LAYER RES:</span>
            <span className="text-cyan-400">0.12 mm</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">STATUS:</span>
            <span className="text-cyan-400 font-semibold animate-pulse">EXTRUDING</span>
          </div>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/75 backdrop-blur-xl px-4 py-2 rounded-xl border border-cyan-500/30 shadow-2xl">
        <button
          onClick={toggleWireframe}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            wireframe
              ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/40 font-bold'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
          }`}
          title="Toggle Wireframe inspection"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{wireframe ? 'Solid Mode' : 'Wireframe'}</span>
        </button>

        <button
          onClick={toggleLaser}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            laserActive
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
              : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700'
          }`}
          title="Toggle Laser Nozzle Glow"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Laser Glow</span>
        </button>

        <button
          onClick={resetCamera}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white transition-all"
          title="Reset Camera Angle"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Drag hint on bottom right */}
      <div className="absolute bottom-4 right-4 hidden md:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded-md border border-slate-800">
        <Eye className="w-3.5 h-3.5 text-cyan-400" />
        <span>Drag to orbit • Scroll to zoom</span>
      </div>
    </div>
  );
};
