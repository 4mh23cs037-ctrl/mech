import React, { useState } from 'react';
import { 
  Layers, 
  Zap, 
  CheckCircle2, 
  Sliders, 
  Cpu, 
  Flame, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { TechnologyCard } from '../types';

interface TechnologiesProps {
  onRequestClick?: (techName: string) => void;
}

export const Technologies: React.FC<TechnologiesProps> = ({ onRequestClick }) => {
  const [activeTab, setActiveTab] = useState<string>('fdm');

  const technologies: TechnologyCard[] = [
    {
      id: 'fdm',
      name: 'Fused Deposition Modeling',
      acronym: 'FDM',
      fullTitle: 'Fused Deposition Modeling (FDM / FFF)',
      badge: 'Cost-Effective & Functional',
      tagline: 'Continuous extrusion of thermoplastic filaments layer-by-layer onto a heated build platform.',
      workingPrinciple:
        'A spool of thermoplastic filament is fed into a heated extruder nozzle (190°C - 300°C) which liquefies the polymer. A precision CNC gantry deposits the molten material in 2D slices along the X and Y axes. As each slice solidifies rapidly, the Z-stage shifts down, bonding successive layers into a robust 3D object.',
      accuracy: '± 0.15 mm',
      layerHeight: '0.10 – 0.35 mm (100–350 microns)',
      maxVolume: '300 × 300 × 400 mm',
      equipmentModel: 'MITM Dual-Extrusion Industrial FDM-300',
      advantages: [
        'Extremely economical material cost per gram for student capstone budgets',
        'Large build envelope for full-scale mechanical and automotive components',
        'Wide material palette: PLA, ABS, PETG, TPU, and Carbon Fiber composites',
        'Dual-extrusion soluble PVA support capability for complex interior cavities'
      ],
      applications: [
        'End-use mechanical brackets & motor mountings',
        'Formula student racing air intake manifolds',
        'Robotic chassis & gear linkage mechanisms',
        'Educational kinematic cutaways & foundry patterns'
      ],
      materials: ['PLA', 'ABS', 'PETG', 'TPU 95A', 'Nylon PA12', 'Carbon Fiber PLA']
    },
    {
      id: 'sla',
      name: 'Stereolithography',
      acronym: 'SLA',
      fullTitle: 'Stereolithography Laser Photopolymerization (SLA)',
      badge: 'Ultra-High Precision & Smooth Finish',
      tagline: 'Selective laser curing of liquid photopolymer resin to achieve micron-level surface accuracy.',
      workingPrinciple:
        'A high-precision ultraviolet (UV) solid-state laser (405nm) is steered across a vat of liquid photocurable resin using dual galvanometer mirrors. The laser cross-links and polymerizes the liquid resin into a solid plastic cross-section down to 25-micron layers before post-washing in IPA and UV oven curing.',
      accuracy: '± 0.05 mm (50 microns)',
      layerHeight: '0.025 – 0.10 mm (25–100 microns)',
      maxVolume: '145 × 145 × 175 mm',
      equipmentModel: 'FormLabs Form 3+ Equivalent SLA Precision Station',
      advantages: [
        'Mirror-smooth injection-mold quality surface finish requiring minimal post-processing',
        'Exceptional dimensional accuracy down to 25-micron layers',
        'Isotropic mechanical strength in all orientations (X, Y, Z)',
        'Water-tight microfluidic channels and crisp threads'
      ],
      applications: [
        'Centrifugal pump impellers & fluid mechanics test parts',
        'Miniature precision gear trains & watch escapements',
        'Biomechanical surgical guides & dental prosthetics',
        'Master patterns for investment casting & silicone molds'
      ],
      materials: ['Standard Resin', 'Tough 2000 Resin', 'Clear Resin', 'High-Temp Resin (300°C)']
    },
    {
      id: 'sls',
      name: 'Selective Laser Sintering',
      acronym: 'SLS',
      fullTitle: 'Selective Laser Sintering (SLS)',
      badge: 'Industrial Grade & Support-Free',
      tagline: 'High-power CO2 laser sintering of powdered nylon polymer particles into durable end-use components.',
      workingPrinciple:
        'A thin layer of fine polymer powder (Nylon PA12) is spread across a heated build chamber. A computer-guided CO2 laser fuses the powder particles together at their melting boundary. Because loose un-sintered powder acts as natural support, complex interior geometries, trapped balls, and living hinges can be printed without support structures.',
      accuracy: '± 0.20 mm',
      layerHeight: '0.08 – 0.12 mm (80–120 microns)',
      maxVolume: '200 × 200 × 300 mm',
      equipmentModel: 'MIT Mysore Powder Bed Laser Sintering Unit',
      advantages: [
        'Zero support structures needed (loose powder acts as support)',
        'Complex internal conduits, interlocking joints & monolithic hinges',
        'High impact resistance and fatigue strength with true isotropic density',
        'Excellent chemical resistance against oils, greases, and fuels'
      ],
      applications: [
        'Automotive functional ducts, bellows & fluid reservoirs',
        'Durable snap-fit enclosures and industrial drone arms',
        'Custom prosthetics & ergonomic wearable devices',
        'High-torque planetary gearboxes'
      ],
      materials: ['Nylon PA12 Powder', 'Glass-Filled Nylon (PA-GF)', 'TPU Powder']
    },
    {
      id: 'dlp',
      name: 'Digital Light Processing',
      acronym: 'DLP',
      fullTitle: 'Digital Light Processing (DLP)',
      badge: 'High-Speed Micro Fabrication',
      tagline: 'Digital micromirror projector projecting full-layer UV cross-sections simultaneously.',
      workingPrinciple:
        'Similar to SLA, DLP cures liquid photopolymer resin, but projects the entire 2D cross-section at once using an optical Digital Micromirror Device (DMD). Since entire layers cure simultaneously, print times are uniform regardless of how many items are placed on the platform.',
      accuracy: '± 0.04 mm (40 microns)',
      layerHeight: '0.02 – 0.08 mm (20–80 microns)',
      maxVolume: '130 × 75 × 150 mm',
      equipmentModel: 'High-Speed DLP Digital Photopolymer Station',
      advantages: [
        'Rapid print speed: cures entire layer cross-sections in seconds',
        'Crisp edge definition and microscopic surface features',
        'High batch repeatability for small mechanical fixtures'
      ],
      applications: [
        'Micro-electromechanical systems (MEMS) packaging',
        'Sensor enclosures & fine jewelry patterns',
        'Precision optical lens holders and alignment jigs'
      ],
      materials: ['High-Resolution Standard Resin', 'Flexible Resin', 'Castable Wax Resin']
    }
  ];

  const currentTech = technologies.find((t) => t.id === activeTab) || technologies[0];

  return (
    <section id="technologies" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Additive Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Our 3D Printing Technologies
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Explore the core additive manufacturing technologies available in our mechanical engineering laboratory.
          </p>
        </div>

        {/* Rapid3D-styled Technology Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {technologies.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(tech.id)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activeTab === tech.id
                  ? 'bg-white border-[#f15a24] shadow-md ring-2 ring-orange-200'
                  : 'bg-white border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
            >
              <div className="text-2xl font-black font-['Rajdhani'] text-gray-900 mb-1">
                {tech.acronym}
              </div>
              <div className="text-xs font-bold text-[#f15a24] mb-1">{tech.name}</div>
              <div className="text-[11px] text-gray-500 line-clamp-1">{tech.badge}</div>
            </button>
          ))}
        </div>

        {/* Active Technology Card (Clean white card with orange accent header) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Tech Overview & Working Principle */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-orange-100 text-[#f15a24] font-bold">
                    {currentTech.badge}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Station: {currentTech.equipmentModel}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 font-['Rajdhani'] uppercase tracking-wide">
                  {currentTech.fullTitle}
                </h3>
                <p className="text-gray-600 text-sm mt-1 italic">
                  "{currentTech.tagline}"
                </p>
              </div>

              {/* Working Principle */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
                <h4 className="text-xs font-mono text-[#f15a24] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                  <Sliders className="w-4 h-4" />
                  <span>WORKING PRINCIPLE & KINEMATICS</span>
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  {currentTech.workingPrinciple}
                </p>
              </div>

              {/* Key Advantages */}
              <div>
                <h4 className="text-xs font-mono text-gray-900 uppercase tracking-wider mb-3 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#f15a24]" />
                  <span>KEY ADVANTAGES</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentTech.advantages.map((adv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#f15a24] mt-1.5 flex-shrink-0" />
                      <span>{adv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Materials */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Process Specs Box */}
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 flex flex-col gap-3 font-mono">
                <div className="text-xs text-[#f15a24] font-bold tracking-wider uppercase border-b border-gray-200 pb-2">
                  PROCESS SPECIFICATIONS
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Layer Resolution:</span>
                  <span className="text-gray-900 font-bold">{currentTech.layerHeight}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Tolerance:</span>
                  <span className="text-[#f15a24] font-bold">{currentTech.accuracy}</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-600">Max Build Volume:</span>
                  <span className="text-gray-900 font-bold">{currentTech.maxVolume}</span>
                </div>
              </div>

              {/* Supported Materials */}
              <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm">
                <h4 className="text-xs font-mono text-gray-900 uppercase tracking-wider mb-3 font-bold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>SUPPORTED MATERIALS</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentTech.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-orange-50 text-[#ea580c] border border-orange-200"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href="#request-printing"
                  className="w-full py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono tracking-wider transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Build Quote For {currentTech.acronym}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
