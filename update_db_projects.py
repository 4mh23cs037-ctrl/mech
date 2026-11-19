import sqlite3
import os

db_path = 'backend/mit_3d_printing.db'
if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM projects")

    projects_data = [
        (
            "proj-01",
            "Epicyclic Planetary Gearbox Speed Reducer (4:1)",
            "Gear Systems",
            "Arjun Rao, Bhavana K, Chethan Gowda",
            "4MH21ME012, 4MH21ME028, 4MH21ME041",
            "Dr. Mohamed Khaisar (Professor & HOD)",
            "2025-2026",
            "FDM",
            "Nylon PA12 & PETG",
            14.5,
            "160 x 160 x 95 mm",
            "Design, parametric slicing, and functional prototyping of an industrial planetary gear speed reduction assembly showcased at the department project expo.",
            "Integrated sun, planet, and internal ring gear printed with compliant clearances. Tested up to 18 Nm torque transmission.",
            "/images/mit/mechismos_tech_expo.jpg",
            1,
            "2026-02-20"
        ),
        (
            "proj-02",
            "Centrifugal Water Pump Impeller with NACA Airfoil Blades",
            "Mechanical",
            "Sudeep K, Tejas Gowda, Varun R",
            "4MH21ME102, 4MH21ME114, 4MH21ME125",
            "Dr. Ravikumar K. S. (Associate Professor)",
            "2025-2026",
            "SLA",
            "Tough Photopolymer Resin",
            9.5,
            "110 x 110 x 42 mm",
            "High-efficiency closed shrouded impeller with backward-curved 3D blade geometry calibrated and tested in MIT Mysore Fluid Mechanics Laboratory.",
            "50-micron SLA optical finish, dynamically balanced at 2800 RPM in the department hydraulic test rig with zero cavitation.",
            "/images/mit/fm_lab.jpg",
            1,
            "2026-03-01"
        ),
        (
            "proj-03",
            "Formula Student Lightweight Aerodynamic Air Intake Manifold",
            "Automotive",
            "Darshan M S, Ganesh K, Harsha V",
            "4MH21ME053, 4MH21ME067, 4MH21ME079",
            "Dr. B. Harish (Associate Professor)",
            "2025-2026",
            "FDM",
            "Carbon Fiber Reinforced PLA",
            26.0,
            "280 x 180 x 140 mm",
            "CFD-optimized aerodynamic air intake plenum and runner system modeled in MIT Mysore CAD/CAM studio for collegiate racing prototype.",
            "32% mass reduction compared to aluminum casting, ultra-smooth internal boundary layer flow, integrated MAP sensor bungs.",
            "/images/mit/cad_lab1.jpg",
            1,
            "2026-02-18"
        ),
        (
            "proj-04",
            "Autonomous Agriculture Drone Gimbal & Aerodynamic Chassis",
            "Industrial",
            "Vidyashree C, Yashwanth M, Nithin Kumar",
            "4MH22ME110, 4MH22ME132, 4MH22ME085",
            "Dr. Chethan Y. D. (Associate Professor)",
            "2025-2026",
            "FDM",
            "Carbon Fiber PLA & TPU",
            11.0,
            "135 x 115 x 75 mm",
            "2-Axis brushless motor camera stabilization gimbal and lightweight frame fabricated in the department Additive Research Laboratory.",
            "TPU elastomer vibration damping isolation grommets, conformal internal wiring conduits, and aerodynamic cooling vents.",
            "/images/mit/research_lab.jpg",
            0,
            "2026-02-05"
        ),
        (
            "proj-05",
            "Quadruped Robot Leg Actuation Kinematic Linkage",
            "Robotics",
            "Karthik Prasad, Manoj Kumar, Nithin R",
            "4MH22ME034, 4MH22ME049, 4MH22ME082",
            "Prof. Yogesh Kumar K. J. (Assistant Professor)",
            "2025-2026",
            "FDM & SLA",
            "ABS & Tough Resin",
            18.0,
            "210 x 95 x 65 mm",
            "3-DOF parallel leg linkage mechanism for biomimetic quadruped robot designed and tested in MIT Mysore Mechanical Design Laboratory.",
            "High impact shock absorption with dual-durometer TPU foot contacts, embedded ball-bearing mounts, 4.5 kg load support per leg.",
            "/images/mit/design_lab2.jpg",
            1,
            "2026-01-25"
        ),
        (
            "proj-06",
            "Bionic Myoelectric Prosthetic Hand with Compliant Grippers",
            "Final-Year Capstone",
            "Pooja N, Rakshith Gowda, Shreyas M S",
            "4MH20ME061, 4MH20ME074, 4MH20ME092",
            "Dr. Mohamed Khaisar & Dr. Godfrey Devaputra",
            "2024-2025",
            "FDM & SLA",
            "TPU 95A & Tough Resin",
            22.0,
            "190 x 90 x 55 mm",
            "Multi-articulated bionic prosthesis utilizing compliant living hinges for finger tendon actuation, measured in MIT Mysore Metrology Lab.",
            "Monolithic 3D printed finger linkages eliminating mechanical pin wear, tactile silicone/TPU fingertips for conformable grasp.",
            "/images/mit/mmm_lab5.jpg",
            1,
            "2025-11-12"
        ),
        (
            "proj-07",
            "Solar Photovoltaic Dual-Axis Tracking Mechanism Mount",
            "Mechanical",
            "Prajwal Gowda, Sanjana M, Chandan K",
            "4MH21ME077, 4MH21ME089, 4MH21ME033",
            "Dr. Godfrey Devaputra (Associate Professor)",
            "2025-2026",
            "FDM",
            "PETG & Carbon Fiber PLA",
            16.0,
            "220 x 140 x 85 mm",
            "Dual-axis tracking elevation bracket and worm-drive housing validated in MIT Mysore Material Testing Laboratory for wind shear resilience.",
            "Weather-resistant UV-stabilized PETG shell, high torsional stiffness, tested to withstand 60 km/h wind gusts.",
            "/images/mit/material_testing_lab.jpg",
            0,
            "2026-02-12"
        ),
        (
            "proj-08",
            "Automated Industrial Sorting Gripper with PLC Integration",
            "Robotics",
            "Vinay Kumar, Divya R, Kiran B",
            "4MH22ME140, 4MH22ME025, 4MH22ME063",
            "Dr. Chethana G. D. (Associate Professor)",
            "2025-2026",
            "FDM",
            "Tough PLA & TPU",
            12.5,
            "175 x 105 x 60 mm",
            "Automated pneumatic-assist mechanical end-effector integrated with PLC and proximity sensors in the technical automation workshop.",
            "Quick-change modular jaw inserts, soft non-marring TPU contact pads, rapid 0.4s actuation cycle.",
            "/images/mit/training_plc_scada.png",
            0,
            "2026-01-30"
        )
    ]

    cursor.executemany("""
    INSERT INTO projects (id, title, category, students, usn_list, guide, academic_year,
                          technology, material, print_time_hours, dimensions, description,
                          features, image_url, featured, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, projects_data)
    conn.commit()
    conn.close()
    print("Successfully updated database projects table with real MIT Mysore photographs and student projects.")

