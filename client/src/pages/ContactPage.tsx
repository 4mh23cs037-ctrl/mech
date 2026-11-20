import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold uppercase mb-2 border border-orange-500/20">
              <MapPin className="w-3.5 h-3.5" />
              <span>Campus Location & Inquiry Desk</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] uppercase tracking-wide">
              Contact & Laboratory Visits
            </h1>
            <p className="text-gray-300 text-sm mt-1 max-w-2xl">
              Connect with our Additive Manufacturing Facility incharge, schedule an equipment demonstration, or visit our engineering campus.
            </p>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-right">
            <span className="block text-[10px] font-mono text-gray-400 uppercase">Helpline</span>
            <span className="text-sm font-bold text-[#f15a24] font-mono">+91 98947 33117</span>
          </div>
        </div>
      </div>

      {/* Contact Section Component */}
      <ContactSection />
    </div>
  );
};

