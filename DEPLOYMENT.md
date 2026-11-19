# Deployment & Hosting Guide: MIT Mysore 3D Printing Portal

This document provides step-by-step instructions to deploy the **MIT Mysore Department of Mechanical Engineering 3D Printing Portal** to production using **Vercel** (Frontend), **Render** (Backend), and **Supabase** (Database & Storage).

---

## Architecture Overview

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS (Hosted on **Vercel**)
- **Backend**: Python 3.10+ FastAPI + Uvicorn (Hosted on **Render**)
- **Database**: 
  - Local / Standalone: Embedded **SQLite** (`backend/mit_3d_printing.db`)
  - Cloud Production: **Supabase** (PostgreSQL) with `supabase_schema.sql`
- **File Storage**: Local `backend/uploads/` (models & gallery) or **Supabase Storage Buckets**

---

## Part 1: Supabase Database Setup (2 Minutes)

1. **Create Project**:
   - Go to [supabase.com](https://supabase.com) and create a free project named `mit-mysore-3d-printing`.
   - Set a secure database password and choose your nearest AWS region (e.g., `ap-south-1` Mumbai or `ap-southeast-1` Singapore).

2. **Execute Database Schema**:
   - In your Supabase Dashboard, click on **SQL Editor** in the left sidebar.
   - Click **New query**, open the [`supabase_schema.sql`](file:///c:/Users/Dhanushree%20G%20M/OneDrive/Desktop/3D%20Printing/supabase_schema.sql) file from this repository, copy all contents, paste into the editor, and click **Run**.
   - This creates all 5 tables (`requests`, `materials`, `projects`, `gallery`, `contact_messages`) and pre-seeds initial materials and verified facility photos.

3. **(Optional) Supabase Storage Buckets**:
   - Go to **Storage** -> **New Bucket**.
   - Create bucket `models` (set Public: true) for student 3D STL/OBJ/STEP files.
   - Create bucket `gallery` (set Public: true) for facility photos.

4. **Copy Database Connection String**:
   - Go to **Project Settings** -> **Database** -> **Connection string** (URI).
   - Copy the string format: `postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres`

---

## Part 2: Backend Deployment to Render (3 Minutes)

The backend is configured for 1-click Render deployment via [`render.yaml`](file:///c:/Users/Dhanushree%20G%20M/OneDrive/Desktop/3D%20Printing/render.yaml) or manual setup:

### Option A: Manual Web Service Setup on Render
1. Push this repository to your GitHub account (`mit-mysore-3d-printing`).
2. Log into [render.com](https://render.com) and click **New +** -> **Web Service**.
3. Connect your GitHub repository.
4. Fill in the deployment details:
   - **Name**: `mit-mysore-3d-printing-api`
   - **Region**: Singapore or Oregon
   - **Branch**: `main`
   - **Root Directory**: `.` (leave root or set to `backend`)
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r backend/requirements.txt`
   - **Start Command**: `uvicorn main:app --app-dir backend --host 0.0.0.0 --port $PORT`
   - **Instance Type**: Free

5. **Environment Variables** in Render Dashboard:
   | Key | Example Value | Description |
   | :--- | :--- | :--- |
   | `PYTHON_VERSION` | `3.10.12` | Python runtime version |
   | `ADMIN_EMAIL` | `admin@mitmysore.in` | Department Admin Email |
   | `ADMIN_PASSWORD` | `mitmech3d` | Secure Admin Dashboard Password |
   | `CORS_ORIGINS` | `*` or your Vercel URL | Allowed origins for API requests |
   | `DATABASE_URL` | *(Optional)* Supabase connection URI | If using Supabase in production |

6. Click **Create Web Service**. Once deployed, Render will provide your public backend URL, e.g.:
   `https://mit-mysore-3d-printing-api.onrender.com`

---

## Part 3: Frontend Deployment to Vercel (2 Minutes)

The frontend contains [`client/vercel.json`](file:///c:/Users/Dhanushree%20G%20M/OneDrive/Desktop/3D%20Printing/client/vercel.json) to handle Single Page Application (SPA) routing, browser refresh handling, and asset caching.

1. Log into [vercel.com](https://vercel.com) and click **Add New...** -> **Project**.
2. Import your GitHub repository.
3. Configure the project settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: Click *Edit* and select `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables**:
   | Key | Value |
   | :--- | :--- |
   | `VITE_API_URL` | Your Render backend URL, e.g. `https://mit-mysore-3d-printing-api.onrender.com` |
5. Click **Deploy**. Vercel will build the frontend and provide your live public URL, e.g.:
   `https://mit-mysore-3d-printing.vercel.app`

---

## Part 4: Updating & Replacing Facility Photographs

Once real photos are captured from the Mechanical Engineering Department:
1. Open the deployed website or local portal.
2. Click the **Shield Icon** in the top navigation bar to access the **Admin Dashboard**.
3. Sign in using:
   - **Email**: `admin@mitmysore.in`
   - **Password**: `mitmech3d`
4. Click the **Lab Gallery** tab.
5. On any card (e.g., FDM Printer, SLA Machine, Optical 3D Scanner):
   - Click the **Edit / Replace Icon** (pencil).
   - Click **Choose File** to upload the real photograph directly from your computer, or paste a photo link.
   - Click **Save Changes**.
6. The live website gallery and lightbox will immediately display the new department photograph.

---

## Part 5: Local Testing & Development

To test the complete stack locally before deployment:

```bash
# Terminal 1: Start Backend (Port 8000)
python -m uvicorn main:app --app-dir backend --host 127.0.0.1 --port 8000

# Terminal 2: Start Frontend (Port 5173)
cd client
npm run dev
```

- **Frontend Portal**: [http://localhost:5173](http://localhost:5173)
- **API Swagger Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)

