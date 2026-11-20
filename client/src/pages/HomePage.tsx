import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FAQSection } from '../components/FAQSection';
import { 
  Building2, 
  Layers, 
  Boxes, 
  Lightbulb, 
  Users, 
  ArrowRight, 
  Printer, 
  CheckCircle2, 
  Compass, 
  Sparkles 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate('/request');
  };

  const handleTrackClick = () => {
    navigate('/track-status');
  };

  const quickPortals = [
    {
      title: 'Our 3D Printing Facility',
      desc: 'Explore authentic photos of our additive manufacturing laboratory, 3D printers, curing stations, and reverse engineering scanners.',
      path: '/facility',
      icon: Building2,
      badge: 'Real Labs & Equipment',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: '3D Printing Technologies',
      desc: 'Discover FDM, SLA, SLS, and DLP capabilities with 0.02mm optical scanning accuracy and custom build envelopes.',
      path: '/technologies',
      icon: Layers,
      badge: '4+ AM Processes',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Engineering Materials Matrix',
      desc: 'Stocked high-grade thermoplastics, photopolymers, elastomers, and chopped carbon fiber composites with live inventory status.',
      path: '/materials',
      icon: Boxes,
      badge: '7+ Stocked Materials',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Student Capstone Projects',
      desc: 'Review award-winning planetary gearboxes, lightweight racing manifolds, bionic prosthetics, and robotic leg prototypes.',
      path: '/projects',
      icon: Lightbulb,
      badge: 'VTU State Awards',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Faculty Members & Mentors',
      desc: 'Meet our department professors, PhD scholars, and specialized additive manufacturing research directors.',
      path: '/faculty',
      icon: Users,
      badge: 'Expert Guidance',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Live Request Tracker',
      desc: 'Enter your tracking ID or student USN to view real-time slicing, queue position, printing status, and pickup verification.',
      path: '/track-status',
      icon: Compass,
      badge: 'Instant Tracking',
      color: 'from-amber-600 to-orange-600'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Interactive 3D Canvas */}
      <Hero
        onRequestClick={handleRequestClick}
        onTrackClick={handleTrackClick}
      />

      {/* 2. Quick Portals Directory (Clean Cards linking to separate pages) */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Dedicated Department Portals</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
              Center of Additive Manufacturing Excellence
            </h2>
            <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
            <p className="text-gray-600 text-sm sm:text-base">
              Navigate directly to our dedicated facility gallery, material inventory, capstone project archive, or submit a custom CAD print order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickPortals.map((portal) => {
              const Icon = portal.icon;
              return (
                <Link
                  key={portal.path}
                  to={portal.path}
                  className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${portal.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#f15a24] border border-orange-200">
                        {portal.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#f15a24] font-['Rajdhani'] transition-colors mb-2">
                      {portal.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {portal.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold font-mono text-[#f15a24] group-hover:translate-x-1 transition-transform">
                    <span>Open Section</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. Frequently Asked Questions */}
      <FAQSection />

      {/* 5. Bottom Ready to Print CTA */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
            Rapid Turnaround • Student Subsidized Rates
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Rajdhani'] uppercase tracking-wide mb-4">
            Have a 3D CAD Model Ready to Fabricate?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Upload your STL, OBJ, STEP, or 3MF model to calculate material consumption, print time, and instant cost estimates with faculty review.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request"
              className="px-6 py-3 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/30 transition flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Submit 3D Print Request</span>
            </Link>

            <Link
              to="/track-status"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-sm border border-slate-600 transition flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              <span>Track Existing Job</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

