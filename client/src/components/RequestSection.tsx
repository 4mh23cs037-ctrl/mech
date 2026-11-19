import React, { useState } from 'react';
import { 
  Printer, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Send, 
  Copy, 
  ArrowRight,
  ShieldCheck,
  Calculator,
  Mail
} from 'lucide-react';
import { api } from '../services/api';
import { STLViewerModal } from './STLViewerModal';

interface RequestSectionProps {
  onTrackNavigate: (reqId?: string) => void;
  prefilledService?: string;
  prefilledMaterial?: string;
}

export const RequestSection: React.FC<RequestSectionProps> = ({
  onTrackNavigate,
  prefilledService,
  prefilledMaterial,
}) => {
  const [formData, setFormData] = useState({
    student_name: '',
    usn: '',
    department: 'Mechanical Engineering',
    year_semester: '4th Year (8th Sem)',
    email: '',
    phone: '',
    project_name: prefilledService ? `${prefilledService} Prototype` : '',
    technology: 'FDM',
    material: prefilledMaterial || 'PLA (Polylactic Acid)',
    quantity: 1,
    dimensions: '',
    infill_percentage: 20,
    layer_height: 0.2,
    additional_instructions: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    requestId: string;
    message: string;
  } | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validExtensions = ['.stl', '.obj', '.step', '.stp', '.3mf'];
      const ext = '.' + file.name.split('.').pop()?.toLowerCase();

      if (!validExtensions.includes(ext)) {
        setFileError(`Unsupported format. Please upload STL, OBJ, STEP, or 3MF. (${ext})`);
        setSelectedFile(null);
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        setFileError('File size exceeds the 50MB laboratory limit.');
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
    }
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.student_name.trim()) errors.student_name = 'Student Name is required';
    if (!formData.usn.trim()) errors.usn = 'USN is required (e.g. 4MH21ME001)';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid 10-digit phone number is required';
    if (!formData.project_name.trim()) errors.project_name = 'Project Title is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        data.append(key, String(val));
      });

      if (selectedFile) {
        data.append('file', selectedFile);
      }

      const res = await api.createRequest(data);
      if (res && res.request_id) {
        setSubmissionSuccess({
          requestId: res.request_id,
          message: res.message || 'Request successfully registered!',
        });
      } else {
        throw new Error('Invalid response');
      }
    } catch (err: any) {
      alert(`Submission error: ${err.message || 'Server error'}`);
    } finally {
      setSubmitting(false);
    }
  };

  const copyRequestId = () => {
    if (submissionSuccess?.requestId) {
      navigator.clipboard.writeText(submissionSuccess.requestId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const estWeight = Math.max(15, Math.round(formData.quantity * (formData.infill_percentage * 0.9 + 20)));
  const estCost = Math.round(estWeight * (formData.technology === 'SLA' ? 6.0 : 2.5));

  return (
    <section id="request-printing" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Printer className="w-3.5 h-3.5" />
            <span>Direct Digital Fabrication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Build Your 3D Printing Quote
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Upload your CAD model (STL, OBJ, STEP, 3MF) to receive instant dimension analysis, filament cost calculation, and production queuing.
          </p>
        </div>

        {/* Success Modal */}
        {submissionSuccess ? (
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 font-['Rajdhani'] uppercase mb-2">
              Quote & 3D Print Request Registered!
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Your CAD file has been received by the MIT Mysore Additive Manufacturing Laboratory.
            </p>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between gap-4 max-w-md mx-auto mb-8">
              <div className="text-left font-mono">
                <span className="text-[10px] text-gray-500 block uppercase font-medium">Tracking ID:</span>
                <span className="text-lg font-bold text-[#f15a24]">{submissionSuccess.requestId}</span>
              </div>
              <button
                onClick={copyRequestId}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-orange-200 text-[#f15a24] text-xs font-semibold hover:bg-orange-100 transition"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => onTrackNavigate(submissionSuccess.requestId)}
                className="px-6 py-2.5 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono shadow-md transition"
              >
                Track Request Status
              </button>

              <button
                onClick={() => {
                  setSubmissionSuccess(null);
                  setSelectedFile(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition"
              >
                Submit Another Model
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-gray-200 p-6 md:p-10 shadow-lg relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Step 1 */}
              <div className="md:col-span-2 border-b border-gray-100 pb-3 flex items-center gap-2 text-[#f15a24] font-mono text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>1. Student & Contact Information</span>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Student Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="student_name"
                  value={formData.student_name}
                  onChange={handleInputChange}
                  placeholder="e.g. Abhishek Sharma"
                  className={`w-full bg-gray-50 border ${formErrors.student_name ? 'border-red-500' : 'border-gray-200'} focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  USN (University Seat Number) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="usn"
                  value={formData.usn}
                  onChange={handleInputChange}
                  placeholder="e.g. 4MH21ME005"
                  className={`w-full bg-gray-50 border ${formErrors.usn ? 'border-red-500' : 'border-gray-200'} focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono uppercase focus:outline-none transition`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Department
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                >
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Robotics & Automation">Robotics & Automation</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electronics & Communication">Electronics & Communication</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Year / Semester
                </label>
                <select
                  name="year_semester"
                  value={formData.year_semester}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                >
                  <option value="1st Year (1st/2nd Sem)">1st Year (1st / 2nd Sem)</option>
                  <option value="2nd Year (3rd/4th Sem)">2nd Year (3rd / 4th Sem)</option>
                  <option value="3rd Year (5th/6th Sem)">3rd Year (5th / 6th Sem)</option>
                  <option value="4th Year (7th/8th Sem)">4th Year (7th / 8th Sem - Capstone)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="student@mitmysore.in"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Mobile / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98450 12345"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                />
              </div>

              {/* Step 2 */}
              <div className="md:col-span-2 border-b border-gray-100 pb-3 pt-2 flex items-center gap-2 text-[#f15a24] font-mono text-xs font-bold uppercase tracking-wider">
                <Printer className="w-4 h-4" />
                <span>2. Component Specifications & Material Selection</span>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Project Title / Component Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="project_name"
                  value={formData.project_name}
                  onChange={handleInputChange}
                  placeholder="e.g. Planetary Gear Reducer Carrier"
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Printing Technology
                </label>
                <select
                  name="technology"
                  value={formData.technology}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono focus:outline-none transition"
                >
                  <option value="FDM">FDM – Fused Deposition Modeling (Thermoplastics)</option>
                  <option value="SLA">SLA – Stereolithography (Ultra-Smooth UV Resin)</option>
                  <option value="SLS">SLS – Selective Laser Sintering (Nylon PA12)</option>
                  <option value="DLP">DLP – Digital Light Processing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Material Selection
                </label>
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono focus:outline-none transition"
                >
                  <option value="PLA (Polylactic Acid)">PLA (Polylactic Acid) – Standard Prototyping</option>
                  <option value="ABS (Acrylonitrile Butadiene Styrene)">ABS – High Impact & Heat (98°C)</option>
                  <option value="PETG (Polyethylene Terephthalate Glycol)">PETG – Durable & Chemical Resistant</option>
                  <option value="TPU 95A (Thermoplastic Polyurethane)">TPU 95A – Flexible Elastomer</option>
                  <option value="Tough Photopolymer Resin">Tough Photopolymer Resin (25-micron SLA)</option>
                  <option value="Nylon PA12">Nylon PA12 – High Fatigue Gears</option>
                  <option value="Carbon Fiber PLA (CF-PLA)">Carbon Fiber PLA – Structural Rigidity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium">
                  Quantity Required (Units)
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 font-mono focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-700 mb-1.5 font-medium flex justify-between">
                  <span>Infill Density (%):</span>
                  <span className="text-[#f15a24] font-bold">{formData.infill_percentage}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  name="infill_percentage"
                  value={formData.infill_percentage}
                  onChange={handleInputChange}
                  className="w-full accent-[#f15a24] cursor-pointer"
                />
              </div>

              {/* Step 3: CAD Upload */}
              <div className="md:col-span-2 border-b border-gray-100 pb-3 pt-2 flex items-center justify-between text-[#f15a24] font-mono text-xs font-bold uppercase tracking-wider">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>3. Upload 3D CAD Model (STL, OBJ, STEP, 3MF)</span>
                </div>
                <span className="text-[10px] text-gray-400">Max 50MB</span>
              </div>

              <div className="md:col-span-2">
                <div className="border-2 border-dashed border-gray-300 hover:border-[#f15a24] rounded-2xl p-6 text-center bg-gray-50 hover:bg-orange-50/20 transition-all flex flex-col items-center justify-center">
                  <Upload className="w-10 h-10 text-[#f15a24] mb-2" />
                  <p className="text-sm font-semibold text-gray-800 mb-1">
                    {selectedFile ? selectedFile.name : 'Drag and drop your 3D CAD file here, or click Browse'}
                  </p>
                  <p className="text-xs text-gray-500 font-mono mb-3">
                    Accepts .STL, .OBJ, .STEP, .3MF (Recommended: Binary STL)
                  </p>

                  <input
                    type="file"
                    id="file-upload"
                    accept=".stl,.obj,.step,.stp,.3mf"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <label
                      htmlFor="file-upload"
                      className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-black text-white text-xs font-mono font-bold cursor-pointer transition"
                    >
                      {selectedFile ? 'Change File' : 'Browse Files'}
                    </label>

                    {selectedFile && selectedFile.name.toLowerCase().endsWith('.stl') && (
                      <button
                        type="button"
                        onClick={() => setPreviewOpen(true)}
                        className="px-4 py-2 rounded-xl bg-orange-100 hover:bg-orange-200 text-[#ea580c] text-xs font-mono font-bold flex items-center gap-2 transition"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Interactive 3D WebGL Preview</span>
                      </button>
                    )}
                  </div>

                  {fileError && (
                    <div className="mt-3 text-xs font-mono text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{fileError}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Estimate calculation */}
              <div className="md:col-span-2 p-4 rounded-xl bg-orange-50 border border-orange-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-gray-800 font-bold">
                  <Calculator className="w-4 h-4 text-[#f15a24]" />
                  <span>PRELIMINARY ESTIMATION:</span>
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <span className="text-gray-500 block text-[10px]">EST. FILAMENT:</span>
                    <span className="text-gray-900 font-bold">~{estWeight} g</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">EST. TIME:</span>
                    <span className="text-gray-900 font-bold">~{Math.max(2, Math.round(estWeight / 14))} hrs</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">LAB COST:</span>
                    <span className="text-[#f15a24] font-bold text-sm">~₹{estCost}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500">
                A unique tracking reference code will be generated immediately upon submission.
              </span>

              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition disabled:opacity-50"
              >
                {submitting ? (
                  <span>Registering...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request & Generate Quote</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* 3D STL Preview Modal */}
        {selectedFile && previewOpen && (
          <STLViewerModal
            isOpen={previewOpen}
            onClose={() => setPreviewOpen(false)}
            file={selectedFile}
            modelName={selectedFile.name}
          />
        )}
      </div>
    </section>
  );
};
