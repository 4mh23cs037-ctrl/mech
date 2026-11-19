import React from 'react';
import { Printer, MapPin, Phone, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
  onRequestClick: () => void;
  onTrackClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick, onRequestClick, onTrackClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 text-xs border-t-4 border-[#f15a24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Brand */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-0.5 border border-orange-400 shadow-md flex items-center justify-center shrink-0">
                <img 
                  src="/images/mit_logo.png" 
                  alt="MIT Mysore College Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
                />
              </div>
              <div>
                <span className="text-lg font-black text-white font-['Rajdhani'] uppercase tracking-wider block">
                  RAPID 3D • MIT MYSORE
                </span>
                <span className="text-[11px] font-mono text-orange-400 uppercase">
                  Additive Manufacturing & Prototyping Center
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Department of Mechanical Engineering, Maharaja Institute of Technology Mysore.
              Affiliated to VTU Belagavi, approved by AICTE, New Delhi, and accredited with NAAC.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-[11px] text-gray-300 font-mono">
                Laboratory Online • Industrial 3D Printing & 3D Scanning
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              SECTIONS
            </h4>
            <a href="#about" className="hover:text-[#f15a24] transition">About Lab</a>
            <a href="#technologies" className="hover:text-[#f15a24] transition">Technologies</a>
            <a href="#industries" className="hover:text-[#f15a24] transition">Industries</a>
            <a href="#services" className="hover:text-[#f15a24] transition">Services</a>
            <a href="#materials" className="hover:text-[#f15a24] transition">Materials Matrix</a>
            <a href="#projects" className="hover:text-[#f15a24] transition">Student Projects</a>
            <a href="#facility" className="hover:text-[#f15a24] transition">Our Facility</a>
            <a href="#faculty" className="hover:text-[#f15a24] transition">Faculty Members</a>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3 font-mono">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              ACTIONS
            </h4>
            <button onClick={onRequestClick} className="text-left hover:text-[#f15a24] transition">
              Build Your Quote
            </button>
            <button onClick={onTrackClick} className="text-left hover:text-[#f15a24] transition">
              Track 3D Print Status
            </button>
            <button onClick={onAdminClick} className="text-left hover:text-[#f15a24] transition flex items-center gap-1 text-orange-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Faculty Admin</span>
            </button>
            <a href="#contact" className="hover:text-[#f15a24] transition">
              Campus Location
            </a>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider mb-1">
              CAMPUS & CONTACT
            </h4>
            <p className="text-gray-400 text-xs">
              Belawadi, S.R. Patna Taluk, Mandya Dist, Mysore – 571477, Karnataka
            </p>
            <p className="text-gray-400 text-xs font-mono">
              Ph: +91 98947 33117 / +91 81223 22022<br />
              Email: mechanical@mitmysore.in
            </p>
            <div className="p-2.5 rounded-lg bg-gray-800 text-[11px] font-mono text-orange-400 border border-gray-700">
              Lab Timings: Mon – Sat (9 AM – 5 PM)
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} MIT Mysore. Department of Mechanical Engineering. All Rights Reserved.
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
