import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { AdminDashboard } from './AdminDashboard';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Send, 
  ShieldCheck, 
  ChevronRight,
  Printer
} from 'lucide-react';

export const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Page title mapping
  const pageTitles: Record<string, { title: string; subtitle: string }> = {
    '/': { title: 'Home', subtitle: 'Rapid Prototyping & Additive Manufacturing' },
    '/about': { title: 'About Department', subtitle: 'Mechanical Engineering • VTU Research Center' },
    '/facility': { title: 'Our 3D Printing Facility', subtitle: 'Authentic Laboratories & Industrial Machines' },
    '/faculty': { title: 'Faculty Members', subtitle: 'Department Professors, Mentors & Technical Staff' },
    '/technologies': { title: 'Technologies', subtitle: 'FDM, SLA, SLS, DLP & 3D Optical Scanning' },
    '/services': { title: 'Services', subtitle: 'Rapid Prototyping, Reverse Engineering & Batch Production' },
    '/materials': { title: 'Materials Matrix', subtitle: 'Engineering Thermoplastics, Resins & Composites' },
    '/projects': { title: 'Student Projects', subtitle: 'Final-Year Capstones & VTU Award-Winning Prototypes' },
    '/gallery': { title: 'Department Gallery', subtitle: 'Events, Workshops, Facilities & Achievements' },
    '/track-status': { title: 'Track Status', subtitle: 'Live 3D Print Request & Slicing Status Tracker' },
    '/request': { title: 'Build Your Quote', subtitle: 'Upload 3D CAD/STL Models & Calculate Print Quotes' },
    '/contact': { title: 'Contact Us', subtitle: 'Campus Location, Inquiries & Laboratory Visits' },
  };

  const currentInfo = pageTitles[location.pathname] || { title: 'Portal', subtitle: 'MIT Mysore Mechanical Engineering' };

  // Set document title
  useEffect(() => {
    document.title = `MIT Mysore 3D Printing | ${currentInfo.title}`;
  }, [currentInfo.title]);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 flex flex-col font-sans selection:bg-[#f15a24] selection:text-white">
      {/* 1. Vertical Sidebar Navigation */}
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        onAdminClick={() => setAdminOpen(true)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* 2. Main Content Wrapper (Offset based on sidebar width) */}
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 min-w-0 ${
          collapsed ? 'md:pl-20' : 'md:pl-72'
        }`}
      >
        {/* Top Navbar / Header Bar with Larger Font Sizes */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          {/* Top Bar for Desktop */}
          <div className="hidden md:flex items-center justify-between px-6 sm:px-8 py-3 bg-gray-50/90 border-b border-gray-100 text-sm text-gray-700">
            {/* Left: Department Contact Info with Enhanced Font */}
            <div className="flex items-center gap-7">
              <a 
                href="tel:+919894733117" 
                className="flex items-center gap-2 hover:text-[#f15a24] transition font-semibold text-gray-800"
              >
                <div className="w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 98947 33117</span>
              </a>

              <a 
                href="mailto:mechanical@mitmysore.in" 
                className="flex items-center gap-2 hover:text-[#f15a24] transition font-semibold text-gray-800"
              >
                <div className="w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>mechanical@mitmysore.in</span>
              </a>
            </div>

            {/* Right: Quick Action Buttons with Larger Text */}
            <div className="flex items-center gap-3">
              <Link
                to="/request"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f15a24] hover:bg-[#ea580c] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition"
              >
                <Send className="w-4 h-4" />
                <span>Build Your Quote</span>
              </Link>

              <button
                onClick={() => setAdminOpen(true)}
                className="p-2 rounded-xl bg-white border border-gray-200 hover:border-orange-300 text-gray-700 hover:text-[#f15a24] shadow-xs transition"
                title="Faculty & Admin Dashboard"
              >
                <ShieldCheck className="w-5 h-5 text-orange-500" />
              </button>
            </div>
          </div>

          {/* Breadcrumb / Page Title Navigation Bar with Increased Font */}
          <div className="px-4 sm:px-8 py-3.5 flex items-center justify-between">
            {/* Mobile: Hamburger + Brand */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 transition"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <Link to="/" className="flex items-center gap-2.5">
                <img 
                  src="/images/mit_logo.png" 
                  alt="MIT Mysore Logo" 
                  className="w-9 h-9 object-contain"
                  onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
                />
                <div>
                  <span className="font-extrabold text-base text-gray-900 font-['Rajdhani'] block leading-none uppercase">
                    RAPID 3D
                  </span>
                  <span className="text-[10px] text-[#f15a24] font-mono font-bold">
                    MIT MYSORE
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop: Breadcrumbs & Current Page Info */}
            <div className="hidden md:flex items-center gap-2.5">
              <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-[#f15a24] transition">
                Portal
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-extrabold text-base sm:text-lg text-gray-900 font-['Rajdhani'] uppercase tracking-wider">
                {currentInfo.title}
              </span>
              <span className="hidden lg:inline text-gray-300 mx-2 text-base">•</span>
              <span className="hidden lg:inline text-gray-600 text-xs sm:text-sm font-medium">
                {currentInfo.subtitle}
              </span>
            </div>

            {/* Mobile Right: Quote CTA */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/request"
                className="px-3.5 py-2 rounded-xl bg-[#f15a24] text-white text-xs font-bold font-mono shadow-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </header>

        {/* 3. Page Content View (Dynamic Routed Content) */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* 4. Modern Footer */}
        <Footer
          onAdminClick={() => setAdminOpen(true)}
          onRequestClick={() => navigate('/request')}
          onTrackClick={() => navigate('/track-status')}
        />
      </div>

      {/* 5. Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />
    </div>
  );
};
