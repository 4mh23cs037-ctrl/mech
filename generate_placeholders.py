import os

os.makedirs("client/public/images/placeholders", exist_ok=True)

placeholders = [
    {
        "filename": "placeholder_fdm_printer.svg",
        "category": "3D PRINTERS",
        "title": "Industrial Dual-Extrusion FDM 3D Printer",
        "desc": "High-temperature dual nozzle system for engineering thermoplastics (PLA, ABS, PETG, TPU, Carbon Fiber PLA).",
        "tag": "EQUIPMENT SPEC: 300 x 300 x 400 mm BUILD VOLUME",
        "icon": "printer"
    },
    {
        "filename": "placeholder_sla_printer.svg",
        "category": "3D PRINTERS",
        "title": "Precision SLA UV Stereolithography Machine",
        "desc": "405nm UV laser resin system for high-resolution micro-features and smooth surface finishes (25-50 micron layer height).",
        "tag": "EQUIPMENT SPEC: PHOTOPOLYMER RESIN",
        "icon": "laser"
    },
    {
        "filename": "placeholder_scanner.svg",
        "category": "EQUIPMENT",
        "title": "Industrial Optical 3D Scanner & Turntable",
        "desc": "Blue structured light high-density digitizer with 0.02mm measurement accuracy for reverse engineering and CAD inspection.",
        "tag": "EQUIPMENT SPEC: 0.02mm OPTICAL PRECISION",
        "icon": "scan"
    },
    {
        "filename": "placeholder_curing.svg",
        "category": "EQUIPMENT",
        "title": "Automated Ultrasonic Wash & UV Post-Curing Chamber",
        "desc": "Controlled IPA washing bath and multi-spectrum 360-degree UV rotary heating cure for maximum tensile crosslinking.",
        "tag": "EQUIPMENT SPEC: POST-PROCESSING UNIT",
        "icon": "sun"
    },
    {
        "filename": "placeholder_printed_model.svg",
        "category": "PRINTED MODELS",
        "title": "Complex Planetary Speed Reducer & Gearbox",
        "desc": "Complete functioning mechanical subassembly with compliant planetary gears printed in single batch without external fasteners.",
        "tag": "STUDENT MODEL: CAPSTONE PROTOTYPE",
        "icon": "gear"
    },
    {
        "filename": "placeholder_student_slice.svg",
        "category": "STUDENT ACTIVITIES",
        "title": "Student G-Code Slicing & Machine Calibration",
        "desc": "Department mechanical engineering students optimizing infill density, print orientation, and bed leveling parameters.",
        "tag": "ACTIVITY: LAB PRACTICAL SESSION",
        "icon": "users"
    }
]

for p in placeholders:
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f15a24" />
      <stop offset="100%" stop-color="#ff7a45" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(241,90,36,0.12)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bg)" />
  <rect width="800" height="600" fill="url(#grid)" />

  <!-- Outer Border -->
  <rect x="20" y="20" width="760" height="560" rx="16" fill="none" stroke="#f15a24" stroke-width="2" stroke-dasharray="8 6" opacity="0.6"/>

  <!-- College Watermark Header -->
  <text x="40" y="65" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="bold" fill="#f15a24" letter-spacing="2">
    MAHARAJA INSTITUTE OF TECHNOLOGY MYSORE
  </text>
  <text x="40" y="85" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" fill="#94a3b8" letter-spacing="1">
    DEPARTMENT OF MECHANICAL ENGINEERING • 3D PRINTING &amp; AM FACILITY
  </text>

  <!-- Category Tag Badge -->
  <rect x="40" y="115" width="140" height="28" rx="6" fill="#f15a24" />
  <text x="50" y="134" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="#ffffff" letter-spacing="1">
    {p['category']}
  </text>

  <!-- Center Graphic Box -->
  <g transform="translate(400, 260)">
    <circle r="70" fill="rgba(241,90,36,0.08)" stroke="#f15a24" stroke-width="1.5" stroke-dasharray="4 4"/>
    <circle r="55" fill="rgba(15,23,42,0.8)" stroke="#94a3b8" stroke-width="1"/>
    
    <!-- Central 3D Cube / Scanner wireframe -->
    <path d="M 0 -30 L 26 -15 L 26 15 L 0 30 L -26 15 L -26 -15 Z" fill="none" stroke="#f15a24" stroke-width="2.5"/>
    <path d="M 0 -30 L 0 0 L 26 15 M 0 0 L -26 15" stroke="#f15a24" stroke-width="2"/>
    <circle cx="0" cy="0" r="4" fill="#38bdf8"/>
  </g>

  <!-- Notice Banner: Clearly Identified Placeholder -->
  <rect x="200" y="360" width="400" height="34" rx="8" fill="#451a03" stroke="#f97316" stroke-width="1.5"/>
  <text x="400" y="382" font-family="'Courier New', monospace" font-size="12" font-weight="bold" fill="#fdba74" text-anchor="middle" letter-spacing="1">
    📷 [PENDING DEPARTMENT UPLOAD]
  </text>

  <!-- Title & Description -->
  <text x="400" y="440" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" text-anchor="middle">
    {p['title']}
  </text>
  <text x="400" y="475" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" fill="#cbd5e1" text-anchor="middle">
    {p['desc']}
  </text>

  <!-- Bottom Spec Tag -->
  <rect x="40" y="520" width="720" height="36" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="60" y="543" font-family="'Courier New', monospace" font-size="12" fill="#38bdf8" font-weight="bold">
    {p['tag']}
  </text>
  <text x="740" y="543" font-family="'Courier New', monospace" font-size="11" fill="#64748b" text-anchor="end">
    REPLACE VIA ADMIN DASHBOARD
  </text>
</svg>'''
    filepath = os.path.join("client/public/images/placeholders", p["filename"])
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(svg_content)
    print("Created:", filepath)

