import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Layers, 
  Search, 
  ArrowRight, 
  Printer, 
  Scan, 
  Cpu, 
  Award,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface HeroProps {
  onRequestClick: () => void;
  onTrackClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestClick, onTrackClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: '3D SCANNING',
      ribbon: 'ENABLING DIGITAL SOLUTIONS',
      titleHighlight: '3D',
      titleRest: 'S C A N N I N G',
      desc: 'High-precision structured blue-light optical scanning, reverse engineering, and CAD inspection with 0.02mm resolution at MIT Mysore.',
      ctaPrimary: 'Build Your Quote',
      ctaSecondary: 'Explore Technologies',
      image: '/images/mit/cad_lab1.jpg',
    },
    {
      badge: 'ADDITIVE MANUFACTURING',
      ribbon: 'INDUSTRIAL RAPID PROTOTYPING',
      titleHighlight: '3D',
      titleRest: 'P R I N T I N G',
      desc: 'Fused Deposition Modeling (FDM) and Stereolithography (SLA) printing delivering functional prototypes in engineering thermoplastics and resins.',
      ctaPrimary: 'Request 3D Print',
      ctaSecondary: 'View Materials',
      image: '/images/mit/research_lab.jpg',
    },
    {
      badge: 'MECHANICAL ENGINEERING',
      ribbon: 'INNOVATION & STUDENT CAPSTONE',
      titleHighlight: 'RAPID',
      titleRest: 'P R O T O T Y P I N G',
      desc: 'Transforming theoretical mechanical CAD models into tangible working mechanisms, planetary gearboxes, and automotive manifolds.',
      ctaPrimary: 'Submit CAD Model',
      ctaSecondary: 'Student Projects',
      image: '/images/mit/cad_lab2.jpg',
    }
  ];

  // Auto-rotate slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-gray-50 via-white to-orange-50/40 overflow-hidden border-b border-gray-200">
      {/* Background Radial Sunburst Flare (Identical to Rapid3D screenshot) */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-orange-300/40 via-orange-200/50 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute inset-0 hero-speedlines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[460px]">
          {/* LEFT COLUMN: Industrial Hardware Showcase (Scanner, CAD Monitor, Mechanical Part) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              {/* Hardware Photo */}
              <img
                src={slide.image}
                alt="3D Scanning and Printing Hardware Setup"
                onError={(e) => { e.currentTarget.src = '/images/mit/cad_lab1.jpg'; }}
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Graphical overlay representing 3D CAD scan interface */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-5">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md text-[11px] font-mono text-orange-400 font-bold border border-orange-500/30">
                    OPTICAL 3D SCANNER // ACTIVE
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>

                <div>
                  <div className="text-white font-bold text-sm font-mono mb-1">
                    CAD INSPECTION & REVERSE ENGINEERING
                  </div>
                  <div className="text-xs text-gray-300 font-light flex items-center gap-3">
                    <span>Resolution: 0.02mm</span>
                    <span>•</span>
                    <span>Turntable: 360° Automated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Hardware Spec Badge with Official College Logo */}
            <div className="absolute -bottom-4 -left-2 sm:left-4 bg-white p-3 rounded-2xl shadow-xl border border-orange-200 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-0.5 border border-orange-300 flex items-center justify-center shrink-0 shadow-sm">
                <img 
                  src="/images/mit_logo.png" 
                  alt="MIT Mysore College Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
                />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">MIT Mysore Additive Lab</div>
                <div className="text-[11px] text-gray-500">Industry 4.0 Prototyping Facility</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bold Rapid3D-styled Typography & Orange Banner */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            {/* Top Subtitle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Maharaja Institute of Technology Mysore</span>
            </div>

            {/* Giant "3D" & Spaced Subtitle (Matches Rapid3D exactly) */}
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#f15a24] font-['Rajdhani'] leading-none tracking-tight">
                {slide.titleHighlight}
              </span>
            </div>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 tracking-[0.25em] font-mono uppercase mb-4">
              {slide.titleRest}
            </div>

            {/* Orange Ribbon Banner with Angled Look */}
            <div className="relative inline-block mb-6">
              <div className="orange-ribbon px-5 py-2.5 rounded-sm shadow-md text-white font-bold text-xs sm:text-sm tracking-widest uppercase font-mono">
                {slide.ribbon}
              </div>
            </div>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-xl font-normal">
              {slide.desc}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onRequestClick}
                className="px-6 py-3.5 rounded bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 transition flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{slide.ctaPrimary}</span>
              </button>

              <a
                href="#technologies"
                className="px-6 py-3.5 rounded bg-gray-900 hover:bg-black text-white font-bold text-sm tracking-wide transition flex items-center gap-2"
              >
                <Layers className="w-4 h-4 text-orange-400" />
                <span>{slide.ctaSecondary}</span>
              </a>

              <button
                onClick={onTrackClick}
                className="px-5 py-3.5 rounded border-2 border-gray-300 hover:border-[#f15a24] text-gray-700 hover:text-[#f15a24] font-semibold text-sm transition flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>Track Order</span>
              </button>
            </div>

            {/* Slider Dots (● ○ ○ ○ as seen in Rapid3D screenshot) */}
            <div className="flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`transition-all rounded-full ${
                    currentSlide === i
                      ? 'w-8 h-2.5 bg-[#f15a24]'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  title={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip (Clean white cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900 font-mono">6+ PRINTERS</div>
              <div className="text-xs text-gray-500">FDM & SLA Stations</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]">
              <Scan className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900 font-mono">0.02 mm</div>
              <div className="text-xs text-gray-500">3D Scanning Precision</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900 font-mono">7+ MATERIALS</div>
              <div className="text-xs text-gray-500">PLA, ABS, PETG, Resin, CF</div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#f15a24]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900 font-mono">24 – 48 HRS</div>
              <div className="text-xs text-gray-500">Rapid Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
