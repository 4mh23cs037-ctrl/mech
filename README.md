# MIT Mysore – 3D Printing & Additive Manufacturing Portal
### Department of Mechanical Engineering | Maharaja Institute of Technology Mysore

A modern, industrial-grade web application for the **Department of Mechanical Engineering, MIT Mysore (Affiliated to VTU Belagavi, NAAC Accredited)**. This portal provides students, faculty researchers, and regional industries with direct access to advanced additive manufacturing, rapid prototyping, 3D scanning, and technical project management.

---

## 🚀 Key Highlights & Architectural Features

### 1. Futuristic Industrial Design
- **Color Palette**: Dark Navy (`#030712`, `#070e24`), Cyber Electric Blue (`#00f0ff`, `#2563eb`), Slate accents, and glowing borders.
- **Three.js WebGL 3D Interactive Hero**:
  - Procedurally modeled industrial 3D printer gantry with dual Z-axis leadscrews, heated print bed with coordinate grid, moving X/Y extruder carriage, and glowing nozzle.
  - Interactive planetary gear speed reduction assembly being printed in real time.
  - Orbit rotation, zoom, wireframe toggle, laser glow, and real-time machine telemetry HUD.

### 2. In-Browser 3D STL Model Inspector
- Integrated **WebGL STL parser** supporting both binary and ASCII STL formats.
- Real-time calculation of **Bounding Box Dimensions (X × Y × Z in mm)**, **Part Volume (cm³)**, **Estimated PLA Filament Weight (g)**, and **Polygon Triangle Count**.
- Orbit controls, wireframe/solid toggle, and dynamic material color switcher.
- Enables students to preview their CAD models before submitting, and allows faculty administrators to inspect submitted files right inside the dashboard.

### 3. Dedicated "Our 3D Printing Facility" Showcase
- **Real Academic Laboratories & Workstations**:
  - Mechanical Engineering Research & Additive Innovation Laboratory (`research_lab.jpg`)
  - CAD/CAM 3D Slicing & Modeling Studios (`cad_lab1.jpg`, `cad_lab2.jpg`)
  - Mechanical Metrology & Measurements (MMM) QA Testing Lab (`mmm_lab5.jpg`)
  - Heat Transfer and Fluid Mechanics Testing facilities (`ht_lab.jpg`, `fm_lab.jpg`)
- **Categorized Facility Gallery**:
  - `Laboratory`, `3D Printers`, `Equipment`, `Printed Models`, and `Student Activities`.
  - Clearly identified department placeholders for machines pending final student photo collection (`[Pending Department Photo Upload]`).
- **Interactive Lightbox**: Full-resolution image zoom, previous/next controls, keyboard navigation (left/right arrows), and technical captions.
- **Admin Photo Curator**: Faculty administrators can add, edit/replace, or delete facility photos directly from the dashboard via local file upload or image URLs.

### 4. 3D Printing Technologies & Comparative Specs
- Comprehensive interactive cards and technical breakdowns for:
  - **FDM** (Fused Deposition Modeling)
  - **SLA** (Stereolithography Laser Photopolymerization)
  - **SLS** (Selective Laser Sintering)
  - **DLP** (Digital Light Processing)
- Detailed working principles, layer heights, dimensional tolerances, pros/cons, and applications.

### 5. Services Matrix
Modern interactive cards for 8 core domains:
1. 3D Printing & Additive Fabrication
2. 3D Scanning & Reverse Engineering
3. CAD Modelling & Topology Optimization (SolidWorks, ANSYS)
4. Rapid Prototyping & Overnight Iterations
5. Mechanical Component Design & Kinematic Simulation
6. End-to-End Product Development
7. Functional Prototyping & Load Testing
8. Custom Component Manufacturing & Low-Volume Batches

### 6. Materials Matrix & Dynamic Stock Manager
- **Materials**: PLA, ABS, PETG, TPU 95A, Tough Photopolymer Resin, Nylon PA12, and Carbon Fiber PLA.
- Technical spec sheets (Tensile strength, heat deflection, density, print temps, stock colors, and subsidized internal student recovery costs).
- **Admin Configurable Availability**: Live "In Stock", "Low Stock", and "Out of Stock" status configurable in real time.

### 7. Student Project Showcase
- Real-world capstone projects from MIT Mysore students with photos, team names, USNs, faculty guides, dimensions, and print hours:
  - *Epicyclic Planetary Gearbox Speed Reducer (4:1)*
  - *Formula Student Lightweight Air Intake Manifold*
  - *Quadruped Robot Leg Actuation Kinematic Linkage*
  - *Bionic Myoelectric Prosthetic Hand with Compliant Grippers*
  - *Centrifugal Water Pump Impeller with NACA Airfoil Blades*
  - *Autonomous Agriculture Drone Gimbal Stabilizer*
- Category filters (Mechanical, Automotive, Gear Systems, Robotics, Industrial, Capstone) and detailed modal inspections.

### 8. 3D Printing Request System & Verification
- Full-featured multi-field request form with validation:
  - Student Name, USN, Department, Year/Semester, Email, Phone
  - Project Title, Technology, Material, Quantity, Infill (%), Layer Height, Dimensions, Notes
  - File upload supporting `.stl`, `.obj`, `.step`, `.stp`, and `.3mf` up to 50MB.
  - Automatic preliminary cost and filament weight calculator.
  - Generation of unique tracking IDs (e.g. `MITM-2026-XXXX`).

### 9. Live Request Status Tracker
- Search by **Request ID** or **Student USN**.
- Visual step-by-step progress pipeline:
  `Submitted` ➔ `Under Review` ➔ `Slicing & Approved` ➔ `Queued` ➔ `Printing in Progress` ➔ `Post-Processing` ➔ `Ready for Pickup` ➔ `Completed`
- Displays estimated completion dates and laboratory incharge slicing feedback.

### 10. Laboratory Gallery
- Filterable archive showing 3D printing processes, lab machinery, printed engineering components, and student workshops.
- Fullscreen lightbox viewer with dates and descriptions.

### 11. FAQ & Campus Contact
- Interactive accordion knowledge base with instant search.
- Official MIT Mysore Mechanical Dept campus details, HOD contact info, embedded Google Maps, and inquiry transmission.

### 12. Secure Faculty & Administrator Portal
- **Login Credentials**:
  - Email: `admin@mitmysore.in`
  - Password: `mitmech3d`
  - Demo Guest: `demo@mitmysore.in` / `demo`
- **Capabilities**:
  - Manage request pipeline, update statuses, write slicing feedback notes, set completion dates.
  - In-browser 3D WebGL inspection of submitted student STL models.
  - Download submitted 3D CAD files.
  - Real-time stock status and pricing updates for materials.
  - Add, edit, or remove showcase projects and gallery photos.
  - View operational KPIs (total requests, active prints, completed jobs).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Vite |
| **3D Graphics** | Three.js, WebGL (Custom 3D Gantry & STL Parser) |
| **Icons & UI** | Lucide React |
| **Backend API** | Python FastAPI, Uvicorn, Python-Multipart |
| **Database** | SQLite3 (`mit_3d_printing.db`), persistent schema |
| **File Storage** | Local multi-part storage (`backend/uploads/models`) |

---

## 🏃 Running the Application

### 1. Launch Both Frontend & Backend (One-Click)
Double-click `start.bat` on Windows, or run:

```bash
# Terminal 1: Backend
cd backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# Terminal 2: Frontend
cd client
npm run dev
```

- **Frontend Application**: [http://localhost:5173](http://localhost:5173)
- **Backend API Docs (Swagger UI)**: [http://localhost:8000/docs](http://localhost:8000/docs)

