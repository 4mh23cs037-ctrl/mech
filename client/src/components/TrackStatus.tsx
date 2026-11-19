import React, { useState, useEffect } from 'react';
import { 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  FileText, 
  Eye, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { PrintingRequest } from '../types';
import { api } from '../services/api';
import { STLViewerModal } from './STLViewerModal';

interface TrackStatusProps {
  initialQuery?: string;
  onRequestNew: () => void;
}

export const TrackStatus: React.FC<TrackStatusProps> = ({ initialQuery, onRequestNew }) => {
  const [query, setQuery] = useState(initialQuery || '');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PrintingRequest[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [activePreviewModel, setActivePreviewModel] = useState<{ url: string; name: string } | null>(null);

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = async (searchParam?: string) => {
    const q = (searchParam || query).trim();
    if (!q) {
      setError('Please enter a Request ID (e.g. MITM-2026-0101) or USN.');
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const data = await api.trackRequest(q);
      if (data && data.length > 0) {
        setResults(data);
      } else {
        setError(`No active requests found for "${q}".`);
      }
    } catch (err: any) {
      setError(err.message || 'No requests found matching this ID or USN.');
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = [
    'Submitted',
    'Under Review',
    'Slicing & Approved',
    'Queued for Printing',
    'Printing in Progress',
    'Post-Processing',
    'Ready for Pickup',
    'Completed'
  ];

  const getStepIndex = (status: string): number => {
    const idx = statusSteps.indexOf(status);
    return idx >= 0 ? idx : 0;
  };

  return (
    <section id="track" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Manufacturing Tracking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Track 3D Printing Status
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Check real-time production stages, view slicing notes, and check pickup readiness.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="max-w-2xl mx-auto mb-12">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="flex items-center gap-2 p-2 rounded-2xl bg-white border border-gray-300 shadow-md"
          >
            <div className="pl-3 text-[#f15a24]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Enter Request ID (MITM-2026-XXXX) or Student USN (e.g. 4MH21ME005)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm text-gray-900 placeholder-gray-400 focus:outline-none px-2 font-mono"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono tracking-wider transition shadow-sm disabled:opacity-50"
            >
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>

          {/* Demo Chips */}
          <div className="flex items-center justify-center gap-2 mt-3 text-xs font-mono text-gray-500">
            <span>Quick sample searches:</span>
            <button
              onClick={() => {
                setQuery('MITM-2026-0101');
                handleSearch('MITM-2026-0101');
              }}
              className="text-[#f15a24] hover:underline"
            >
              MITM-2026-0101
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setQuery('4MH22ME045');
                handleSearch('4MH22ME045');
              }}
              className="text-[#f15a24] hover:underline"
            >
              4MH22ME045 (Ready)
            </button>
          </div>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-3 max-w-2xl mx-auto mb-8">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Results */}
        {results && results.length > 0 && (
          <div className="flex flex-col gap-6">
            {results.map((req) => {
              const currentStepIdx = getStepIndex(req.status);

              return (
                <div
                  key={req.id}
                  className="bg-white rounded-3xl border border-gray-200 p-6 md:p-8 shadow-md relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center">
                        <Printer className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-900 font-mono">{req.id}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-mono">
                            {req.usn}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-700">{req.project_name}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border ${
                          req.status === 'Ready for Pickup' || req.status === 'Completed'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : req.status === 'Printing in Progress'
                            ? 'bg-orange-50 text-[#ea580c] border-orange-200 animate-pulse'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                      >
                        ● {req.status.toUpperCase()}
                      </span>

                      {req.file_name && req.file_name.toLowerCase().endsWith('.stl') && (
                        <button
                          onClick={() => {
                            setActivePreviewModel({
                              url: `/uploads/${req.file_path}`,
                              name: req.file_name || 'CAD Model',
                            });
                            setPreviewModalOpen(true);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-mono transition"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>3D View</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Step pipeline */}
                  <div className="mb-8 overflow-x-auto py-2">
                    <div className="min-w-[600px] flex items-center justify-between relative">
                      <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-200 -translate-y-1/2 -z-0" />
                      <div
                        className="absolute top-1/2 left-4 h-0.5 bg-[#f15a24] -translate-y-1/2 -z-0 transition-all duration-500"
                        style={{
                          width: `${(currentStepIdx / (statusSteps.length - 1)) * 100}%`,
                        }}
                      />

                      {statusSteps.map((step, idx) => {
                        const isDone = idx <= currentStepIdx;
                        const isCurrent = idx === currentStepIdx;

                        return (
                          <div key={step} className="flex flex-col items-center gap-2 z-10">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                                isCurrent
                                  ? 'bg-[#f15a24] text-white shadow-md scale-110'
                                  : isDone
                                  ? 'bg-orange-100 text-[#f15a24] border border-orange-300'
                                  : 'bg-gray-100 text-gray-400 border border-gray-200'
                              }`}
                            >
                              {isDone && !isCurrent ? (
                                <CheckCircle2 className="w-4 h-4 text-[#f15a24]" />
                              ) : (
                                idx + 1
                              )}
                            </div>
                            <span
                              className={`text-[10px] font-mono text-center max-w-[75px] ${
                                isCurrent
                                  ? 'text-[#f15a24] font-bold'
                                  : isDone
                                  ? 'text-gray-800'
                                  : 'text-gray-400'
                              }`}
                            >
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-mono mb-4">
                    <div>
                      <span className="text-gray-500 block">Student:</span>
                      <span className="text-gray-900 font-semibold">{req.student_name}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Tech / Material:</span>
                      <span className="text-gray-900 font-semibold">{req.technology} • {req.material}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Quantity:</span>
                      <span className="text-gray-900 font-semibold">{req.quantity} unit(s) • {req.infill_percentage}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Est. Completion:</span>
                      <span className="text-emerald-700 font-bold">{req.estimated_completion || 'In Progress'}</span>
                    </div>
                  </div>

                  {req.admin_notes && (
                    <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs">
                      <div className="text-[#ea580c] font-mono font-bold uppercase mb-1 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>LABORATORY INCHARGE FEEDBACK:</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-mono">{req.admin_notes}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* 3D STL Viewer Modal */}
        {activePreviewModel && (
          <STLViewerModal
            isOpen={previewModalOpen}
            onClose={() => setPreviewModalOpen(false)}
            fileUrl={activePreviewModel.url}
            modelName={activePreviewModel.name}
          />
        )}
      </div>
    </section>
  );
};
