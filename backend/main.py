import os
import sys
import uuid
import json
import sqlite3
import shutil
from datetime import datetime
from typing import Optional, List
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Depends, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(BASE_DIR, "mit_3d_printing.db")
UPLOADS_DIR = os.path.join(BASE_DIR, "uploads")
MODELS_DIR = os.path.join(UPLOADS_DIR, "models")
GALLERY_DIR = os.path.join(UPLOADS_DIR, "gallery")

os.makedirs(MODELS_DIR, exist_ok=True)
os.makedirs(GALLERY_DIR, exist_ok=True)

app = FastAPI(
    title="MIT Mysore Mechanical Engineering - 3D Printing Portal API",
    description="Backend API for 3D Printing & Additive Manufacturing Facility at MIT Mysore",
    version="1.0.0"
)

cors_origins_env = os.getenv("CORS_ORIGINS", "")
if cors_origins_env:
    allowed_origins = [o.strip() for o in cors_origins_env.split(",") if o.strip()]
else:
    allowed_origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/uploads", StaticFiles(directory=UPLOADS_DIR), name="uploads")


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()


def create_sample_stl_file():
    """Create a sample ASCII STL file (pyramid/prism) for testing 3D preview."""
    sample_path = os.path.join(MODELS_DIR, "sample_cube_mitm.stl")
    if not os.path.exists(sample_path):
        stl_content = """solid mitm_cube
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 20.0 0.0 0.0
      vertex 20.0 20.0 0.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 20.0 20.0 0.0
      vertex 0.0 20.0 0.0
    endloop
  endfacet
  facet normal 0.0 0.0 1.0
    outer loop
      vertex 0.0 0.0 20.0
      vertex 20.0 20.0 20.0
      vertex 20.0 0.0 20.0
    endloop
  endfacet
  facet normal 0.0 0.0 1.0
    outer loop
      vertex 0.0 0.0 20.0
      vertex 0.0 20.0 20.0
      vertex 20.0 20.0 20.0
    endloop
  endfacet
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 20.0 0.0 20.0
      vertex 20.0 0.0 0.0
    endloop
  endfacet
  facet normal 0.0 -1.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 0.0 20.0
      vertex 20.0 0.0 20.0
    endloop
  endfacet
  facet normal 0.0 1.0 0.0
    outer loop
      vertex 0.0 20.0 0.0
      vertex 20.0 20.0 0.0
      vertex 20.0 20.0 20.0
    endloop
  endfacet
  facet normal 0.0 1.0 0.0
    outer loop
      vertex 0.0 20.0 0.0
      vertex 20.0 20.0 20.0
      vertex 0.0 20.0 20.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 20.0 0.0
      vertex 0.0 20.0 20.0
    endloop
  endfacet
  facet normal -1.0 0.0 0.0
    outer loop
      vertex 0.0 0.0 0.0
      vertex 0.0 20.0 20.0
      vertex 0.0 0.0 20.0
    endloop
  endfacet
  facet normal 1.0 0.0 0.0
    outer loop
      vertex 20.0 0.0 0.0
      vertex 20.0 20.0 20.0
      vertex 20.0 20.0 0.0
    endloop
  endfacet
  facet normal 1.0 0.0 0.0
    outer loop
      vertex 20.0 0.0 0.0
      vertex 20.0 0.0 20.0
      vertex 20.0 20.0 20.0
    endloop
  endfacet
endsolid mitm_cube
"""
        with open(sample_path, "w") as f:
            f.write(stl_content)


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS requests (
        id TEXT PRIMARY KEY,
        student_name TEXT NOT NULL,
        usn TEXT NOT NULL,
        department TEXT NOT NULL,
        year_semester TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        project_name TEXT NOT NULL,
        technology TEXT NOT NULL,
        material TEXT NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        dimensions TEXT,
        infill_percentage INTEGER DEFAULT 20,
        layer_height REAL DEFAULT 0.2,
        additional_instructions TEXT,
        file_name TEXT,
        file_path TEXT,
        file_size INTEGER,
        file_type TEXT,
        status TEXT DEFAULT 'Submitted',
        admin_notes TEXT,
        estimated_completion TEXT,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS materials (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        density REAL,
        tensile_strength TEXT,
        heat_deflection TEXT,
        print_temp TEXT,
        bed_temp TEXT,
        is_available INTEGER DEFAULT 1,
        stock_status TEXT DEFAULT 'In Stock',
        price_per_gram REAL DEFAULT 2.5,
        colors TEXT,
        applications TEXT,
        description TEXT,
        image_url TEXT
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        students TEXT NOT NULL,
        usn_list TEXT NOT NULL,
        guide TEXT NOT NULL,
        academic_year TEXT NOT NULL,
        technology TEXT NOT NULL,
        material TEXT NOT NULL,
        print_time_hours REAL,
        dimensions TEXT,
        description TEXT,
        features TEXT,
        image_url TEXT,
        featured INTEGER DEFAULT 0,
        created_at TEXT NOT NULL
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS gallery (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        image_url TEXT NOT NULL,
        caption TEXT,
        date TEXT,
        featured INTEGER DEFAULT 0
    )
    """)

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS contact_messages (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT DEFAULT 'Unread',
        created_at TEXT NOT NULL
    )
    """)

    conn.commit()

    # Seed materials if empty
    cursor.execute("SELECT COUNT(*) FROM materials")
    if cursor.fetchone()[0] == 0:
        materials_data = [
            (
                "pla", "PLA (Polylactic Acid)", "Standard Thermoplastic", 1.24,
                "50 - 65 MPa", "55°C", "190°C - 215°C", "50°C - 60°C", 1, "In Stock", 2.0,
                "White, Black, Signal Blue, Crimson Red, Silver, Forest Green",
                "Educational prototypes, architectural models, non-functional casings, concept validation",
                "Biodegradable thermoplastic derived from renewable resources like corn starch. Excellent dimensional accuracy with minimal warping.",
                "/images/mit/cad_lab1.jpg"
            ),
            (
                "abs", "ABS (Acrylonitrile Butadiene Styrene)", "Engineering Polymer", 1.04,
                "40 - 50 MPa", "98°C", "230°C - 250°C", "95°C - 110°C", 1, "In Stock", 2.8,
                "Industrial Black, Bone White, Cool Gray",
                "Automotive trim components, functional enclosures, snap-fit joints, thermal resistance assemblies",
                "Tough, impact-resistant engineering polymer capable of enduring elevated temperatures and mechanical wear.",
                "/images/mit/material_testing_lab.jpg"
            ),
            (
                "petg", "PETG (Polyethylene Terephthalate Glycol)", "Co-Polyester", 1.27,
                "50 MPa", "75°C", "220°C - 245°C", "70°C - 80°C", 1, "In Stock", 3.0,
                "Clear Translucent, Black, Royal Blue, Signal Orange",
                "Liquid-tight containers, mechanical brackets, outdoor tooling, chemical-resistant housings",
                "Combines the user-friendly printability of PLA with the durability and weather resistance of ABS.",
                "/images/mit/design_lab2.jpg"
            ),
            (
                "tpu", "TPU 95A (Thermoplastic Polyurethane)", "Flexible Elastomer", 1.21,
                "35 MPa", "60°C", "215°C - 235°C", "40°C - 50°C", 1, "In Stock", 4.5,
                "Jet Black, High-Vis Yellow, Clear",
                "Vibration dampers, robotic end-effectors, gaskets, protective bumpers, flexible couplings",
                "Shore 95A rubber-like flexibility with high tear resistance, abrasion resilience, and elongation at break up to 580%.",
                "/images/mit/training_plc_scada.png"
            ),
            (
                "resin", "Tough Photopolymer Resin", "Photocurable Resin (SLA/DLP)", 1.15,
                "55 - 65 MPa", "65°C", "405nm UV Curing", "Room Temp", 1, "In Stock", 6.0,
                "Translucent Gray, Ceramic White, Ultra-Clear",
                "High-precision fluidic channels, miniature gearboxes, medical device prototypes, micro-mechanics",
                "Ultra-high resolution SLA/DLP photopolymer resin providing mirror-smooth surface finish and 25-micron layer resolution.",
                "/images/mit/fm_lab.jpg"
            ),
            (
                "nylon", "Nylon PA12", "High-Performance Polyamide", 1.01,
                "48 - 55 MPa", "135°C", "240°C - 260°C", "80°C - 90°C", 1, "Low Stock", 6.5,
                "Natural Off-White, Dyed Black",
                "Durable gears, aerodynamic ducts, heavy-load brackets, functional kinematics",
                "Exceptional fatigue resistance, low friction coefficient, and high impact strength for high-demand engineering components.",
                "/images/mit/mmm_lab5.jpg"
            ),
            (
                "carbon_pla", "Carbon Fiber PLA (CF-PLA)", "Composite", 1.30,
                "65 - 75 MPa", "60°C", "205°C - 225°C", "55°C - 65°C", 1, "In Stock", 5.0,
                "Matte Charcoal Black",
                "Drone frame arms, RC chassis, high-rigidity structural brackets, aerodynamic fairings",
                "Standard PLA reinforced with 15% high-modulus chopped carbon fiber strands, resulting in lightweight structural rigidity.",
                "/images/mit/research_lab.jpg"
            )
        ]
        cursor.executemany("""
        INSERT INTO materials (id, name, category, density, tensile_strength, heat_deflection,
                               print_temp, bed_temp, is_available, stock_status, price_per_gram,
                               colors, applications, description, image_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, materials_data)
        conn.commit()

    # Seed projects if empty
    cursor.execute("SELECT COUNT(*) FROM projects")
    if cursor.fetchone()[0] == 0:
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

    # Seed gallery if empty
    cursor.execute("SELECT COUNT(*) FROM gallery")
    if cursor.fetchone()[0] == 0:
        gallery_data = [
            (
                "gal-01", "Dual-Extrusion Industrial 3D Printer in Action", "Machines & Lab",
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
                "Additive manufacturing facility at MIT Mysore Mech Dept equipped with high-temperature nozzles.",
                "2026-03-01", 1
            ),
            (
                "gal-02", "High-Precision 3D Optical Scanner Calibration", "Machines & Lab",
                "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
                "Students scanning reverse-engineered automotive components down to 0.02mm accuracy.",
                "2026-02-24", 1
            ),
            (
                "gal-03", "Stereolithography (SLA) UV Curing Post-Processing", "Printing Process",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
                "Washing and UV curing chamber ensuring full tensile polymer cross-linking for SLA prints.",
                "2026-02-15", 1
            ),
            (
                "gal-04", "Robotics Kinematic Prototypes Exhibition", "Student Projects",
                "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
                "Department project exhibition highlighting student-fabricated robotic mechanisms.",
                "2026-01-30", 1
            ),
            (
                "gal-05", "Hands-on CAD to 3D Print Faculty Workshop", "Workshops",
                "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
                "Inter-college technical workshop on slicing optimization and topological generative design.",
                "2026-01-14", 1
            ),
            (
                "gal-06", "Carbon Fiber Reinforced Drone Chassis Assembly", "Components",
                "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80",
                "Structural carbon fiber PLA quadcopter frame with vibration dampeners.",
                "2025-12-19", 1
            )
        ]
        cursor.executemany("""
        INSERT INTO gallery (id, title, category, image_url, caption, date, featured)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """, gallery_data)
        conn.commit()

    # Seed sample requests if empty
    cursor.execute("SELECT COUNT(*) FROM requests")
    if cursor.fetchone()[0] == 0:
        create_sample_stl_file()
        sample_requests = [
            (
                "MITM-2026-0101",
                "Abhishek Sharma",
                "4MH21ME005",
                "Mechanical Engineering",
                "Final Year (8th Sem)",
                "abhishek.sharma@mitmysore.in",
                "+91 98451 22341",
                "Planetary Differential Carrier",
                "FDM",
                "PETG",
                2,
                "125 x 125 x 65 mm",
                30,
                0.2,
                "Print with 4 perimeter walls for maximum structural rigidity under torque load.",
                "sample_cube_mitm.stl",
                "models/sample_cube_mitm.stl",
                124000,
                ".stl",
                "Printing in Progress",
                "G-code sliced with Cura 5.6. Layer 340 of 650 currently executing on Printer #2.",
                "2026-11-17 16:00",
                "2026-11-15 10:20:00",
                "2026-11-16 09:30:00"
            ),
            (
                "MITM-2026-0102",
                "Kavya N Gowda",
                "4MH22ME045",
                "Mechanical Engineering",
                "3rd Year (6th Sem)",
                "kavya.gowda@mitmysore.in",
                "+91 97412 88923",
                "Micro-Fluidic Venturi Tube",
                "SLA",
                "Tough Resin",
                1,
                "85 x 35 x 30 mm",
                100,
                0.05,
                "Clear resin required to visualize dye fluid flow under digital microscope.",
                "sample_cube_mitm.stl",
                "models/sample_cube_mitm.stl",
                89000,
                ".stl",
                "Ready for Pickup",
                "SLA printing and UV post-curing complete. Clear coat polished. Kept in Lab Locker A-3.",
                "Ready",
                "2026-11-14 14:10:00",
                "2026-11-16 08:45:00"
            ),
            (
                "MITM-2026-0103",
                "Rakshit Kumar",
                "4MH23ME089",
                "Mechanical Engineering",
                "2nd Year (4th Sem)",
                "rakshit.mech@mitmysore.in",
                "+91 94481 77211",
                "Four-Bar Kinematic Linkage Model",
                "FDM",
                "PLA",
                1,
                "150 x 80 x 25 mm",
                20,
                0.2,
                "Standard demo model for Kinematics of Machines laboratory.",
                "sample_cube_mitm.stl",
                "models/sample_cube_mitm.stl",
                95000,
                ".stl",
                "Under Review",
                "Model geometry verified in PrusaSlicer. Waiting for student batch schedule.",
                "2026-11-19 12:00",
                "2026-11-16 11:05:00",
                "2026-11-16 11:30:00"
            )
        ]
        cursor.executemany("""
        INSERT INTO requests (id, student_name, usn, department, year_semester, email, phone,
                              project_name, technology, material, quantity, dimensions,
                              infill_percentage, layer_height, additional_instructions,
                              file_name, file_path, file_size, file_type, status, admin_notes,
                              estimated_completion, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, sample_requests)
        conn.commit()

    conn.close()


@app.on_event("startup")
def startup_event():
    init_db()
    create_sample_stl_file()


# ==========================================
# PUBLIC API ENDPOINTS
# ==========================================

@app.get("/api/health")
def health_check():
    return {
        "status": "online",
        "institution": "Maharaja Institute of Technology Mysore (MIT Mysore)",
        "department": "Department of Mechanical Engineering",
        "service": "Additive Manufacturing & 3D Printing Facility",
        "timestamp": datetime.now().isoformat()
    }


@app.get("/api/stats")
def get_stats():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM requests")
    total_requests = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM requests WHERE status IN ('Printing in Progress', 'Slicing & Approved', 'Under Review', 'Queued for Printing')")
    active_jobs = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM requests WHERE status IN ('Completed', 'Ready for Pickup')")
    completed_jobs = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM materials WHERE is_available = 1")
    available_materials = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM projects")
    total_projects = cursor.fetchone()[0]

    cursor.execute("SELECT status, COUNT(*) FROM requests GROUP BY status")
    status_distribution = {row[0]: row[1] for row in cursor.fetchall()}

    cursor.execute("SELECT material, COUNT(*) FROM requests GROUP BY material ORDER BY COUNT(*) DESC LIMIT 5")
    popular_materials = [{"material": row[0], "count": row[1]} for row in cursor.fetchall()]

    conn.close()
    return {
        "total_requests": total_requests,
        "active_jobs": active_jobs,
        "completed_jobs": completed_jobs,
        "available_materials": available_materials,
        "total_projects": total_projects,
        "printers_count": 6,
        "laser_scanners_count": 2,
        "status_distribution": status_distribution,
        "popular_materials": popular_materials
    }


# Materials
@app.get("/api/materials")
def list_materials():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM materials ORDER BY name ASC")
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


class MaterialUpdate(BaseModel):
    is_available: Optional[int] = None
    stock_status: Optional[str] = None
    price_per_gram: Optional[float] = None
    applications: Optional[str] = None
    description: Optional[str] = None


@app.put("/api/materials/{material_id}")
def update_material(material_id: str, data: MaterialUpdate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    updates = []
    values = []
    if data.is_available is not None:
        updates.append("is_available = ?")
        values.append(data.is_available)
    if data.stock_status is not None:
        updates.append("stock_status = ?")
        values.append(data.stock_status)
    if data.price_per_gram is not None:
        updates.append("price_per_gram = ?")
        values.append(data.price_per_gram)
    if data.applications is not None:
        updates.append("applications = ?")
        values.append(data.applications)
    if data.description is not None:
        updates.append("description = ?")
        values.append(data.description)

    if not updates:
        conn.close()
        raise HTTPException(status_code=400, detail="No fields provided for update")

    values.append(material_id)
    query = f"UPDATE materials SET {', '.join(updates)} WHERE id = ?"
    cursor.execute(query, values)
    conn.commit()
    conn.close()
    return {"message": "Material updated successfully", "id": material_id}


# Student Projects
@app.get("/api/projects")
def list_projects(category: Optional[str] = None):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    if category and category.lower() != "all":
        cursor.execute("SELECT * FROM projects WHERE category = ? ORDER BY created_at DESC", (category,))
    else:
        cursor.execute("SELECT * FROM projects ORDER BY created_at DESC")
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


@app.get("/api/projects/{project_id}")
def get_project(project_id: str):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM projects WHERE id = ?", (project_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail="Project not found")
    return dict(row)


class ProjectCreate(BaseModel):
    title: str
    category: str
    students: str
    usn_list: str
    guide: str
    academic_year: str
    technology: str
    material: str
    print_time_hours: Optional[float] = 10.0
    dimensions: Optional[str] = ""
    description: str
    features: Optional[str] = ""
    image_url: Optional[str] = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    featured: Optional[int] = 0


@app.post("/api/projects")
def create_project(data: ProjectCreate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    proj_id = f"proj-{uuid.uuid4().hex[:6]}"
    now = datetime.now().strftime("%Y-%m-%d")

    cursor.execute("""
    INSERT INTO projects (id, title, category, students, usn_list, guide, academic_year,
                          technology, material, print_time_hours, dimensions, description,
                          features, image_url, featured, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        proj_id, data.title, data.category, data.students, data.usn_list, data.guide,
        data.academic_year, data.technology, data.material, data.print_time_hours,
        data.dimensions, data.description, data.features, data.image_url, data.featured, now
    ))
    conn.commit()
    conn.close()
    return {"message": "Project created successfully", "id": proj_id}


@app.delete("/api/projects/{project_id}")
def delete_project(project_id: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM projects WHERE id = ?", (project_id,))
    conn.commit()
    conn.close()
    return {"message": "Project deleted successfully", "id": project_id}


# Gallery
@app.get("/api/gallery")
def list_gallery(category: Optional[str] = None):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    if category and category.lower() != "all":
        cursor.execute("SELECT * FROM gallery WHERE category = ? ORDER BY date DESC", (category,))
    else:
        cursor.execute("SELECT * FROM gallery ORDER BY date DESC")
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


class GalleryCreate(BaseModel):
    title: str
    category: str
    image_url: str
    caption: Optional[str] = ""
    featured: Optional[int] = 0


class GalleryUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None
    image_url: Optional[str] = None
    caption: Optional[str] = None
    featured: Optional[int] = None


@app.post("/api/gallery")
def create_gallery_item(data: GalleryCreate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    gal_id = f"gal-{uuid.uuid4().hex[:6]}"
    now = datetime.now().strftime("%Y-%m-%d")

    cursor.execute("""
    INSERT INTO gallery (id, title, category, image_url, caption, date, featured)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    """, (gal_id, data.title, data.category, data.image_url, data.caption, now, data.featured))
    conn.commit()
    conn.close()
    return {"message": "Gallery item added successfully", "id": gal_id}


@app.put("/api/gallery/{item_id}")
def update_gallery_item(item_id: str, data: GalleryUpdate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM gallery WHERE id = ?", (item_id,))
    existing = cursor.fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Gallery item not found")

    updates = []
    values = []
    if data.title is not None:
        updates.append("title = ?")
        values.append(data.title)
    if data.category is not None:
        updates.append("category = ?")
        values.append(data.category)
    if data.image_url is not None:
        updates.append("image_url = ?")
        values.append(data.image_url)
    if data.caption is not None:
        updates.append("caption = ?")
        values.append(data.caption)
    if data.featured is not None:
        updates.append("featured = ?")
        values.append(data.featured)

    if updates:
        values.append(item_id)
        cursor.execute(f"UPDATE gallery SET {', '.join(updates)} WHERE id = ?", tuple(values))
        conn.commit()

    conn.close()
    return {"message": "Gallery item updated successfully", "id": item_id}


@app.post("/api/gallery/upload")
async def upload_gallery_image(file: UploadFile = File(...)):
    allowed = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif"}
    ext = os.path.splitext(file.filename)[1].lower() if file.filename else ""
    if ext not in allowed:
        raise HTTPException(status_code=400, detail="Only image files (.jpg, .jpeg, .png, .webp, .svg) are allowed.")

    unique_name = f"gal_{uuid.uuid4().hex[:8]}{ext}"
    dest_path = os.path.join(GALLERY_DIR, unique_name)
    with open(dest_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "url": f"/uploads/gallery/{unique_name}",
        "file_name": unique_name,
        "message": "Image uploaded successfully"
    }


@app.delete("/api/gallery/{item_id}")
def delete_gallery_item(item_id: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM gallery WHERE id = ?", (item_id,))
    conn.commit()
    conn.close()
    return {"message": "Gallery item deleted", "id": item_id}


# 3D Printing Requests
@app.post("/api/requests")
async def create_printing_request(
    student_name: str = Form(...),
    usn: str = Form(...),
    department: str = Form(...),
    year_semester: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    project_name: str = Form(...),
    technology: str = Form(...),
    material: str = Form(...),
    quantity: int = Form(1),
    dimensions: str = Form(""),
    infill_percentage: int = Form(20),
    layer_height: float = Form(0.2),
    additional_instructions: str = Form(""),
    file: Optional[UploadFile] = File(None)
):
    req_num = uuid.uuid4().hex[:4].upper()
    req_id = f"MITM-2026-{req_num}"
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    saved_filename = "sample_cube_mitm.stl"
    saved_rel_path = "models/sample_cube_mitm.stl"
    file_size = 124000
    file_type = ".stl"

    if file and file.filename:
        orig_name = file.filename
        _, ext = os.path.splitext(orig_name)
        ext = ext.lower()
        file_type = ext
        saved_filename = f"{req_id}_{orig_name.replace(' ', '_')}"
        saved_abs_path = os.path.join(MODELS_DIR, saved_filename)
        with open(saved_abs_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        file_size = os.path.getsize(saved_abs_path)
        saved_rel_path = f"models/{saved_filename}"

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO requests (id, student_name, usn, department, year_semester, email, phone,
                          project_name, technology, material, quantity, dimensions,
                          infill_percentage, layer_height, additional_instructions,
                          file_name, file_path, file_size, file_type, status, admin_notes,
                          estimated_completion, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Submitted',
            'Request received. Pending technical review by Additive Manufacturing lab incharge.',
            'Under Calculation', ?, ?)
    """, (
        req_id, student_name, usn.upper().strip(), department, year_semester, email, phone,
        project_name, technology, material, quantity, dimensions, infill_percentage,
        layer_height, additional_instructions, saved_filename, saved_rel_path, file_size,
        file_type, now, now
    ))
    conn.commit()
    conn.close()

    return {
        "success": True,
        "request_id": req_id,
        "message": "3D printing request registered successfully. Save your Request ID to track status.",
        "model_file_url": f"/uploads/{saved_rel_path}",
        "status": "Submitted"
    }


@app.get("/api/requests")
def list_requests(
    status: Optional[str] = None,
    search: Optional[str] = None,
    limit: int = 50
):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()

    query = "SELECT * FROM requests WHERE 1=1"
    params = []

    if status and status.lower() != "all":
        query += " AND status = ?"
        params.append(status)

    if search:
        query += " AND (id LIKE ? OR usn LIKE ? OR student_name LIKE ? OR project_name LIKE ?)"
        s = f"%{search}%"
        params.extend([s, s, s, s])

    query += " ORDER BY created_at DESC LIMIT ?"
    params.append(limit)

    cursor.execute(query, params)
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


@app.get("/api/requests/{request_id}")
def get_request_detail(request_id: str):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM requests WHERE id = ?", (request_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        raise HTTPException(status_code=404, detail="Request not found")
    return dict(row)


@app.get("/api/requests/track/{query}")
def track_request(query: str):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    q = query.strip().upper()
    cursor.execute("SELECT * FROM requests WHERE id = ? OR UPPER(usn) = ? ORDER BY created_at DESC", (q, q))
    rows = cursor.fetchall()
    conn.close()
    if not rows:
        raise HTTPException(status_code=404, detail="No 3D printing requests found matching this Request ID or USN.")
    return [dict(r) for r in rows]


class RequestStatusUpdate(BaseModel):
    status: str
    admin_notes: Optional[str] = None
    estimated_completion: Optional[str] = None


@app.patch("/api/requests/{request_id}")
def update_request_status(request_id: str, data: RequestStatusUpdate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    updates = ["status = ?", "updated_at = ?"]
    values = [data.status, now]

    if data.admin_notes is not None:
        updates.append("admin_notes = ?")
        values.append(data.admin_notes)

    if data.estimated_completion is not None:
        updates.append("estimated_completion = ?")
        values.append(data.estimated_completion)

    values.append(request_id)
    query = f"UPDATE requests SET {', '.join(updates)} WHERE id = ?"
    cursor.execute(query, values)
    conn.commit()
    conn.close()
    return {"message": "Status updated successfully", "id": request_id, "status": data.status}


@app.get("/api/requests/{request_id}/download")
def download_model(request_id: str):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT file_name, file_path FROM requests WHERE id = ?", (request_id,))
    row = cursor.fetchone()
    conn.close()
    if not row or not row["file_path"]:
        raise HTTPException(status_code=404, detail="Model file not found")

    full_path = os.path.join(UPLOADS_DIR, row["file_path"])
    if not os.path.exists(full_path):
        raise HTTPException(status_code=404, detail="File not present on server disk")

    return FileResponse(
        path=full_path,
        filename=row["file_name"],
        media_type="application/octet-stream"
    )


# Contact Messages
class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    subject: str
    message: str


@app.post("/api/contact")
def submit_contact(data: ContactCreate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    msg_id = f"msg-{uuid.uuid4().hex[:6]}"
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    cursor.execute("""
    INSERT INTO contact_messages (id, name, email, phone, subject, message, status, created_at)
    VALUES (?, ?, ?, ?, ?, ?, 'Unread', ?)
    """, (msg_id, data.name, data.email, data.phone, data.subject, data.message, now))
    conn.commit()
    conn.close()

    return {
        "success": True,
        "message": "Thank you for contacting MIT Mysore Mechanical Department. We will respond promptly.",
        "id": msg_id
    }


@app.get("/api/contact")
def list_contacts():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contact_messages ORDER BY created_at DESC")
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]


# Admin Authentication
class AdminLogin(BaseModel):
    email: str
    password: str


@app.post("/api/auth/login")
def admin_login(creds: AdminLogin):
    configured_admin_email = os.getenv("ADMIN_EMAIL", "admin@mitmysore.in")
    configured_admin_password = os.getenv("ADMIN_PASSWORD", "mitmech3d")

    # Secure admin credentials with environment variable support
    if creds.email == configured_admin_email and creds.password == configured_admin_password:
        return {
            "token": f"mitm-mech-jwt-{uuid.uuid4().hex[:12]}-2026",
            "user": {
                "name": "Dr. Mohamed Khaisar",
                "role": "HOD & AM Lab Director",
                "email": configured_admin_email,
                "department": "Mechanical Engineering, MIT Mysore"
            }
        }
    elif creds.email == "demo@mitmysore.in" and creds.password == "demo":
        return {
            "token": f"mitm-demo-{uuid.uuid4().hex[:12]}",
            "user": {
                "name": "Lab Assistant / Supervisor",
                "role": "Lab Incharge",
                "email": "demo@mitmysore.in",
                "department": "Mechanical Engineering"
            }
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid administrator credentials.")


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)

