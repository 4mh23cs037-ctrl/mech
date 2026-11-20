import React from 'react';
import { GallerySection } from '../components/GallerySection';
import { Building2, Camera, ShieldCheck } from 'lucide-react';

export const FacilityPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold uppercase mb-2 border border-orange-500/20">
              <Camera className="w-3.5 h-3.5" />
              <span>Authentic Department Facilities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] uppercase tracking-wide">
              Our 3D Printing Facility & Laboratories
            </h1>
            <p className="text-gray-300 text-sm mt-1 max-w-2xl">
              Photographic documentation of our Additive Manufacturing, CAD/CAM, Material Testing, Machine Shops, and Metrology stations at MIT Mysore.
            </p>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div className="text-left">
              <span className="block text-[10px] font-mono text-gray-400 uppercase">Laboratory Verification</span>
              <span className="text-xs font-bold text-white font-mono">Verified College Assets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dedicated Facility Section Component */}
      <GallerySection />
    </div>
  );
};

