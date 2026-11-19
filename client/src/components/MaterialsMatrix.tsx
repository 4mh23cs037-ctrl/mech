import React, { useState, useEffect } from 'react';
import { Layers, Flame, CheckCircle2, AlertCircle, Tag, Send } from 'lucide-react';
import { Material } from '../types';
import { api } from '../services/api';

interface MaterialsProps {
  onSelectMaterial?: (materialName: string) => void;
}

const DEFAULT_MATERIALS: Material[] = [
  {
    id: 'abs',
    name: 'ABS (Acrylonitrile Butadiene Styrene)',
    category: 'Engineering Polymer',
    density: 1.04,
    tensile_strength: '40 - 50 MPa',
    heat_deflection: '98°C',
    print_temp: '230°C - 250°C',
    bed_temp: '95°C - 110°C',
    is_available: true,
    stock_status: 'In Stock',
    price_per_gram: 2.8,
    colors: 'Industrial Black, Bone White, Cool Gray',
    applications: 'Automotive trim components, functional enclosures, snap-fit joints, thermal resistance assemblies',
    description: 'Tough, impact-resistant engineering polymer capable of enduring elevated temperatures and mechanical wear.',
    image_url: '/images/mit/material_testing_lab.jpg'
  },
  {
    id: 'carbon_pla',
    name: 'Carbon Fiber PLA (CF-PLA)',
    category: 'Composite',
    density: 1.30,
    tensile_strength: '65 - 75 MPa',
    heat_deflection: '60°C',
    print_temp: '205°C - 225°C',
    bed_temp: '55°C - 65°C',
    is_available: true,
    stock_status: 'In Stock',
    price_per_gram: 5.0,
    colors: 'Matte Charcoal Black',
    applications: 'Drone frame arms, RC chassis, high-rigidity structural brackets, aerodynamic fairings',
    description: 'Standard PLA reinforced with 15% high-modulus chopped carbon fiber strands, resulting in lightweight structural rigidity.',
    image_url: '/images/mit/research_lab.jpg'
  },
  {
    id: 'nylon',
    name: 'Nylon PA12',
    category: 'High-Performance Polyamide',
    density: 1.01,
    tensile_strength: '48 - 55 MPa',
    heat_deflection: '135°C',
    print_temp: '240°C - 260°C',
    bed_temp: '80°C - 90°C',
    is_available: true,
    stock_status: 'Low Stock',
    price_per_gram: 6.5,
    colors: 'Natural Off-White, Dyed Black',
    applications: 'Durable gears, aerodynamic ducts, heavy-load brackets, functional kinematics',
    description: 'Exceptional fatigue resistance, low friction coefficient, and high impact strength for high-demand engineering components.',
    image_url: '/images/mit/mmm_lab5.jpg'
  },
  {
    id: 'petg',
    name: 'PETG (Polyethylene Terephthalate Glycol)',
    category: 'Co-Polyester',
    density: 1.27,
    tensile_strength: '50 MPa',
    heat_deflection: '75°C',
    print_temp: '220°C - 245°C',
    bed_temp: '70°C - 80°C',
    is_available: true,
    stock_status: 'In Stock',
    price_per_gram: 3.0,
    colors: 'Clear Translucent, Black, Royal Blue, Signal Orange',
    applications: 'Liquid-tight containers, mechanical brackets, outdoor tooling, chemical-resistant housings',
    description: 'Combines the user-friendly printability of PLA with the durability and weather resistance of ABS.',
    image_url: '/images/mit/design_lab2.jpg'
  },
  {
    id: 'pla',
    name: 'PLA (Polylactic Acid)',
    category: 'Standard Thermoplastic',
    density: 1.24,
    tensile_strength: '50 - 65 MPa',
    heat_deflection: '55°C',
    print_temp: '190°C - 215°C',
    bed_temp: '50°C - 60°C',
    is_available: true,
    stock_status: 'In Stock',
    price_per_gram: 2.0,
    colors: 'White, Black, Signal Blue, Crimson Red, Silver, Forest Green',
    applications: 'Educational prototypes, architectural models, non-functional casings, concept validation',
    description: 'Biodegradable thermoplastic derived from renewable resources like corn starch. Excellent dimensional accuracy with minimal warping.',
    image_url: '/images/mit/cad_lab1.jpg'
  },
  {
    id: 'tpu',
    name: 'TPU 95A (Thermoplastic Polyurethane)',
    category: 'Flexible Elastomer',
    density: 1.21,
    tensile_strength: '35 MPa',
    heat_deflection: '60°C',
    print_temp: '215°C - 235°C',
    bed_temp: '40°C - 50°C',
    is_available: true,
    stock_status: 'In Stock',
    price_per_gram: 4.5,
    colors: 'Jet Black, High-Vis Yellow, Clear',
    applications: 'Vibration dampers, robotic end-effectors, gaskets, protective bumpers, flexible couplings',
    description: 'Shore 95A rubber-like flexibility with high tear resistance, abrasion resilience, and elongation at break up to 580%.',
    image_url: '/images/mit/training_plc_scada.png'
  },
  {
    id: 'resin',
    name: 'Tough Photopolymer Resin',
    category: 'Photocurable Resin (SLA/DLP)',
    density: 1.15,
    tensile_strength: '55 - 65 MPa',
    heat_deflection: '65°C',
    print_temp: '405nm UV Curing',
    bed_temp: 'Room Temp',
    is_available: true,
    stock_status: 'In Stock',
    price_per_gram: 6.0,
    colors: 'Translucent Gray, Ceramic White, Ultra-Clear',
    applications: 'High-precision fluidic channels, miniature gearboxes, medical device prototypes, micro-mechanics',
    description: 'Ultra-high resolution SLA/DLP photopolymer resin providing mirror-smooth surface finish and 25-micron layer resolution.',
    image_url: '/images/mit/fm_lab.jpg'
  }
];

export const MaterialsMatrix: React.FC<MaterialsProps> = ({ onSelectMaterial }) => {
  const [materials, setMaterials] = useState<Material[]>(DEFAULT_MATERIALS);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const data = await api.getMaterials();
        if (data && data.length > 0) {
          // Normalize any external Unsplash URLs to reliable local MIT facility photos
          const fallbackMap: Record<string, string> = {
            abs: '/images/mit/material_testing_lab.jpg',
            carbon_pla: '/images/mit/research_lab.jpg',
            nylon: '/images/mit/mmm_lab5.jpg',
            pla: '/images/mit/cad_lab1.jpg',
            petg: '/images/mit/design_lab2.jpg',
            resin: '/images/mit/fm_lab.jpg',
            tpu: '/images/mit/training_plc_scada.png'
          };
          const mapped = data.map((m: Material) => {
            if (!m.image_url || m.image_url.includes('unsplash.com')) {
              return { ...m, image_url: fallbackMap[m.id] || '/images/mit/material_testing_lab.jpg' };
            }
            return m;
          });
          setMaterials(mapped);
        }
      } catch (err) {
        console.warn('API loading fallback to default MIT materials');
      }
    };
    fetchMaterials();
  }, []);

  const categories = ['All', 'Standard Thermoplastic', 'Engineering Polymer', 'Co-Polyester', 'Flexible Elastomer', 'Photocurable Resin (SLA/DLP)', 'Composite'];

  const filteredMaterials = activeCategory === 'All'
    ? materials
    : materials.filter((m) => m.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const getStatusBadge = (status: string, available: number | boolean) => {
    if (!available || status === 'Out of Stock') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-red-100 text-red-700">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
          Out of Stock
        </span>
      );
    }
    if (status === 'Low Stock') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-100 text-amber-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          Low Stock
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-100 text-emerald-700">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        In Stock
      </span>
    );
  };

  return (
    <section id="materials" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Material Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Engineering Materials Matrix
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            High-grade thermoplastics, photopolymers, elastomers, and composites stocked for laboratory and student projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#f15a24] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Materials Grid (Clean white cards with photo and spec chips) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group"
            >
              {/* Photo */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={mat.image_url}
                  alt={mat.name}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = '/images/mit/material_testing_lab.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/75 text-white font-medium">
                    {mat.category}
                  </span>
                  {getStatusBadge(mat.stock_status, mat.is_available)}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 font-['Rajdhani'] mb-1">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {mat.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-[11px] font-mono mb-4">
                    <div>
                      <span className="text-gray-500 block">Tensile Strength:</span>
                      <span className="text-gray-900 font-bold">{mat.tensile_strength}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Heat Deflection:</span>
                      <span className="text-[#ea580c] font-bold">{mat.heat_deflection}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Density:</span>
                      <span className="text-gray-800">{mat.density} g/cm³</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Nozzle Temp:</span>
                      <span className="text-gray-800">{mat.print_temp}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span className="text-[11px] font-mono text-gray-500 uppercase font-semibold block mb-0.5">
                      Lab Stock Colors:
                    </span>
                    <p className="text-xs text-gray-700 italic">{mat.colors}</p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block">Recovery Rate:</span>
                    <span className="text-xs font-mono font-bold text-[#f15a24]">₹{mat.price_per_gram}/g</span>
                  </div>

                  <a
                    href="#request-printing"
                    onClick={() => onSelectMaterial && onSelectMaterial(mat.name)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-orange-50 hover:bg-[#f15a24] text-[#ea580c] hover:text-white border border-orange-200 transition"
                  >
                    Select For Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
