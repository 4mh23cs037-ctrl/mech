import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'What is 3D printing and how does additive manufacturing work?',
      a: '3D printing (additive manufacturing) is a digital manufacturing process that constructs physical three-dimensional objects directly from computer-aided design (CAD) files by depositing material layer-by-layer. Unlike traditional subtractive manufacturing (such as CNC milling or turning where material is cut away from a raw block), additive manufacturing builds only the required geometry, minimizing raw material waste and enabling complex internal voids, lattice structures, and topological geometries.'
    },
    {
      q: 'Which 3D CAD file formats are accepted by the MIT Mysore lab?',
      a: 'Our lab slicing engines (UltiMaker Cura, PrusaSlicer, and PreForm) natively accept binary STL (.stl) and 3D Manufacturing Format (.3mf). We also accept Wavefront OBJ (.obj), standard STEP/STP (.step, .stp) solid models, and native SolidWorks part files (.sldprt). For best dimensional accuracy, export your CAD models with fine chord height tolerance (binary STL).'
    },
    {
      q: 'How long does a typical 3D print take to complete?',
      a: 'Print time depends on part volume, layer height resolution, infill percentage, and machine technology. Small demo components (under 50mm) take 1 to 3 hours; standard mechanical bracket assemblies take 6 to 14 hours; large aerodynamic manifolds or capstone mechanisms can require 18 to 36 hours. Average student queue turnaround is between 24 and 48 hours.'
    },
    {
      q: 'Which materials are available for mechanical engineering students?',
      a: 'We keep regular stock of PLA (biodegradable, high dimensional precision), ABS (impact and heat resistant up to 98°C), PETG (chemical resistance and toughness), TPU 95A (flexible elastomer), Tough Photopolymer Resin (405nm SLA/DLP for 25-micron surface smoothness), Nylon PA12 (low friction, high fatigue gears), and Carbon Fiber Reinforced PLA (maximum stiffness for drone arms).'
    },
    {
      q: 'How can students submit a 3D model for printing?',
      a: 'Students can submit directly through this portal using the "Build Your Quote / 3D Printing Request" form. Fill in your name, USN, semester, material selection, and upload your STL file. The portal generates a unique Tracking ID (e.g., MITM-2026-XXXX) which you can use in the "Track Status" tab to see real-time slicing and printing progress.'
    },
    {
      q: 'What is rapid prototyping and how does it help mechanical engineering projects?',
      a: 'Rapid prototyping is the rapid automated fabrication of a physical prototype using 3D CAD data. In mechanical engineering, it allows students to physically test gear ratios, verify bearing press-fits, test aerodynamic duct airflow, evaluate ergonomics, and iterate through multiple design cycles before committing to costly metal machining or injection mold tooling.'
    },
    {
      q: 'What are the recommended design guidelines for wall thickness and overhangs?',
      a: 'For FDM printing, maintain a minimum wall thickness of 1.2 mm (at least 3 perimeter passes with a 0.4 mm nozzle). Overhang angles greater than 45° from the vertical axis typically require support structures. For holes and shafts, account for thermal contraction by adding a 0.2 mm to 0.3 mm clearance allowance for slip fits.'
    },
    {
      q: 'What are the charges and operating hours for MIT Mysore students?',
      a: 'The lab operates Monday through Saturday from 9:00 AM to 5:00 PM in the Mechanical Engineering block. For registered MIT Mysore students, machine usage is subsidized by the college—students only pay a nominal recovery cost for raw material consumption (approx. ₹2.0 to ₹2.5 per gram for standard PLA/ABS).'
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Answers to common questions regarding 3D printing technologies, design guidelines, file formats, and lab access.
          </p>
        </div>

        <div className="relative mb-8">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search FAQs (e.g. materials, formats, turnaround, cost)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-300 focus:border-[#f15a24] pl-11 pr-4 py-3 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none transition shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-900 font-['Rajdhani']">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-gray-100 text-[#f15a24] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
