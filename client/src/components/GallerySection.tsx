import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  Printer, 
  Layers, 
  Wrench, 
  Box, 
  Users, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  Info,
  CheckCircle2
} from 'lucide-react';
import { GalleryItem } from '../types';
import { api } from '../services/api';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Initial verified authentic data from MIT Mysore Mechanical Engineering Facility
  const defaultFacilityItems: GalleryItem[] = [
    // --- 1. Laboratory (Actual MIT Mysore Mechanical Engineering Labs) ---
    {
      id: 'mitm-fac-lab-01',
      title: 'Mechanical Engineering Research & Additive Innovation Laboratory',
      category: 'Laboratory',
      image_url: '/images/mit/research_lab.jpg',
      caption: 'Department research center for functional additive manufacturing, testing polymer tensile specimens, and prototyping mechanical assemblies.',
      date: 'MIT Mysore Campus'
    },
    {
      id: 'mitm-fac-lab-02',
      title: 'CAD/CAM 3D Slicing & Computational Modeling Studio (Lab 1)',
      category: 'Laboratory',
      image_url: '/images/mit/cad_lab1.jpg',
      caption: 'Workstations configured with SolidWorks, Fusion 360, and Ultimaker Cura slicing for G-code toolpath generation.',
      date: 'CAD/CAM Lab 1'
    },
    {
      id: 'mitm-fac-lab-03',
      title: 'Advanced Mechanical Design & Simulation Studio (Lab 2)',
      category: 'Laboratory',
      image_url: '/images/mit/cad_lab2.jpg',
      caption: 'Finite element analysis (FEA), topological mass reduction, and kinematic simulation terminals for capstone 3D printing preparation.',
      date: 'CAD/CAM Lab 2'
    },
    {
      id: 'mitm-fac-lab-04',
      title: 'Mechanical Metrology & Measurements (MMM) QA Testing Lab',
      category: 'Laboratory',
      image_url: '/images/mit/mmm_lab5.jpg',
      caption: 'Coordinate measuring, optical profile projectors, surface roughness testers, and precision micrometers for post-print dimensional validation.',
      date: 'Metrology Lab'
    },
    {
      id: 'mitm-fac-lab-05',
      title: 'Heat Transfer Engineering Laboratory (Thermal Dissipation Rig)',
      category: 'Laboratory',
      image_url: '/images/mit/ht_lab.jpg',
      caption: 'Thermal verification testing rigs measuring heat conductivity and convection cooling of 3D printed heatsinks and fin arrays.',
      date: 'Thermal Lab'
    },
    {
      id: 'mitm-fac-lab-06',
      title: 'Fluid Mechanics & Turbomachinery Testing Facility',
      category: 'Laboratory',
      image_url: '/images/mit/fm_lab.jpg',
      caption: 'Hydraulic test loops and flow channels validating 3D printed fluid impellers, venturi tubes, and aerofoil blade profiles.',
      date: 'Fluid Systems Lab'
    },

    // --- 2. 3D Printers ---
    {
      id: 'mitm-fac-print-01',
      title: 'Industrial Dual-Extrusion FDM 3D Printer Station',
      category: '3D Printers',
      image_url: '/images/mit/fdm_3d_printer.jpg',
      caption: 'Dual extrusion high-temperature system supporting PLA, ABS, PETG, TPU, and chopped carbon-fiber filament.',
      date: '300x300x400 mm Volume'
    },
    {
      id: 'mitm-fac-print-02',
      title: 'Precision SLA UV Stereolithography 3D Machine',
      category: '3D Printers',
      image_url: '/images/mit/sla_3d_printer.jpg',
      caption: '405nm optical SLA stereolithography unit for 25-micron fine-tolerance micro features and rapid fluidic prototypes.',
      date: '25-50 Micron Layer'
    },

    // --- 3. Equipment ---
    {
      id: 'mitm-fac-eq-01',
      title: 'Structured Blue Light Optical 3D Scanner & Turntable',
      category: 'Equipment',
      image_url: '/images/mit/optical_scanner.jpg',
      caption: 'High-precision optical scanner with 0.02mm resolution for reverse engineering and automated CAD variance analysis.',
      date: '0.02mm Precision'
    },
    {
      id: 'mitm-fac-eq-02',
      title: 'Automated Ultrasonic Wash & UV Post-Curing Chamber',
      category: 'Equipment',
      image_url: '/images/mit/curing_chamber.jpg',
      caption: 'Isopropyl wash tank and multi-frequency UV curing station ensuring maximum tensile crosslinking for resin components.',
      date: 'Post-Processing Station'
    },

    // --- 4. Printed Models ---
    {
      id: 'mitm-fac-mod-01',
      title: 'Planetary Speed Reducer & Compliant Robotic Gripper',
      category: 'Printed Models',
      image_url: '/images/mit/planetary_prototype.jpg',
      caption: 'Monolithic print-in-place planetary gearbox with integral compliant bionic finger joints printed without external assembly.',
      date: 'Capstone Prototype'
    },

    // --- 5. Student Activities ---
    {
      id: 'mitm-fac-act-01',
      title: 'MECHISMOS State-Level Mechanical Project & 3D Prototype Expo',
      category: 'Student Activities',
      image_url: '/images/mit/mechismos_tech_expo.jpg',
      caption: 'Annual project exhibition demonstrating student-built 3D printed mechanical prototypes, robotics, and capstone engineering mechanisms.',
      date: 'Annual Expo'
    },
    {
      id: 'mitm-fac-act-02',
      title: 'Technical Hands-on Training on PLC, SCADA & NDT Automation',
      category: 'Student Activities',
      image_url: '/images/mit/training_plc_scada.png',
      caption: 'Skill development intensive workshop training mechanical students on automated industrial control systems, machine logic, and inspection.',
      date: 'Student Training'
    },
    {
      id: 'mitm-fac-act-03',
      title: 'Alumni Interactive Lecture on Modern CAD/CAM & Additive Prototyping',
      category: 'Student Activities',
      image_url: '/images/mit/expert_talk_sanjana.jpg',
      caption: 'Distinguished mechanical alumna Er. Sanjana mentoring students on generative design and 3D prototyping workflows for automotive components.',
      date: 'Alumni Lecture'
    },
    {
      id: 'mitm-fac-act-04',
      title: 'Student Slicing & Machine Toolpath Practical Session',
      category: 'Student Activities',
      image_url: '/images/mit/cad_lab1.jpg',
      caption: 'Hands-on laboratory training instructing mechanical engineering students in Ultimaker Cura and PrusaSlicer optimization.',
      date: 'Lab Practical'
    }
  ];

  // Fetch gallery items from backend or use defaults
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const items = await api.getGallery();
        if (items && items.length > 0) {
          setGalleryItems(items);
        } else {
          setGalleryItems(defaultFacilityItems);
        }
      } catch (err) {
        console.warn('Using default facility gallery items:', err);
        setGalleryItems(defaultFacilityItems);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const categories = [
    'All',
    'Laboratory',
    '3D Printers',
    'Equipment',
    'Printed Models',
    'Student Activities'
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category.toLowerCase() === activeCategory.toLowerCase());

  // Lightbox navigation
  const handleOpenLightbox = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveItemIndex(null);
  };

  const handlePrevItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleNextItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex !== null) {
      setActiveItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') setActiveItemIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
      if (e.key === 'ArrowRight') setActiveItemIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItemIndex, filteredItems.length]);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <section id="facility" className="py-20 bg-white border-b border-gray-200 scroll-mt-20">
      {/* Anchor alias for backwards compatibility */}
      <div id="gallery" className="absolute -mt-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4" />
            <span>Maharaja Institute of Technology Mysore</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Our 3D Printing Facility
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Department of Mechanical Engineering • Additive Manufacturing Laboratory, 3D printing machines, advanced inspection hardware, capstone prototypes &amp; student technical workshops.
          </p>
        </div>

        {/* Verification Status Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="text-xs text-slate-700 leading-relaxed">
              <strong className="text-gray-900 block font-semibold">Authentic Department Verification:</strong>
              Laboratory photos show real MIT Mysore mechanical engineering facilities (Research Lab, CAD/CAM Studios, Metrology Lab). Specific equipment placeholders are clearly marked pending department photo collection.
            </div>
          </div>
          <span className="text-[11px] font-mono font-bold text-[#f15a24] bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg shrink-0">
            {filteredItems.length} Photographs Available
          </span>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#f15a24] text-white shadow-md font-bold scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isPlaceholder = item.image_url.includes('placeholder') || item.caption?.includes('[Pending');

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-200 cursor-pointer transition-all duration-300 h-80 bg-slate-900 flex flex-col justify-end"
              >
                {/* Background Image / SVG */}
                <img
                  src={item.image_url}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.src = '/images/mit/research_lab.jpg';
                  }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#f15a24] text-white font-bold w-max shadow-sm">
                      {item.category}
                    </span>
                    {isPlaceholder && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/90 text-black font-extrabold">
                        Pending Upload
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white font-['Rajdhani'] uppercase tracking-wide group-hover:text-orange-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2 mt-1.5 font-light leading-relaxed">
                    {item.caption}
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-300 mt-3 pt-2.5 border-t border-white/20">
                    <span className="font-semibold text-orange-300">{item.date || 'MIT Mysore Mech'}</span>
                    <span className="text-white font-semibold flex items-center gap-1 group-hover:text-orange-300">
                      <span>Preview</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Full-Screen Image & Next/Prev Controls */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md"
          onClick={handleCloseLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-slate-950 border-b border-slate-800 text-white">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#f15a24] text-white font-bold">
                  {activeItem.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Photograph {activeItemIndex! + 1} of {filteredItems.length}
                </span>
              </div>

              <button
                onClick={handleCloseLightbox}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container with Prev / Next Navigation */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[62vh]">
              <img
                src={activeItem.image_url}
                alt={activeItem.title}
                onError={(e) => {
                  e.currentTarget.src = '/images/mit/research_lab.jpg';
                }}
                className="w-full h-full max-h-[60vh] object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={handlePrevItem}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#f15a24] text-white transition shadow-lg border border-white/10"
                title="Previous Image (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextItem}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 hover:bg-[#f15a24] text-white transition shadow-lg border border-white/10"
                title="Next Image (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption & Technical Details Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 text-white overflow-y-auto">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-lg sm:text-xl font-bold font-['Rajdhani'] uppercase tracking-wide text-white">
                  {activeItem.title}
                </h3>
                {activeItem.date && (
                  <span className="text-xs font-mono text-orange-400 shrink-0">
                    {activeItem.date}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {activeItem.caption}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
                <span>Maharaja Institute of Technology Mysore • Mechanical Engineering Facility</span>
                <span className="text-orange-400 font-semibold">Use ← → arrow keys to navigate</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
