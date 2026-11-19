import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  FileText, 
  Menu, 
  X, 
  Search, 
  ShieldCheck, 
  ChevronDown, 
  Printer 
} from 'lucide-react';

interface NavbarProps {
  onRequestClick: () => void;
  onTrackClick: () => void;
  onAdminClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestClick,
  onTrackClick,
  onAdminClick,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'About Department', href: '#about' },
    { name: 'Facility', href: '#facility' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Services', href: '#services' },
    { name: 'Materials', href: '#materials' },
    { name: 'Projects', href: '#projects' },
    { name: 'Track Status', href: '#track', isSpecial: true },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white">
      {/* 1. TOP HEADER BAR (Exactly as in Rapid3D reference) */}
      <div className="bg-white border-b border-gray-100 py-2 px-4 sm:px-6 lg:px-8 text-xs text-gray-700">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left contact info with circular orange icons */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="tel:+919894733117"
              className="flex items-center gap-2 hover:text-[#f15a24] transition font-medium"
            >
              <div className="w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 98947 33117</span>
            </a>

            <a
              href="tel:+918122322022"
              className="hidden sm:flex items-center gap-2 hover:text-[#f15a24] transition font-medium"
            >
              <div className="w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+91 81223 22022</span>
            </a>

            <a
              href="mailto:mechanical@mitmysore.in"
              className="hidden md:flex items-center gap-2 hover:text-[#f15a24] transition font-medium"
            >
              <div className="w-6 h-6 rounded-full bg-[#f15a24] flex items-center justify-center text-white">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span>mechanical@mitmysore.in</span>
            </a>
          </div>

          {/* Right Action Buttons (Rapid3D styled orange buttons) */}
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onRequestClick}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#f15a24] hover:bg-[#ea580c] text-white font-semibold text-xs tracking-wide shadow-sm transition"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get a Free Quote</span>
            </button>

            <button
              onClick={onRequestClick}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#f15a24] hover:bg-[#ea580c] text-white font-semibold text-xs tracking-wide shadow-sm transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Build Your Quote</span>
            </button>

            <button
              onClick={onAdminClick}
              className="p-1.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-[#f15a24] transition"
              title="Faculty / Admin Dashboard"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className={`transition-all duration-200 ${scrolled ? 'py-2.5 shadow-md' : 'py-3.5'} bg-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo (College Logo + Rapid3D stylized MIT Mysore branding) */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Official MIT Mysore College Circular Seal */}
            <div className="w-11 h-11 rounded-full bg-white p-0.5 border-2 border-orange-200 shadow-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src="/images/mit_logo.png" 
                alt="Maharaja Institute of Technology Mysore College Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-gray-900 font-['Rajdhani'] uppercase">
                  RAPID 3D
                </span>
                <span className="text-xs font-bold text-[#f15a24] uppercase font-mono">
                  • MIT MYSORE
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
                Dept. of Mechanical Engineering • VTU Center
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-5 text-[13px] font-semibold text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 ${
                  link.active
                    ? 'text-[#f15a24] border-b-2 border-[#f15a24]'
                    : link.isSpecial
                    ? 'text-[#f15a24] hover:text-[#ea580c] flex items-center gap-1'
                    : 'hover:text-[#f15a24]'
                }`}
              >
                <span>{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={onRequestClick}
              className="px-3 py-1.5 rounded bg-[#f15a24] text-white text-xs font-bold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#f15a24]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-sm font-semibold ${
                  link.active ? 'text-[#f15a24]' : 'text-gray-700 hover:text-[#f15a24]'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTrackClick();
                }}
                className="w-full py-2 rounded bg-gray-100 text-gray-800 font-bold text-xs"
              >
                Track 3D Print Request
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestClick();
                }}
                className="w-full py-2.5 rounded bg-[#f15a24] text-white font-bold text-xs"
              >
                Build Your Quote / Request Print
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
