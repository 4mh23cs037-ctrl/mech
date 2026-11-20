import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { RequestSection } from '../components/RequestSection';
import { Printer, Upload, Calculator } from 'lucide-react';

export const RequestPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const prefilledService = searchParams.get('service') || undefined;
  const prefilledMaterial = searchParams.get('material') || undefined;

  const handleTrackNavigate = (requestId?: string) => {
    if (requestId) {
      navigate(`/track-status?id=${encodeURIComponent(requestId)}`);
    } else {
      navigate('/track-status');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold uppercase mb-2 border border-orange-500/20">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant CAD Slicing & Quote Estimation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] uppercase tracking-wide">
              3D Printing Request Portal
            </h1>
            <p className="text-gray-300 text-sm mt-1 max-w-2xl">
              Submit your 3D models (STL, OBJ, STEP, 3MF) with material preferences, infill percentage, and layer height specifications.
            </p>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-right">
            <span className="block text-[10px] font-mono text-gray-400 uppercase">Accepted Formats</span>
            <span className="text-sm font-bold text-white font-mono">.STL • .OBJ • .STEP</span>
          </div>
        </div>
      </div>

      {/* Request Form Component */}
      <RequestSection
        onTrackNavigate={handleTrackNavigate}
        prefilledService={prefilledService}
        prefilledMaterial={prefilledMaterial}
      />
    </div>
  );
};

