import urllib.request
import os

os.makedirs('client/public/images/faculty', exist_ok=True)

faculty_images = [
    ('hod_mohamed_khaisar.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS02-scaled.jpg'),
    ('dr_b_harish.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS03-scaled.jpg'),
    ('dr_chethan_yd.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS06-scaled.jpg'),
    ('dr_ravikumar_ks.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS07-scaled.jpg'),
    ('dr_godfrey_devaputra.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS08-scaled.jpg'),
    ('dr_chethana_gd.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS14-scaled.jpg'),
    ('prof_yogesh_kumar.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS12-scaled.jpg'),
    ('prof_santhosh_kg.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS11-scaled.jpg'),
    ('prof_kishan_gs.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS16-scaled.jpg'),
    ('prof_rakesh_r.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS20-scaled.jpg'),
    ('prof_anilkumar_mm.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS25-scaled.jpg'),
    ('prof_krishna_prasad.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS23-scaled.jpg'),
    ('prof_sathish_h.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS27-scaled.jpg'),
    ('prof_abhilash_m.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS26-scaled.jpg'),
    ('prof_sachin_b.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS30-scaled.jpg'),
    ('prof_abhishek_hr.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS31-scaled.jpg'),
    ('prof_ameena_kausar.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METS35-scaled.jpg'),
    ('staff_ramesh_kumar.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METE04-scaled.jpg'),
    ('staff_somesha.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METE09-scaled.jpg'),
    ('staff_vishwavasu.jpg', 'https://mitmysore.in/wp-content/uploads/2025/10/METE02-scaled.jpg')
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in faculty_images:
    dest = os.path.join('client/public/images/faculty', fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp, open(dest, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded {fname} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Failed {fname}: {e}")

