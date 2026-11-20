import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacilityPage } from './pages/FacilityPage';
import { FacultyPage } from './pages/FacultyPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { ServicesPage } from './pages/ServicesPage';
import { MaterialsPage } from './pages/MaterialsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { TrackStatusPage } from './pages/TrackStatusPage';
import { RequestPage } from './pages/RequestPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="facility" element={<FacilityPage />} />
          <Route path="faculty" element={<FacultyPage />} />
          <Route path="technologies" element={<TechnologiesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="track-status" element={<TrackStatusPage />} />
          <Route path="track" element={<Navigate to="/track-status" replace />} />
          <Route path="request" element={<RequestPage />} />
          <Route path="quote" element={<Navigate to="/request" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
