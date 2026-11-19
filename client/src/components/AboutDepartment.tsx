import React from 'react';
import { 
  Building2, 
  Cpu, 
  Award, 
  GraduationCap, 
  FlaskConical, 
  Target, 
  Compass, 
  Microscope,
  BookOpen,
  Users,
  Trophy
} from 'lucide-react';

export const AboutDepartment: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Maharaja Institute of Technology Mysore</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Department of Mechanical Engineering
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Estd. 2007 • Affiliated to Visvesvaraya Technological University (VTU) Belagavi • AICTE Approved • NAAC Accredited • Autonomous Institution
          </p>
        </div>

        {/* 2-Column Overview with Real MIT Mysore Campus Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Real Photos Collage of MIT Mysore */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Primary Real Campus Building Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 group">
              <img
                src="/images/mit/mit_campus_front.webp"
                alt="Maharaja Institute of Technology Mysore Campus Building"
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-mono text-orange-400 font-bold uppercase">
                  MIT MYSORE CAMPUS • BELAWADI, SRIRANGAPATNA
                </span>
                <h4 className="text-base font-bold text-white">
                  Main Academic Block & Mechanical Engineering Department
                </h4>
              </div>
            </div>

            {/* Sub-grid with Real Entrance View & Laboratory Work */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 h-40 group">
                <img
                  src="/images/mit/cad_lab1.jpg"
                  alt="MIT Mysore CAD/CAM Modeling Laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">CAD/CAM Simulation Lab</span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-200 h-40 group">
                <img
                  src="/images/mit/research_lab.jpg"
                  alt="MIT Mysore Additive Manufacturing & Research Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Research & Additive Lab</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Department Context & Capabilities */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 font-['Rajdhani']">
                <Building2 className="w-5 h-5 text-[#f15a24]" />
                <span>Departmental Profile & Leadership</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                The Department of Mechanical Engineering at MIT Mysore is guided by <strong>Dr. Mohamed Khaisar (Professor & HOD)</strong>,
                along with experienced faculty coordinators including <strong>Prof. B. Harish</strong> (Associate Professor & ISHRAE Coordinator),
                <strong>Dr. Y. D. Chethan</strong> (Associate Professor & Design/CAE Incharge), and <strong>Dr. Ravikumar K. S.</strong> (Assistant Professor & Fluid Machinery Lab).
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The department fosters active student professional engagement through the <strong>Mechismos Club</strong>, the <strong>ISHRAE Student Chapter</strong>,
                and its bi-annual technical publication <strong><em>Mech-Times</em></strong>, providing regular industrial tours to Automotive Axles, Bhoruka Extrusions, and ACREX India.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-200">
                <div className="flex items-center gap-2 text-[#f15a24] font-bold text-xs font-mono uppercase mb-1.5">
                  <Target className="w-4 h-4" />
                  <span>DEPARTMENT VISION</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  To excel in technical education by producing Mechanical Engineers who are competitive, contributing, and sustainable in the global socio-technological front.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-2 text-gray-800 font-bold text-xs font-mono uppercase mb-1.5">
                  <Compass className="w-4 h-4 text-[#f15a24]" />
                  <span>MISSION</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  To provide quality education through outcome-based curriculum, modern laboratories, and research-driven additive manufacturing facilities.
                </p>
              </div>
            </div>

            {/* Key Academic Recognitions */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                <div className="text-lg font-bold text-[#f15a24] font-mono">B.E. & M.Tech</div>
                <div className="text-[11px] text-gray-500 uppercase font-medium">Thermal Power Engg</div>
              </div>
              <div className="p-3 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                <div className="text-lg font-bold text-gray-900 font-mono">KSCST</div>
                <div className="text-[11px] text-gray-500 uppercase font-medium">Project Awards</div>
              </div>
              <div className="p-3 bg-white border border-gray-200 rounded-xl text-center shadow-sm">
                <div className="text-lg font-bold text-gray-900 font-mono">Mech-Times</div>
                <div className="text-[11px] text-gray-500 uppercase font-medium">Official Publication</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Specialized Laboratories of MIT Mysore Mech */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase">
              Design, Modeling & CAE Lab
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Equipped with high-performance workstations for SolidWorks CAD modeling, ANSYS topological optimization, and dynamic simulations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase">
              Additive & 3D Prototyping Lab
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Industrial dual-extrusion FDM printers, stereolithography (SLA) resin units, and 0.02mm structured optical 3D scanners.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4">
              <Microscope className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase">
              Heat Transfer & ISHRAE Lab
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Experimental convection, radiation, and refrigeration test apparatus driving student research in thermal power and decarbonization.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#f15a24] mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2 font-['Rajdhani'] uppercase">
              Metrology & Material Testing Lab
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Universal Testing Machines (UTM), optical profile projectors, and hardness testers verifying strength of 3D printed components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
