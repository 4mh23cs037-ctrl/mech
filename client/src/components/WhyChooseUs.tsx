import React from 'react';
import { 
  Lightbulb, 
  Headphones, 
  Zap, 
  Microscope, 
  GraduationCap, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Practical Hands-on Learning',
      icon: GraduationCap,
      badge: 'Experiential',
      desc: 'VTU mechanical students gain direct hands-on training in machine calibration, filament handling, G-code parameter tuning, and post-processing.',
      metric: '100% Practical Access'
    },
    {
      title: 'Continuous Innovation & Research',
      icon: Lightbulb,
      badge: 'Patents & Papers',
      desc: 'Supporting patent filings, interdisciplinary capstones with robotics and electronics departments, and national conference publications.',
      metric: '12+ Research Papers'
    },
    {
      title: 'Dedicated Faculty & Design Support',
      icon: Headphones,
      badge: 'Mentorship',
      desc: 'Experienced PhD faculty and lab instructors assist students in FEA stress analysis, DFAM design optimization, and support reduction.',
      metric: 'Expert Mentorship'
    },
    {
      title: 'Rapid 24-48h Turnaround',
      icon: Zap,
      badge: 'High Speed',
      desc: 'Dedicated production queues ensure fast prototyping cycles so capstone project teams can validate mechanisms well ahead of deadlines.',
      metric: '24-48h Average'
    },
    {
      title: 'Advanced Optical 3D Scanning',
      icon: Microscope,
      badge: 'State of the Art',
      desc: 'Equipped with structured-light optical scanners (0.02mm accuracy), high-temp FDM units, and Formlabs SLA photopolymer stations.',
      metric: '0.02mm Precision'
    },
    {
      title: 'Holistic Student Development',
      icon: TrendingUp,
      badge: 'Industry Ready',
      desc: 'Graduates leave MIT Mysore with competitive digital fabrication credentials sought after by automotive, aerospace, and robotics employers.',
      metric: 'Industry Aligned'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The MIT Mysore Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Why Choose Our Facility?
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base">
            Empowering students with industry-grade additive manufacturing infrastructure, expert mechanical mentorship, and subsidized prototyping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#f15a24] transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#f15a24] flex items-center justify-center group-hover:bg-[#f15a24] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-gray-100 text-gray-700">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Benchmark:</span>
                  <span className="text-[#f15a24] font-bold">{feat.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
