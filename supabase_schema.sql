-- ==============================================================================
-- MIT MYSORE - DEPARTMENT OF MECHANICAL ENGINEERING
-- 3D PRINTING & ADDITIVE MANUFACTURING PORTAL - SUPABASE SQL SCHEMA
-- ==============================================================================

-- 1. 3D Printing Requests Table
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
    file_size BIGINT,
    file_type TEXT,
    status TEXT DEFAULT 'Submitted',
    admin_notes TEXT,
    estimated_completion TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Index on USN and Status for quick pipeline tracking
CREATE INDEX IF NOT EXISTS idx_requests_usn ON requests(usn);
CREATE INDEX IF NOT EXISTS idx_requests_status ON requests(status);

-- 2. Available Materials Matrix Table
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
);

-- 3. Student Capstone Projects Showcase Table
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
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Our 3D Printing Facility Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    caption TEXT,
    date TEXT,
    featured INTEGER DEFAULT 0
);

-- Index on Category for fast filtering
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery(category);

-- 5. Contact & Technical Inquiry Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'Unread',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Initial Seed Data for Materials
INSERT INTO materials (id, name, category, density, tensile_strength, heat_deflection, print_temp, bed_temp, is_available, stock_status, price_per_gram, colors, applications, description, image_url)
VALUES
('mat-pla', 'PLA (Polylactic Acid)', 'Standard Thermoplastic', 1.24, '50 MPa', '55°C', '200-220°C', '50-60°C', 1, 'In Stock', 2.50, 'White, Black, Blue, Orange, Grey', 'Concept modeling, visual prototypes, architectural maquettes, education jigs', 'Biodegradable thermoplastic derived from renewable resources. Easy to print with minimal warping and sharp corner definition.', 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'),
('mat-abs', 'ABS (Acrylonitrile Butadiene Styrene)', 'Engineering Thermoplastic', 1.04, '40 MPa', '85°C', '230-250°C', '90-110°C', 1, 'In Stock', 3.00, 'Black, White, Red, Industrial Grey', 'Functional prototypes, automotive brackets, snap-fit assemblies, mechanical casings', 'Tough and impact-resistant engineering polymer capable of enduring elevated operational temperatures. Machinable and sandable.', 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80'),
('mat-petg', 'PETG (Polyethylene Terephthalate Glycol)', 'Engineering Thermoplastic', 1.27, '50 MPa', '70°C', '230-250°C', '70-85°C', 1, 'In Stock', 3.20, 'Translucent Blue, Clear, Solid Black', 'Fluid manifolds, outdoor enclosures, protective drone guards, mechanical linkages', 'Combines PLA ease of printing with ABS structural durability. Exceptional layer bonding and water/chemical resistance.', 'https://images.unsplash.com/photo-1581092229515-993e09cdd361?auto=format&fit=crop&w=600&q=80'),
('mat-tpu', 'TPU 95A (Thermoplastic Polyurethane)', 'Flexible Elastomer', 1.21, '35 MPa', '60°C', '220-240°C', '40-60°C', 1, 'In Stock', 4.50, 'Black, Blue, Orange', 'Vibration dampers, robotic end-effectors, gaskets, seals, ergonomic grips', 'High-grade flexible filament with Shore 95A hardness. Demonstrates elongation at break up to 580% with abrasion resistance.', 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80'),
('mat-resin', 'Engineering UV Photopolymer Resin', 'Photopolymer Resin (SLA)', 1.15, '65 MPa', '65°C', 'Ambient SLA', 'UV Curing 405nm', 1, 'In Stock', 6.00, 'Opaque Grey, Translucent Clear, Tough Amber', 'High-detail micro mechanics, dental models, aerodynamic intake nozzles, jewelry casts', 'High-resolution liquid resin cured with 405nm ultraviolet laser. Produces isotropic components with invisible layer lines down to 25 microns.', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'),
('mat-nylon', 'Nylon PA12', 'High-Performance Polymer', 1.01, '48 MPa', '95°C', '250-270°C', '100-110°C', 1, 'In Stock', 5.50, 'Natural White, Matte Black', 'Gears, bearings, heavy-duty automotive fixtures, snap fittings, live hinges', 'Industrial polyamide exhibiting exceptional fatigue resistance, self-lubricating surface properties, and flexibility under load.', 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80')
ON CONFLICT (id) DO NOTHING;

-- 7. Seed Initial Verified MIT Mysore Mechanical Facility Gallery Data
INSERT INTO gallery (id, title, category, image_url, caption, date, featured)
VALUES
('mitm-fac-lab-01', 'Mechanical Engineering Research & Additive Innovation Laboratory', 'Laboratory', '/images/mit/research_lab.jpg', 'Department research center for functional additive manufacturing, testing polymer tensile specimens, and prototyping mechanical assemblies.', '2026-02-15', 1),
('mitm-fac-lab-02', 'CAD/CAM 3D Slicing & Computational Modeling Studio (Lab 1)', 'Laboratory', '/images/mit/cad_lab1.jpg', 'Workstations configured with SolidWorks, Fusion 360, and Ultimaker Cura slicing for G-code toolpath generation.', '2026-02-10', 1),
('mitm-fac-lab-03', 'Advanced Mechanical Design & Simulation Studio (Lab 2)', 'Laboratory', '/images/mit/cad_lab2.jpg', 'Finite element analysis (FEA), topological mass reduction, and kinematic simulation terminals for capstone 3D printing preparation.', '2026-02-08', 0),
('mitm-fac-lab-04', 'Mechanical Metrology & Measurements (MMM) QA Testing Lab', 'Laboratory', '/images/mit/mmm_lab5.jpg', 'Coordinate measuring, optical profile projectors, surface roughness testers, and precision micrometers for post-print dimensional validation.', '2026-02-05', 1),
('mitm-fac-print-01', 'Industrial Dual-Extrusion FDM 3D Printer Station', '3D Printers', '/images/placeholders/placeholder_fdm_printer.svg', '[Pending Department Photo Upload] Dual extrusion high-temperature system supporting PLA, ABS, PETG, TPU, and chopped carbon-fiber filament.', '2026-02-18', 1),
('mitm-fac-print-02', 'Precision SLA UV Stereolithography 3D Machine', '3D Printers', '/images/placeholders/placeholder_sla_printer.svg', '[Pending Department Photo Upload] 405nm optical SLA stereolithography unit for 25-micron fine-tolerance micro features and rapid fluidic prototypes.', '2026-02-16', 1),
('mitm-fac-eq-01', 'Structured Blue Light Optical 3D Scanner & Turntable', 'Equipment', '/images/placeholders/placeholder_scanner.svg', '[Pending Department Photo Upload] High-precision optical scanner with 0.02mm resolution for reverse engineering and automated CAD variance analysis.', '2026-02-14', 1),
('mitm-fac-eq-02', 'Automated Ultrasonic Wash & UV Post-Curing Chamber', 'Equipment', '/images/placeholders/placeholder_curing.svg', '[Pending Department Photo Upload] Isopropyl wash tank and multi-frequency UV curing station ensuring maximum tensile crosslinking for resin components.', '2026-02-12', 0),
('mitm-fac-mod-01', 'Planetary Speed Reducer & Compliant Robotic Gripper', 'Printed Models', '/images/placeholders/placeholder_printed_model.svg', '[Pending Department Photo Upload] Monolithic print-in-place planetary gearbox with integral compliant bionic finger joints printed without external assembly.', '2026-02-11', 1),
('mitm-fac-act-01', 'MECHISMOS State-Level Mechanical Project & 3D Prototype Expo', 'Student Activities', '/images/mit/mechismos_tech_expo.jpg', 'Annual project exhibition demonstrating student-built 3D printed mechanical prototypes, robotics, and capstone engineering mechanisms.', '2026-02-01', 1),
('mitm-fac-act-02', 'Technical Hands-on Training on PLC, SCADA & NDT Automation', 'Student Activities', '/images/mit/training_plc_scada.png', 'Skill development intensive workshop training mechanical students on automated industrial control systems, machine logic, and inspection.', '2026-01-25', 0)
ON CONFLICT (id) DO NOTHING;

