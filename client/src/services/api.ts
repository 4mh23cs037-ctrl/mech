import { PrintingRequest, Material, ProjectItem, GalleryItem, SystemStats, ContactMessage } from '../types';

const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '') 
  ? `${(import.meta.env.VITE_API_URL || '').replace(/\/$/, '')}/api` 
  : '/api';

export const api = {
  // Stats
  async getStats(): Promise<SystemStats> {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('Failed to fetch statistics');
    return res.json();
  },

  // Materials
  async getMaterials(): Promise<Material[]> {
    const res = await fetch(`${API_BASE}/materials`);
    if (!res.ok) throw new Error('Failed to fetch materials');
    return res.json();
  },

  async updateMaterial(id: string, data: Partial<Material>): Promise<any> {
    const res = await fetch(`${API_BASE}/materials/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update material');
    return res.json();
  },

  // Projects
  async getProjects(category?: string): Promise<ProjectItem[]> {
    const url = category && category !== 'All' ? `${API_BASE}/projects?category=${encodeURIComponent(category)}` : `${API_BASE}/projects`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  },

  async createProject(data: Partial<ProjectItem>): Promise<any> {
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create project');
    return res.json();
  },

  async deleteProject(id: string): Promise<any> {
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete project');
    return res.json();
  },

  // Gallery
  async getGallery(category?: string): Promise<GalleryItem[]> {
    const url = category && category !== 'All' ? `${API_BASE}/gallery?category=${encodeURIComponent(category)}` : `${API_BASE}/gallery`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch gallery');
    return res.json();
  },

  async createGalleryItem(data: Partial<GalleryItem>): Promise<any> {
    const res = await fetch(`${API_BASE}/gallery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to create gallery item');
    return res.json();
  },

  async deleteGalleryItem(id: string): Promise<any> {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete gallery item');
    return res.json();
  },

  async updateGalleryItem(id: string, data: Partial<GalleryItem>): Promise<any> {
    const res = await fetch(`${API_BASE}/gallery/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to update gallery item');
    return res.json();
  },

  async uploadGalleryImage(file: File): Promise<{ url: string; file_name: string; message: string }> {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch(`${API_BASE}/gallery/upload`, {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Image upload failed' }));
      throw new Error(err.detail || 'Image upload failed');
    }
    return res.json();
  },

  // Requests
  async createRequest(formData: FormData): Promise<any> {
    const res = await fetch(`${API_BASE}/requests`, {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Request submission failed' }));
      throw new Error(err.detail || 'Request submission failed');
    }
    return res.json();
  },

  async getRequests(status?: string, search?: string): Promise<PrintingRequest[]> {
    const params = new URLSearchParams();
    if (status && status !== 'All') params.append('status', status);
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE}/requests?${params.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch requests');
    return res.json();
  },

  async trackRequest(query: string): Promise<PrintingRequest[]> {
    const res = await fetch(`${API_BASE}/requests/track/${encodeURIComponent(query)}`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'No requests found' }));
      throw new Error(err.detail || 'No requests found matching this ID or USN');
    }
    return res.json();
  },

  async updateRequestStatus(id: string, status: string, adminNotes?: string, estimatedCompletion?: string): Promise<any> {
    const res = await fetch(`${API_BASE}/requests/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        status,
        admin_notes: adminNotes,
        estimated_completion: estimatedCompletion,
      }),
    });
    if (!res.ok) throw new Error('Failed to update request');
    return res.json();
  },

  // Contact
  async submitContact(data: { name: string; email: string; phone?: string; subject: string; message: string }): Promise<any> {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to send message');
    return res.json();
  },

  async getContacts(): Promise<ContactMessage[]> {
    const res = await fetch(`${API_BASE}/contact`);
    if (!res.ok) throw new Error('Failed to fetch contacts');
    return res.json();
  },

  // Admin Login
  async adminLogin(email: string, password: string): Promise<any> {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Invalid credentials' }));
      throw new Error(err.detail || 'Login failed');
    }
    return res.json();
  }
};

