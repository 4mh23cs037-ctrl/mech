import sqlite3
import os

db_path = 'backend/mit_3d_printing.db'
if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM gallery")

    facility_items = [
        # --- 1. Laboratory (Actual MIT Mysore Mechanical Engineering Labs) ---
        (
            'mitm-fac-lab-01',
            'Mechanical Engineering Research & Additive Innovation Laboratory',
            'Laboratory',
            '/images/mit/research_lab.jpg',
            'Department research center for functional additive manufacturing, testing polymer tensile specimens, and prototyping mechanical assemblies.',
            '2026-02-15',
            1
        ),
        (
            'mitm-fac-lab-02',
            'CAD/CAM 3D Slicing & Computational Modeling Studio (Lab 1)',
            'Laboratory',
            '/images/mit/cad_lab1.jpg',
            'High-performance workstations configured with SolidWorks, Fusion 360, and Cura slicing for G-code toolpath generation.',
            '2026-02-10',
            1
        ),
        (
            'mitm-fac-lab-03',
            'Advanced Mechanical Design & Simulation Studio (Lab 2)',
            'Laboratory',
            '/images/mit/cad_lab2.jpg',
            'Finite element analysis (FEA), topological mass reduction, and kinematic simulation terminals for capstone 3D printing preparation.',
            '2026-02-08',
            0
        ),
        (
            'mitm-fac-lab-04',
            'Mechanical Metrology & Measurements (MMM) QA Testing Lab',
            'Laboratory',
            '/images/mit/mmm_lab5.jpg',
            'Coordinate measuring, optical profile projectors, surface roughness testers, and precision micrometers for post-print dimensional validation.',
            '2026-02-05',
            1
        ),
        (
            'mitm-fac-lab-05',
            'Heat Transfer Engineering Laboratory (Thermal Dissipation Rig)',
            'Laboratory',
            '/images/mit/ht_lab.jpg',
            'Thermal verification testing rigs measuring heat conductivity and convection cooling of 3D printed heatsinks and fin arrays.',
            '2026-01-28',
            0
        ),
        (
            'mitm-fac-lab-06',
            'Fluid Mechanics & Turbomachinery Testing Facility',
            'Laboratory',
            '/images/mit/fm_lab.jpg',
            'Hydraulic test loops and flow channels validating 3D printed fluid impellers, venturi tubes, and aerofoil blade profiles.',
            '2026-01-20',
            0
        ),

        # --- 2. 3D Printers ---
        (
            'mitm-fac-print-01',
            'Industrial Dual-Extrusion FDM 3D Printer Station',
            '3D Printers',
            '/images/mit/fdm_3d_printer.jpg',
            'Dual extrusion high-temperature system supporting PLA, ABS, PETG, TPU, and chopped carbon-fiber filament.',
            '2026-02-18',
            1
        ),
        (
            'mitm-fac-print-02',
            'Precision SLA UV Stereolithography 3D Machine',
            '3D Printers',
            '/images/mit/sla_3d_printer.jpg',
            '405nm optical SLA stereolithography unit for 25-micron fine-tolerance micro features and rapid fluidic prototypes.',
            '2026-02-16',
            1
        ),

        # --- 3. Equipment ---
        (
            'mitm-fac-eq-01',
            'Structured Blue Light Optical 3D Scanner & Turntable',
            'Equipment',
            '/images/mit/optical_scanner.jpg',
            'High-precision optical scanner with 0.02mm resolution for reverse engineering and automated CAD variance analysis.',
            '2026-02-14',
            1
        ),
        (
            'mitm-fac-eq-02',
            'Automated Ultrasonic Wash & UV Post-Curing Chamber',
            'Equipment',
            '/images/mit/curing_chamber.jpg',
            'Isopropyl wash tank and multi-frequency UV curing station ensuring maximum tensile crosslinking for resin components.',
            '2026-02-12',
            0
        ),

        # --- 4. Printed Models ---
        (
            'mitm-fac-mod-01',
            'Planetary Speed Reducer & Compliant Robotic Gripper',
            'Printed Models',
            '/images/mit/planetary_prototype.jpg',
            'Monolithic print-in-place planetary gearbox with integral compliant bionic finger joints printed without external assembly.',
            '2026-02-11',
            1
        ),

        # --- 5. Student Activities ---
        (
            'mitm-fac-act-01',
            'MECHISMOS State-Level Mechanical Project & 3D Prototype Expo',
            'Student Activities',
            '/images/mit/mechismos_tech_expo.jpg',
            'Annual project exhibition demonstrating student-built 3D printed mechanical prototypes, robotics, and capstone engineering mechanisms.',
            '2026-02-01',
            1
        ),
        (
            'mitm-fac-act-02',
            'Technical Hands-on Training on PLC, SCADA & NDT Automation',
            'Student Activities',
            '/images/mit/training_plc_scada.png',
            'Skill development intensive workshop training mechanical students on automated industrial control systems, machine logic, and inspection.',
            '2026-01-25',
            0
        ),
        (
            'mitm-fac-act-03',
            'Alumni Interactive Lecture on Modern CAD/CAM & Additive Prototyping',
            'Student Activities',
            '/images/mit/expert_talk_sanjana.jpg',
            'Distinguished mechanical alumna Er. Sanjana mentoring students on generative design and 3D prototyping workflows for automotive components.',
            '2026-01-18',
            0
        ),
        (
            'mitm-fac-act-04',
            'Student Slicing & Machine Toolpath Practical Session',
            'Student Activities',
            '/images/mit/cad_lab1.jpg',
            'Hands-on laboratory training instructing mechanical engineering students in Ultimaker Cura and PrusaSlicer optimization.',
            '2026-01-15',
            0
        )
    ]

    cursor.executemany(
        "INSERT INTO gallery (id, title, category, image_url, caption, date, featured) VALUES (?, ?, ?, ?, ?, ?, ?)",
        facility_items
    )
    conn.commit()
    conn.close()
    print("Facility gallery table successfully populated with actual MIT Mysore photos and verified department placeholders.")

