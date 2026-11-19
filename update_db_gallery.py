import sqlite3
import os

db_path = 'backend/mit_3d_printing.db'
if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM gallery")
    
    gallery_items = [
        ('mitm-achieve-01', 'VTU University Rank Felicitation at 24th Convocation', 'Achievements & Honours', '/images/mit/rank_felicitation.jpg', 'Department of Mechanical Engineering university rank holders and toppers honoured at the Visvesvaraya Technological University (VTU Belagavi) convocation ceremony.'),
        ('mitm-achieve-02', 'MECHISMOS State-Level Mechanical Tech Project Exhibition', 'Achievements & Honours', '/images/mit/mechismos_tech_expo.jpg', 'Student technical capstone and 3D prototyping exposition organized by MECHISMOS student forum.'),
        ('mitm-achieve-03', 'Best Outgoing Student Batch 2025 – Graduation Day Felicitation', 'Achievements & Honours', '/images/mit/best_outgoing_student.jpg', 'Recognising exceptional academic excellence, technical innovation in CAD/CAM 3D printing research.'),
        ('mitm-achieve-04', 'ISHRAE National Student Chapter Delegation at ACREX 2025', 'Achievements & Honours', '/images/mit/acrex_2025.jpg', 'Department ISHRAE Student Chapter represented at South Asia’s premier HVAC and sustainable energy exposition at BIEC Bangalore.'),
        ('mitm-achieve-05', 'Mechanical Engineering Batch Placement at Emvee Solar Photovoltaic', 'Achievements & Honours', '/images/mit/placement_solar.jpg', 'Prestigious industrial core placement achievement for 2024-25 graduating mechanical engineers.'),
        ('mitm-achieve-06', 'Faculty Service Recognition & Academic Excellence Milestone', 'Achievements & Honours', '/images/mit/faculty_felicitation.jpg', 'Honouring distinguished faculty members of the Mechanical Engineering Department for decade-long service.'),
        ('mitm-achieve-07', 'VTU State Rank Holders & Gold Medalist Felicitation Ceremony', 'Achievements & Honours', '/images/mit/vtu_rank_2015.jpg', 'Grand felicitation honoring academic rank achievers and gold medalists across Karnataka state.'),
        ('mitm-lab-01', 'CAD/CAM Modeling & Computational Simulation Laboratory (Lab 1)', 'Laboratories & Workshops', '/images/mit/cad_lab1.jpg', 'Modern CAD laboratory workstations equipped with SolidWorks, Fusion 360, and ANSYS FEA.'),
        ('mitm-lab-02', 'Advanced Design & Engineering Analysis Studio (Lab 2)', 'Laboratories & Workshops', '/images/mit/cad_lab2.jpg', 'Dedicated computational terminal facility providing high-performance graphics nodes.'),
        ('mitm-lab-03', 'Mechanical Engineering Research & Additive Innovation Lab', 'Laboratories & Workshops', '/images/mit/research_lab.jpg', 'Department research laboratory dedicated to material characterization and composite filament fabrication.'),
        ('mitm-lab-04', 'Mechanical Metrology & Dimensional Measurement Lab (MMM Lab)', 'Laboratories & Workshops', '/images/mit/mmm_lab5.jpg', 'Precision calibration instruments, coordinate measuring tools, surface profilometers.'),
        ('mitm-lab-05', 'Heat & Mass Transfer Engineering Laboratory', 'Laboratories & Workshops', '/images/mit/ht_lab.jpg', 'Experimental test rigs analyzing thermal dissipation in 3D printed heat sinks.'),
        ('mitm-lab-06', 'Fluid Mechanics & Turbomachinery Testing Facility', 'Laboratories & Workshops', '/images/mit/fm_lab.jpg', 'Hydrodynamic test loops, Pelton and Francis hydraulic turbines validating 3D printed impeller profiles.'),
        ('mitm-event-01', 'Advanced Hands-on Training on PLC, SCADA & NDT', 'Industrial Visits & Events', '/images/mit/training_plc_scada.png', 'Skill development intensive workshop training mechanical students on automated industrial control systems.'),
        ('mitm-event-02', 'Alumni Expert Talk & Industry Interaction by Er. Sanjana', 'Industrial Visits & Events', '/images/mit/expert_talk_sanjana.jpg', 'Distinguished mechanical engineering alumna sharing insights on core automotive design workflows.'),
        ('mitm-event-03', 'Academic Council Meeting on Modern Additive Manufacturing', 'Industrial Visits & Events', '/images/mit/academic_council.png', 'Academic advisory council aligning VTU syllabus with cutting-edge 3D printing industry standards.'),
        ('mitm-event-04', 'Department Farewell & Graduation Batch Felicitation', 'Industrial Visits & Events', '/images/mit/farewell_batch.jpg', 'Celebrating the achievements of the graduating mechanical engineering cohort.'),
        ('mitm-campus-01', 'Maharaja Institute of Technology Mysore Main Academic Campus', 'Campus Infrastructure', '/images/mit/mit_campus_front.webp', 'The main institutional campus at Belawadi, S.R. Patna Taluk, Mandya Dist, Mysore (ESTD 2007).')
    ]
    
    cursor.executemany("INSERT INTO gallery (id, title, category, image_url, caption) VALUES (?, ?, ?, ?, ?)", gallery_items)
    conn.commit()
    conn.close()
    print("Database gallery table updated successfully with real MIT Mysore data.")
else:
    print("DB file not found.")

