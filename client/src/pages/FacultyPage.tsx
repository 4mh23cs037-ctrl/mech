import React from 'react';
import { FacultySection } from '../components/FacultySection';
import { Users, GraduationCap, Award } from 'lucide-react';

export const FacultyPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold uppercase mb-2 border border-orange-500/20">
              <Users className="w-3.5 h-3.5" />
              <span>Department Mentors & Supervisors</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] uppercase tracking-wide">
              Department Faculty Members
            </h1>
            <p className="text-gray-300 text-sm mt-1 max-w-2xl">
              Meet our professors, PhD researchers, and technical officers steering student research, design consultations, and capstone manufacturing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-right">
              <span className="block text-[10px] font-mono text-gray-400 uppercase">Total Faculty</span>
              <span className="text-lg font-bold text-orange-400 font-mono">20+</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-right">
              <span className="block text-[10px] font-mono text-gray-400 uppercase">Doctorates</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">Ph.D. Guides</span>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty Section Component */}
      <FacultySection />
    </div>
  );
};
