import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  GraduationCap, 
  Building2, 
  Users, 
  Layers, 
  Briefcase, 
  Boxes, 
  Lightbulb, 
  Image as ImageIcon, 
  Compass, 
  Mail, 
  Send, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Phone,
  Printer,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onAdminClick: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  onToggleCollapse,
  onAdminClick,
  mobileOpen,
  onMobileClose
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/', icon: Home, badge: null },
    { name: 'About Department', path: '/about', icon: GraduationCap, badge: null },
    { name: 'Facility', path: '/facility', icon: Building2, badge: 'Real Labs' },
    { name: 'Faculty', path: '/faculty', icon: Users, badge: null },
    { name: 'Technologies', path: '/technologies', icon: Layers, badge: null },
    { name: 'Services', path: '/services', icon: Briefcase, badge: null },
    { name: 'Materials', path: '/materials', icon: Boxes, badge: 'Stocked' },
    { name: 'Projects', path: '/projects', icon: Lightbulb, badge: 'Capstone' },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon, badge: null },
    { name: 'Track Status', path: '/track-status', icon: Compass, badge: 'Live' },
    { name: 'Contact Us', path: '/contact', icon: Mail, badge: null },
  ];

  const handleNavClick = () => {
    if (mobileOpen) {
      onMobileClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div 
          onClick={onMobileClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Main Vertical Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 bg-[#0c1322] text-gray-200 border-r border-slate-800 flex flex-col justify-between transition-all duration-300 shadow-2xl ${
          collapsed ? 'w-20' : 'w-64'
        } ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top Header / Branding */}
        <div className="p-4 border-b border-slate-800/80 bg-[#090e1a] shrink-0">
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="flex items-center gap-3 group"
          >
            {/* Official MIT Mysore Circular Seal */}
            <div className="w-11 h-11 rounded-full bg-white p-0.5 border-2 border-orange-500 shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src="/images/mit_logo.png" 
                alt="MIT Mysore Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
              />
            </div>

            {/* Title / Subtitle (hidden when collapsed on desktop) */}
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${collapsed ? 'md:hidden' : 'block'}`}>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-wider text-white font-['Rajdhani'] uppercase">
                  RAPID 3D
                </span>
                <span className="text-[10px] font-bold text-[#f15a24] uppercase font-mono px-1.5 py-0.2 rounded bg-orange-500/10 border border-orange-500/20">
                  MITM
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase truncate">
                Dept. of Mechanical Engg.
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Items (Scrollable) */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5 custom-scrollbar">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                title={collapsed ? item.name : undefined}
                className={({ isActive }) => `
                  group relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200
                  ${isActive 
                    ? 'bg-gradient-to-r from-[#f15a24] to-[#ea580c] text-white shadow-lg shadow-orange-500/25 font-bold' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'}
                  ${collapsed ? 'md:justify-center md:px-0' : ''}
                `}
              >
                {/* Active Indicator Bar on Left */}
                {isActive && (
                  <span className="absolute left-0 top-1.5 bottom-1.5 w-1 rounded-r bg-white shadow-sm" />
                )}

                <Icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-orange-400'}`} />

                {/* Label & Badge */}
                <div className={`flex items-center justify-between flex-1 overflow-hidden ${collapsed ? 'md:hidden' : 'flex'}`}>
                  <span className="truncate">{item.name}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold tracking-wider ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Tooltip on Collapsed Desktop */}
                {collapsed && (
                  <div className="hidden md:group-hover:flex absolute left-full ml-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-700 whitespace-nowrap z-50 items-center gap-2">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="text-[9px] font-mono px-1 py-0.5 rounded bg-orange-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom Actions & Controls */}
        <div className="p-3 border-t border-slate-800/80 bg-[#090e1a]/90 shrink-0 space-y-2">
          {/* Action Button: Request Quote */}
          <Link
            to="/request"
            onClick={handleNavClick}
            title={collapsed ? "Build Quote / Request 3D Print" : undefined}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-orange-600 hover:bg-[#f15a24] text-white text-xs font-bold font-mono tracking-wide shadow-md shadow-orange-600/20 transition-all ${
              collapsed ? 'md:px-0' : ''
            }`}
          >
            <Send className="w-4 h-4 shrink-0" />
            <span className={collapsed ? 'md:hidden' : 'inline'}>Request 3D Print</span>
          </Link>

          {/* Admin Dashboard Trigger */}
          <button
            onClick={() => {
              onAdminClick();
              if (mobileOpen) onMobileClose();
            }}
            title={collapsed ? "Faculty & Admin Portal" : undefined}
            className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-xs font-medium transition ${
              collapsed ? 'md:px-0' : ''
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
            <span className={collapsed ? 'md:hidden' : 'inline'}>Faculty Admin</span>
          </button>

          {/* Laboratory Status (expanded only) */}
          <div className={`pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 ${collapsed ? 'md:hidden' : 'flex'}`}>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>VTU Center Online</span>
            </div>
            <span className="text-slate-500">v2.4</span>
          </div>

          {/* Desktop Collapse / Expand Toggle Button */}
          <div className="hidden md:flex justify-end pt-1">
            <button
              onClick={onToggleCollapse}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <div className="flex items-center gap-1 text-[11px] font-mono">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Collapse</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
