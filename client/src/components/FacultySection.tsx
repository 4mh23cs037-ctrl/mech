import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Award, 
  Mail, 
  BookOpen, 
  Compass, 
  ExternalLink, 
  CheckCircle2,
  X,
  Phone,
  Building2
} from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  category: 'HOD' | 'Associate Professor' | 'Assistant Professor' | 'Technical Staff';
  qualifications: string;
  specialization: string;
  labRole: string;
  photoUrl: string;
  email: string;
  bio?: string;
}

export const FacultySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Verified authentic faculty members from MIT Mysore Mechanical Engineering Department
  const facultyMembers: FacultyMember[] = [
    {
      id: 'fac-01',
      name: 'Dr. Mohamed Khaisar',
      designation: 'Professor & Head of Department (HOD)',
      category: 'HOD',
      qualifications: 'BE, M.Tech, Ph.D, MISTE',
      specialization: 'Additive Manufacturing, Material Science & Advanced Composites',
      labRole: 'AM Lab Director & Research Supervisor',
      photoUrl: '/images/faculty/hod_mohamed_khaisar.jpg',
      email: 'hodmech@mitmysore.in',
      bio: 'Leading the Department of Mechanical Engineering with extensive research leadership in polymer matrix composites, additive manufacturing, and institutional academic excellence.'
    },
    {
      id: 'fac-02',
      name: 'Dr. B. Harish',
      designation: 'Associate Professor',
      category: 'Associate Professor',
      qualifications: 'BE, M.Tech, Ph.D, MISTE',
      specialization: 'Thermal Engineering, HVAC & Sustainable Energy',
      labRole: 'ISHRAE Student Chapter Faculty Advisor',
      photoUrl: '/images/faculty/dr_b_harish.jpg',
      email: 'bharish@mitmysore.in',
      bio: 'Coordinates the ISHRAE MIT Mysore Chapter, mentoring student delegations at national symposiums (ACREX India) and innovative thermal prototyping.'
    },
    {
      id: 'fac-03',
      name: 'Dr. Chethan Y. D.',
      designation: 'Associate Professor',
      category: 'Associate Professor',
      qualifications: 'BE, M.Tech, Ph.D, MISTE',
      specialization: 'CAD/CAM/CAE, Topological Optimization & Machine Design',
      labRole: 'CAD/CAM Slicing Studio Incharge',
      photoUrl: '/images/faculty/dr_chethan_yd.jpg',
      email: 'chethanyd@mitmysore.in',
      bio: 'Specialist in computational FEA, generative component design, and toolpath optimization for precision rapid prototyping.'
    },
    {
      id: 'fac-04',
      name: 'Dr. Ravikumar K. S.',
      designation: 'Associate Professor',
      category: 'Associate Professor',
      qualifications: 'BE, M.Tech, Ph.D, MISTE',
      specialization: 'Fluid Mechanics, Turbomachinery & Aerodynamics',
      labRole: 'Fluid Systems & Racing Prototyping Mentor',
      photoUrl: '/images/faculty/dr_ravikumar_ks.jpg',
      email: 'ravikumarks@mitmysore.in',
      bio: 'Mentors collegiate racing aerodynamics and 3D printed fluid manifold projects, guiding student technical teams in national design challenges.'
    },
    {
      id: 'fac-05',
      name: 'Dr. Godfrey Devaputra',
      designation: 'Associate Professor',
      category: 'Associate Professor',
      qualifications: 'BE, M.Tech, Ph.D, MISTE',
      specialization: 'Metrology, Coordinate Measurements & Material QA',
      labRole: 'Metrology (MMM) Lab Incharge',
      photoUrl: '/images/faculty/dr_godfrey_devaputra.jpg',
      email: 'godfrey@mitmysore.in',
      bio: 'Oversees precision dimensional inspection, surface roughness profiling, and post-processing quality assurance of 3D printed components.'
    },
    {
      id: 'fac-06',
      name: 'Dr. Chethana G. D.',
      designation: 'Associate Professor',
      category: 'Associate Professor',
      qualifications: 'BE, M.Tech, Ph.D, MISTE',
      specialization: 'Manufacturing Science & Advanced Machining',
      labRole: 'Advanced Fabrication Advisor',
      photoUrl: '/images/faculty/dr_chethana_gd.jpg',
      email: 'chethanagd@mitmysore.in',
      bio: 'Focuses on hybrid manufacturing, combining traditional subtractive machining with additive preforms for functional mechanical tooling.'
    },
    {
      id: 'fac-07',
      name: 'Prof. Yogesh Kumar K. J.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Kinematics, Mechanism Synthesis & Robotics',
      labRole: 'Student Technical Projects Coordinator',
      photoUrl: '/images/faculty/prof_yogesh_kumar.jpg',
      email: 'yogeshkumarkj@mitmysore.in',
      bio: 'Guides student capstone prototypes including compliant robotic hands, bionic linkages, and planetary speed reduction assemblies.'
    },
    {
      id: 'fac-08',
      name: 'Prof. Santhosh K. G.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Industrial Engineering & Operations Research',
      labRole: '3D Print Queue & Inventory Coordinator',
      photoUrl: '/images/faculty/prof_santhosh_kg.jpg',
      email: 'santhoshkg@mitmysore.in',
      bio: 'Coordinates laboratory inventory, filament resource planning, and subsidized student material tracking.'
    },
    {
      id: 'fac-09',
      name: 'Prof. Kishan G. S.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Design Engineering & Vibrations Analysis',
      labRole: 'Finite Element Analysis Mentor',
      photoUrl: '/images/faculty/prof_kishan_gs.jpg',
      email: 'kishangs@mitmysore.in',
      bio: 'Instructs students in structural dynamic modeling, vibration dampening, and elastomer TPU part simulation.'
    },
    {
      id: 'fac-10',
      name: 'Prof. Rakesh R.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, AMIE, MISTE',
      specialization: 'Thermal Systems & Energy Engineering',
      labRole: 'Heat Dissipation Testing Guide',
      photoUrl: '/images/faculty/prof_rakesh_r.jpg',
      email: 'rakeshr@mitmysore.in',
      bio: 'Researches additive heat sink geometries, conformal cooling channels, and heat exchanger prototyping.'
    },
    {
      id: 'fac-11',
      name: 'Prof. Anil Kumar M. M.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Manufacturing Processes & Tool Design',
      labRole: 'FDM Printer Maintenance Lead',
      photoUrl: '/images/faculty/prof_anilkumar_mm.jpg',
      email: 'anilkumarmm@mitmysore.in',
      bio: 'Oversees additive hardware calibration, dual-extrusion nozzle maintenance, and print bed leveling accuracy.'
    },
    {
      id: 'fac-12',
      name: 'Prof. Krishna Prasad S.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Mechatronics & Embedded Automation',
      labRole: 'Robotics Integration Specialist',
      photoUrl: '/images/faculty/prof_krishna_prasad.jpg',
      email: 'krishnaprasad@mitmysore.in',
      bio: 'Integrates microcontrollers, stepper motors, and sensors into student 3D printed mechanical housings.'
    },
    {
      id: 'fac-13',
      name: 'Prof. Sathish H.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, MS, MISTE',
      specialization: 'Product Lifecycle Management (PLM) & CAD',
      labRole: 'CAD Modeling & STEP Standards Guide',
      photoUrl: '/images/faculty/prof_sathish_h.jpg',
      email: 'sathishh@mitmysore.in',
      bio: 'Instructs industry-standard STEP and 3MF parametric modeling standards for flawless 3D slicing.'
    },
    {
      id: 'fac-14',
      name: 'Prof. Abhilash M.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Design of Machine Elements & Rapid Tooling',
      labRole: 'Machine Elements Prototyping Lead',
      photoUrl: '/images/faculty/prof_abhilash_m.jpg',
      email: 'abhilashm@mitmysore.in',
      bio: 'Guides structural transmission design, spur/helical gear 3D printing tolerances, and fatigue testing.'
    },
    {
      id: 'fac-15',
      name: 'Prof. Sachin B.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Polymer Processing & Additive Slicing',
      labRole: 'Ultimaker Cura & Slicing Mentor',
      photoUrl: '/images/faculty/prof_sachin_b.jpg',
      email: 'sachinb@mitmysore.in',
      bio: 'Conducts hands-on slicing workshops for students, focusing on infill geometry, support generation, and surface finish.'
    },
    {
      id: 'fac-16',
      name: 'Prof. Abhishek H. R.',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Materials Science & Non-Destructive Testing',
      labRole: 'NDT & Inspection Coordinator',
      photoUrl: '/images/faculty/prof_abhishek_hr.jpg',
      email: 'abhishekhr@mitmysore.in',
      bio: 'Conducts ultrasonic and radiographic flaw detection on additive metal and composite prototypes.'
    },
    {
      id: 'fac-17',
      name: 'Prof. Ameena Kausar',
      designation: 'Assistant Professor',
      category: 'Assistant Professor',
      qualifications: 'BE, M.Tech, MISTE',
      specialization: 'Fluid Mechanics & Computational Heat Transfer',
      labRole: 'Thermal Simulation Coordinator',
      photoUrl: '/images/faculty/prof_ameena_kausar.jpg',
      email: 'ameenakausar@mitmysore.in',
      bio: 'Guides computational flow simulations around 3D printed automotive wings and aerofoil assemblies.'
    },
    {
      id: 'fac-18',
      name: 'Mr. Ramesh Kumar M',
      designation: 'Foreman',
      category: 'Technical Staff',
      qualifications: 'DME, BE',
      specialization: 'Machine Tool Maintenance & Fabrication',
      labRole: 'Central Workshop & Machine Shop Incharge',
      photoUrl: '/images/faculty/staff_ramesh_kumar.jpg',
      email: 'rameshkumar@mitmysore.in',
      bio: 'Manages precision mechanical fabrication, machine assembly, and safety compliance across departmental laboratories.'
    },
    {
      id: 'fac-19',
      name: 'Mr. Somesha',
      designation: 'Laboratory Instructor',
      category: 'Technical Staff',
      qualifications: 'BE (Mechanical)',
      specialization: 'CAD/CAM Lab & Computational Hardware',
      labRole: 'Computing Workstations & 3D Network Lead',
      photoUrl: '/images/faculty/staff_somesha.jpg',
      email: 'somesha@mitmysore.in',
      bio: 'Manages CAD terminal configurations, slicing license servers, and 3D print network transfer systems.'
    },
    {
      id: 'fac-20',
      name: 'Mr. M. E. Vishwavasu',
      designation: 'Laboratory Instructor',
      category: 'Technical Staff',
      qualifications: 'DME',
      specialization: 'Precision Metrology & Testing Apparatus',
      labRole: 'Metrology Lab Technical Incharge',
      photoUrl: '/images/faculty/staff_vishwavasu.jpg',
      email: 'vishwavasu@mitmysore.in',
      bio: 'Provides technical guidance during mechanical calibration, tensile specimen preparation, and dimensional testing.'
    }
  ];

  const categories = [
    'All',
    'Professors & HOD',
    'Associate Professors',
    'Assistant Professors',
    'Technical Staff'
  ];

  const filteredFaculty = activeCategory === 'All'
    ? facultyMembers
    : facultyMembers.filter((m) => {
        if (activeCategory === 'Professors & HOD') return m.category === 'HOD';
        if (activeCategory === 'Associate Professors') return m.category === 'Associate Professor';
        if (activeCategory === 'Assistant Professors') return m.category === 'Assistant Professor';
        if (activeCategory === 'Technical Staff') return m.category === 'Technical Staff';
        return true;
      });

  return (
    <section id="faculty" className="py-20 bg-gray-50 border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#f15a24] text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Leadership &amp; Technical Mentors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 uppercase font-['Rajdhani'] tracking-wide">
            Department Faculty Members
          </h2>
          <div className="w-20 h-1 bg-[#f15a24] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Distinguished professors, researchers, and technical staff of the <strong>Department of Mechanical Engineering, MIT Mysore</strong>, guiding additive manufacturing innovation and student capstone prototyping.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#f15a24] text-white shadow-md font-bold scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedFaculty(member)}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-200 cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Faculty Photo */}
              <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.src = '/images/faculty/hod_mohamed_khaisar.jpg';
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-orange-300 font-mono flex items-center gap-1">
                    <span>View Academic Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
                {member.category === 'HOD' && (
                  <span className="absolute top-3 left-3 bg-[#f15a24] text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-md shadow-md uppercase">
                    Head of Department
                  </span>
                )}
              </div>

              {/* Faculty Info Card Body */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-gray-900 font-['Rajdhani'] uppercase tracking-wide group-hover:text-[#f15a24] transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#f15a24] mb-1">
                    {member.designation}
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono mb-2">
                    {member.qualifications}
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-light">
                    {member.specialization}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span className="text-slate-700 font-medium truncate max-w-[180px]">
                    {member.labRole}
                  </span>
                  <span className="text-[#f15a24] font-bold group-hover:underline">
                    Profile →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Profile Modal */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-gray-800 text-white">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#f15a24]" />
                <h4 className="text-base font-bold font-['Rajdhani'] uppercase tracking-wide">
                  Department Faculty Profile
                </h4>
              </div>
              <button
                onClick={() => setSelectedFaculty(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-6">
                <div className="w-32 h-36 rounded-2xl overflow-hidden shadow-md border-2 border-orange-200 shrink-0 bg-slate-100">
                  <img
                    src={selectedFaculty.photoUrl}
                    alt={selectedFaculty.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 font-['Rajdhani'] uppercase">
                    {selectedFaculty.name}
                  </h3>
                  <div className="text-sm font-bold text-[#f15a24] mb-1">
                    {selectedFaculty.designation}
                  </div>
                  <div className="text-xs text-gray-600 font-mono mb-2">
                    {selectedFaculty.qualifications}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-mono text-[#f15a24] font-semibold">
                    {selectedFaculty.labRole}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#f15a24]" />
                    <span>Specialization &amp; Research Focus:</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedFaculty.specialization}
                  </p>
                </div>

                {selectedFaculty.bio && (
                  <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#f15a24]" />
                      <span>Academic Role &amp; 3D Lab Involvement:</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedFaculty.bio}
                    </p>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-[#f15a24]" />
                    <span>Official Email:</span>
                  </div>
                  <a
                    href={`mailto:${selectedFaculty.email}`}
                    className="text-[#f15a24] font-bold hover:underline"
                  >
                    {selectedFaculty.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

