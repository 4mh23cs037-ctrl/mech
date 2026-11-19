import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import { api } from '../services/api';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your Name, Email, and Message.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      await api.submitContact(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Failed to submit message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Contact Laboratory & Department
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Reach out to our mechanical engineering faculty and laboratory coordinators for technical queries, student consultations, and campus facility visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#f15a24] flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide">
                    Maharaja Institute of Technology Mysore
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    Department of Mechanical Engineering
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-xs text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-medium">Campus Address:</strong>
                    <span>Belawadi, S.R. Patna Taluk, Mandya District, Mysore – 571477, Karnataka, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-medium">Head of Department (HOD):</strong>
                    <span>Dr. Mohamed Khaisar (Professor & HOD, Mech)</span>
                    <span className="block text-gray-500 font-mono text-[11px]">Email: hodmech@mitmysore.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-medium">Department Office:</strong>
                    <span className="font-mono text-[#f15a24] font-bold">+91 98947 33117 / +91 81223 22022</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-medium">Official Email:</strong>
                    <span className="font-mono text-gray-800">mechanical@mitmysore.in / info@mitmysore.in</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#f15a24] mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900 block font-medium">AM Lab Working Hours:</strong>
                    <span>Monday to Saturday: 9:00 AM – 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-60 shadow-sm">
              <iframe
                title="MIT Mysore Campus Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.7936166541624!2d76.6787383748281!3d12.395349187870933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf712c9b68516d%3A0xb3a2a472cbb092fe!2sMaharaja%20Institute%20of%20Technology%20Mysore!5e0!3m2!1sen!2sin!4v1715849120000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-[#f15a24]" />
                <span>Send Laboratory Inquiry</span>
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Have a question about CAD modeling, student project queues, or corporate 3D printing services? Contact us below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-gray-900 font-['Rajdhani'] uppercase mb-1">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-gray-600 mb-4">
                    Thank you for contacting the MIT Mysore Mechanical Department. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-gray-100 text-xs text-gray-700 hover:bg-gray-200 transition"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rohith Gowda"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="student@mitmysore.in"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98450 12345"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Capstone Prototype Slicing"
                        className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your design questions or 3D printing requirements..."
                      className="w-full bg-gray-50 border border-gray-200 focus:border-[#f15a24] px-4 py-2.5 rounded-xl text-sm text-gray-900 focus:outline-none transition"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto self-end px-8 py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-xs uppercase font-mono tracking-wider transition shadow-md disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
