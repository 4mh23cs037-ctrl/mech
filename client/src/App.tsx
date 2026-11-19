import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutDepartment } from './components/AboutDepartment';
import { Technologies } from './components/Technologies';
import { Services } from './components/Services';
import { MaterialsMatrix } from './components/MaterialsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { RequestSection } from './components/RequestSection';
import { TrackStatus } from './components/TrackStatus';
import { GallerySection } from './components/GallerySection';
import { FacultySection } from './components/FacultySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

export function App() {
  const [adminOpen, setAdminOpen] = useState(false);
  const [trackingQuery, setTrackingQuery] = useState<string | undefined>(undefined);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const [prefilledMaterial, setPrefilledMaterial] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestClick = () => {
    scrollToSection('request-printing');
  };

  const handleTrackClick = () => {
    scrollToSection('track');
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToSection('request-printing');
  };

  const handleMaterialSelect = (materialName: string) => {
    setPrefilledMaterial(materialName);
    scrollToSection('request-printing');
  };

  const handleTrackNavigate = (requestId?: string) => {
    if (requestId) {
      setTrackingQuery(requestId);
    }
    scrollToSection('track');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#f15a24] selection:text-white">
      {/* 1. Rapid3D Top Header & Main Navigation Bar */}
      <Navbar
        onRequestClick={handleRequestClick}
        onTrackClick={handleTrackClick}
        onAdminClick={() => setAdminOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 2. Hero Section (Matches Rapid3D Screenshot: 3D Scanner, Sunburst, Orange Ribbon) */}
        <Hero
          onRequestClick={handleRequestClick}
          onTrackClick={handleTrackClick}
        />

        {/* 3. About Department & Facility Overview */}
        <AboutDepartment />

        {/* 4. Dedicated "Our 3D Printing Facility" Section (Real Lab Photos, Printers, Equipment, Models) */}
        <GallerySection />

        {/* 5. Department Faculty Members & Mentors */}
        <FacultySection />

        {/* 6. 3D Printing Technologies (FDM, SLA, SLS, DLP) */}
        <Technologies />

        {/* 6. Services Matrix & Industries We Serve */}
        <Services onRequestService={handleServiceSelect} />

        {/* 7. Materials Matrix with Stock Indicators */}
        <MaterialsMatrix onSelectMaterial={handleMaterialSelect} />

        {/* 8. Student Capstone Project Showcase */}
        <ProjectsShowcase />

        {/* 9. 3D Printing Request Portal / Build Your Quote */}
        <RequestSection
          onTrackNavigate={handleTrackNavigate}
          prefilledService={prefilledService}
          prefilledMaterial={prefilledMaterial}
        />

        {/* 10. Live Request Status Tracker */}
        <TrackStatus
          initialQuery={trackingQuery}
          onRequestNew={handleRequestClick}
        />

        {/* 11. Why Choose Our Facility */}
        <WhyChooseUs />

        {/* 12. FAQ Accordion */}
        <FAQSection />

        {/* 13. Campus Location & Contact Inquiry Form */}
        <ContactSection />
      </main>

      {/* 14. Modern Footer */}
      <Footer
        onAdminClick={() => setAdminOpen(true)}
        onRequestClick={handleRequestClick}
        onTrackClick={handleTrackClick}
      />

      {/* 15. Faculty & Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />
    </div>
  );
}

export default App;
