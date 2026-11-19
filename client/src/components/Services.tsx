import React from 'react';
import { 
  Printer, 
  Scan, 
  Box, 
  Zap, 
  Cog, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Compass, 
  Cpu, 
  Wrench,
  CheckCircle2,
  Building,
  Car,
  Plane,
  HeartPulse,
  Bot
} from 'lucide-react';

interface ServicesProps {
  onRequestService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestService }) => {
  const services = [
    {
      id: '3d-printing',
      title: '3D Printing & Additive Fabrication',
      icon: Printer,
      badge: 'Core Service',
      shortDesc: 'Multi-technology additive manufacturing covering FDM thermoplastics, high-detail SLA photopolymers, and laser sintering.',
      features: [
        'Layer resolution from 25 to 350 microns',
        'Large build volume up to 300 × 300 × 400 mm',
        'Dual-extrusion PVA water-soluble support printing',
        'High-temperature engineering polymers'
      ],
      turnaround: '24 – 48 Hours',
    },
    {
      id: '3d-scanning',
      title: '3D Scanning & Reverse Engineering',
      icon: Scan,
      badge: '0.02mm Precision',
      shortDesc: 'Structured-light optical 3D scanning to digitize legacy physical parts, impellers, and broken tooling into CAD surfaces.',
      features: [
        'Contactless high-resolution structured light scanning',
        'Polygon mesh to parametric NURBS / STEP CAD',
        'Inspection against original CAD with chromatic heatmaps',
        'Automotive & broken machinery spare replacement'
      ],
      turnaround: '2 – 3 Days',
    },
    {
      id: 'cad-modelling',
      title: 'CAD Modelling & Topology Optimization',
      icon: Box,
      badge: 'Design for AM',
      shortDesc: 'Parametric mechanical design in SolidWorks, Fusion 360, and ANSYS topological lightweight optimization.',
      features: [
        'FEA-driven material reduction (up to 45% lighter)',
        'Compliant living hinge and flexure mechanism design',
        'Generative design with organic load-path distribution',
        'Design for Additive Manufacturing (DFAM) rule checks'
      ],
      turnaround: '3 – 5 Days',
    },
    {
      id: 'rapid-prototyping',
      title: 'Rapid Prototyping & Iteration',
      icon: Zap,
      badge: 'Fast Turnaround',
      shortDesc: 'Accelerated engineering development lifecycle allowing students and clients to iterate physical assemblies overnight.',
      features: [
        'Validation of snap fits, clearances, and tolerances',
        'Physical ergonomic feel and hand-grip evaluation',
        'Multi-iteration proof-of-concept for capstone project juries',
        'Overnight express slicing and print queuing'
      ],
      turnaround: '12 – 24 Hours',
    },
    {
      id: 'mechanical-design',
      title: 'Mechanical Component Design',
      icon: Cog,
      badge: 'Kinematics & Gears',
      shortDesc: 'Engineering design and simulation of spur, helical, planetary gearboxes, cams, and 4-bar linkages.',
      features: [
        'Kinematic motion study and interference checking',
        'Custom gear tooth involute profile calculation',
        'Integrated bearing journals, press-fit bosses, and keyways',
        'Vibration dampening elastomer mounts'
      ],
      turnaround: '3 – 4 Days',
    },
    {
      id: 'product-development',
      title: 'End-to-End Product Development',
      icon: Compass,
      badge: 'Idea to Reality',
      shortDesc: 'Comprehensive engineering guidance from student sketch to fully functional, market-ready physical hardware.',
      features: [
        'Aesthetic industrial enclosure styling and PCB integration',
        'Fastener selection, threaded brass heat-set insert sizing',
        'Draft angle verification and split-line parting optimization',
        'Bill of Materials (BOM) and assembly guide'
      ],
      turnaround: '1 – 2 Weeks',
    },
    {
      id: 'functional-prototyping',
      title: 'Functional Prototyping & Load Testing',
      icon: ShieldCheck,
      badge: 'Structural Validation',
      shortDesc: 'Fabrication of load-bearing structural parts with fiber reinforcement for real wind tunnel and dynamometer testing.',
      features: [
        'Continuous chopped carbon fiber reinforcement',
        'Hydrodynamic impellers balanced for up to 3,000 RPM',
        'Tensile and compressive coupon yield testing',
        'Thermal endurance validation up to 140°C'
      ],
      turnaround: '3 – 5 Days',
    },
    {
      id: 'custom-manufacturing',
      title: 'Custom Component Manufacturing',
      icon: Wrench,
      badge: 'Batch Production',
      shortDesc: 'Short-run batch production of specialized jigs, robotic end-effectors, drone arms, and customized lab fixtures.',
      features: [
        'Low-to-medium batch runs (10 – 100 units) without tooling costs',
        'Custom drill jigs, assembly fixtures, and quality gauges',
        'Direct digital manufacturing on demand',
        'Subsidized internal student pricing'
      ],
      turnaround: '3 – 6 Days',
    }
  ];

  const industries = [
    { name: 'Automotive & Racing', icon: Car, desc: 'Intake manifolds, aerodynamic fairings, Formula Student chassis.' },
    { name: 'Aerospace & Drones', icon: Plane, desc: 'Lightweight carbon fiber drone arms, camera gimbals, turbine nozzles.' },
    { name: 'Medical & Biomechanics', icon: HeartPulse, desc: 'Orthotic braces, bionic prosthetic hands, anatomical study models.' },
    { name: 'Robotics & Automation', icon: Bot, desc: 'Quadruped leg linkages, robotic grippers, sensor housings.' },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Industrial Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Our Prototyping & Manufacturing Services
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Professional digital fabrication, CAD reverse engineering, and low-volume additive manufacturing for Mysore region.
          </p>
        </div>

        {/* 8 Modern Service Cards Grid (Clean white cards with orange hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between hover:border-[#f15a24] hover:shadow-xl transition-all group relative overflow-hidden"
              >
                {/* Top orange line accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#f15a24] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#f15a24] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#f15a24] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  <div className="border-t border-gray-100 pt-3 mb-4">
                    <ul className="flex flex-col gap-1.5">
                      {srv.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f15a24] mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-3 flex items-center justify-between mt-2">
                  <div className="text-[11px] font-mono text-gray-500">
                    Est: <span className="text-gray-900 font-bold">{srv.turnaround}</span>
                  </div>
                  <button
                    onClick={() => onRequestService(srv.title)}
                    className="flex items-center gap-1 text-xs font-bold font-mono text-[#f15a24] hover:text-[#ea580c] group/btn"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industries We Serve Section (Directly from Rapid3D screenshot nav & layout) */}
        <div id="industries" className="pt-8 border-t border-gray-200">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#f15a24] uppercase tracking-wider">
              APPLICATIONS ACROSS DOMAINS
            </span>
            <h3 className="text-2xl font-bold text-gray-900 font-['Rajdhani'] uppercase mt-1">
              Industries We Serve
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-orange-300 transition">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#f15a24] flex items-center justify-center mb-3">
                    <IndIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{ind.name}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
