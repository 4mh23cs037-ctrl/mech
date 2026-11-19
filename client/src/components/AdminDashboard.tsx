import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  LogOut, 
  Printer, 
  Layers, 
  FolderKanban, 
  Camera, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  Download, 
  Trash2, 
  Plus, 
  Edit3, 
  X, 
  Activity,
  User,
  Clock,
  Sparkles,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import { PrintingRequest, Material, ProjectItem, GalleryItem, SystemStats } from '../types';
import { api } from '../services/api';
import { STLViewerModal } from './STLViewerModal';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [loginEmail, setLoginEmail] = useState('admin@mitmysore.in');
  const [loginPassword, setLoginPassword] = useState('mitmech3d');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  // Tab State
  const [activeTab, setActiveTab] = useState<'requests' | 'materials' | 'projects' | 'gallery' | 'stats'>('requests');

  // Data states
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [requests, setRequests] = useState<PrintingRequest[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Filter / Search for requests
  const [requestFilter, setRequestFilter] = useState('All');
  const [requestSearch, setRequestSearch] = useState('');

  // 3D Preview Modal
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [activePreviewModel, setActivePreviewModel] = useState<{ url: string; name: string } | null>(null);

  // Status update modal / form
  const [selectedRequest, setSelectedRequest] = useState<PrintingRequest | null>(null);
  const [newStatus, setNewStatus] = useState('');
  const [adminNotes, setAdminNotes] = useState('');
  const [estCompletion, setEstCompletion] = useState('');

  // Add Project Modal state
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Mechanical',
    students: '',
    usn_list: '',
    guide: 'Dr. Mohamed Khaisar',
    academic_year: '2025-2026',
    technology: 'FDM',
    material: 'PLA',
    print_time_hours: 12,
    dimensions: '120 x 80 x 50 mm',
    description: '',
    features: '',
    image_url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    featured: 0
  });

  // Add Gallery Modal state
  const [addGalleryOpen, setAddGalleryOpen] = useState(false);
  const [uploadingGalleryImage, setUploadingGalleryImage] = useState(false);
  const [newGalleryItem, setNewGalleryItem] = useState({
    title: '',
    category: 'Laboratory',
    image_url: '/images/mit/research_lab.jpg',
    caption: '',
    featured: 1
  });

  // Edit / Replace Gallery Modal state
  const [editGalleryOpen, setEditGalleryOpen] = useState(false);
  const [editingGalleryItem, setEditingGalleryItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadDashboardData();
    }
  }, [isAuthenticated, activeTab]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'stats' || !stats) {
        const s = await api.getStats().catch(() => null);
        if (s) setStats(s);
      }
      if (activeTab === 'requests') {
        const reqs = await api.getRequests(requestFilter, requestSearch);
        setRequests(reqs);
      } else if (activeTab === 'materials') {
        const mats = await api.getMaterials();
        setMaterials(mats);
      } else if (activeTab === 'projects') {
        const projs = await api.getProjects();
        setProjects(projs);
      } else if (activeTab === 'gallery') {
        const gals = await api.getGallery();
        setGallery(gals);
      }
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    try {
      const res = await api.adminLogin(loginEmail, loginPassword);
      setIsAuthenticated(true);
      setAdminUser(res.user);
    } catch (err: any) {
      setLoginError(err.message || 'Invalid credentials');
    } finally {
      setLoggingIn(false);
    }
  };

  const handleUpdateStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRequest) return;
    try {
      await api.updateRequestStatus(selectedRequest.id, newStatus, adminNotes, estCompletion);
      setSelectedRequest(null);
      loadDashboardData();
    } catch (err: any) {
      alert(`Update error: ${err.message}`);
    }
  };

  const handleToggleMaterial = async (mat: Material) => {
    const nextStatus = mat.stock_status === 'In Stock' ? 'Low Stock' : mat.stock_status === 'Low Stock' ? 'Out of Stock' : 'In Stock';
    const isAvail = nextStatus !== 'Out of Stock' ? 1 : 0;
    try {
      await api.updateMaterial(mat.id, {
        stock_status: nextStatus as any,
        is_available: isAvail,
      });
      loadDashboardData();
    } catch (err: any) {
      alert(`Update error: ${err.message}`);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.createProject(newProject);
      setAddProjectOpen(false);
      loadDashboardData();
    } catch (err: any) {
      alert(`Create project error: ${err.message}`);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this student project?')) return;
    try {
      await api.deleteProject(id);
      loadDashboardData();
    } catch (err: any) {
      alert(`Delete error: ${err.message}`);
    }
  };

  const handleCreateGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.createGalleryItem(newGalleryItem);
      setAddGalleryOpen(false);
      setNewGalleryItem({
        title: '',
        category: 'Laboratory',
        image_url: '/images/mit/research_lab.jpg',
        caption: '',
        featured: 1
      });
      loadDashboardData();
    } catch (err: any) {
      alert(`Create gallery error: ${err.message}`);
    }
  };

  const handleOpenEditGallery = (item: GalleryItem) => {
    setEditingGalleryItem({ ...item });
    setEditGalleryOpen(true);
  };

  const handleUpdateGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGalleryItem) return;
    try {
      await api.updateGalleryItem(editingGalleryItem.id, editingGalleryItem);
      setEditGalleryOpen(false);
      setEditingGalleryItem(null);
      loadDashboardData();
    } catch (err: any) {
      alert(`Update gallery error: ${err.message}`);
    }
  };

  const handleGalleryImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingGalleryImage(true);
    try {
      const res = await api.uploadGalleryImage(file);
      if (isEdit && editingGalleryItem) {
        setEditingGalleryItem({ ...editingGalleryItem, image_url: res.url });
      } else {
        setNewGalleryItem({ ...newGalleryItem, image_url: res.url });
      }
    } catch (err: any) {
      alert(`Image upload error: ${err.message}`);
    } finally {
      setUploadingGalleryImage(false);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm('Are you sure you want to delete this gallery item?')) return;
    try {
      await api.deleteGalleryItem(id);
      loadDashboardData();
    } catch (err: any) {
      alert(`Delete error: ${err.message}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-6xl bg-[#070e24] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[94vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-cyan-500/20">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-white p-1 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,240,255,0.25)] flex items-center justify-center shrink-0">
              <img 
                src="/images/mit_logo.png" 
                alt="MIT Mysore College Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                  MIT Mysore AM-Lab Administration
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  Faculty Control
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {isAuthenticated && adminUser ? `${adminUser.name} (${adminUser.role}) • Dept. of Mechanical Engineering` : 'Maharaja Institute of Technology Mysore • Authentication Required'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {!isAuthenticated ? (
            /* Login Screen */
            <div className="flex-1 flex items-center justify-center p-6 bg-slate-950/80">
              <div className="w-full max-w-md p-8 rounded-3xl glass-card border border-cyan-500/30 shadow-2xl text-center">
                <div className="w-24 h-24 rounded-full bg-white p-2 border-2 border-cyan-400/50 shadow-[0_0_25px_rgba(0,240,255,0.35)] mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="/images/mit_logo.png" 
                    alt="Maharaja Institute of Technology Mysore Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
                  />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[11px] font-mono text-cyan-300 uppercase tracking-wider mb-2">
                  Maharaja Institute of Technology Mysore
                </div>
                <h4 className="text-xl font-bold text-center text-white font-['Rajdhani'] uppercase mb-1">
                  Department of Mechanical Engineering
                </h4>
                <p className="text-xs text-center text-cyan-400 font-mono mb-6">
                  Additive Manufacturing & 3D Printing Control Portal
                </p>

                {loginError && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs font-mono mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 px-4 py-2.5 rounded-xl text-sm text-white focus:outline-none font-mono"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Password</label>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-cyan-400 px-4 py-2.5 rounded-xl text-sm text-white focus:outline-none font-mono"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loggingIn}
                    className="w-full mt-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition shadow-lg shadow-cyan-500/30 disabled:opacity-50"
                  >
                    {loggingIn ? 'Authenticating...' : 'Sign In as Administrator'}
                  </button>

                  <div className="text-center mt-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                    Pre-configured credentials loaded for instant access.
                  </div>
                </form>
              </div>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Sidebar Tabs */}
              <div className="w-full md:w-60 bg-slate-900/90 border-r border-cyan-500/10 p-3.5 flex flex-row md:flex-col gap-1.5 overflow-x-auto">
                {/* College Branding Badge */}
                <div className="hidden md:flex items-center gap-3 p-3 rounded-2xl bg-cyan-950/40 border border-cyan-800/40 mb-3 shadow-inner">
                  <div className="w-10 h-10 rounded-full bg-white p-1 shrink-0 shadow-md flex items-center justify-center">
                    <img 
                      src="/images/mit_logo.png" 
                      alt="MIT Mysore" 
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
                    />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-bold text-white font-['Rajdhani'] uppercase tracking-wider truncate">
                      MIT MYSORE
                    </div>
                    <div className="text-[10px] text-cyan-400 font-mono truncate">
                      Mechanical Engg.
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('requests')}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                    activeTab === 'requests'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Requests</span>
                </button>

                <button
                  onClick={() => setActiveTab('materials')}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                    activeTab === 'materials'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Materials Stock</span>
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                    activeTab === 'projects'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <FolderKanban className="w-4 h-4" />
                  <span>Student Projects</span>
                </button>

                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                    activeTab === 'gallery'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Camera className="w-4 h-4" />
                  <span>Lab Gallery</span>
                </button>

                <button
                  onClick={() => setActiveTab('stats')}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                    activeTab === 'stats'
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Analytics & KPIs</span>
                </button>
              </div>

              {/* Main Panel Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-slate-950">
                {/* 1. REQUESTS MANAGEMENT */}
                {activeTab === 'requests' && (
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white p-1 border border-cyan-500/30 shrink-0 hidden sm:flex items-center justify-center shadow-md">
                          <img 
                            src="/images/mit_logo.png" 
                            alt="MIT Mysore Logo" 
                            className="w-full h-full object-contain"
                            onError={(e) => { e.currentTarget.src = '/mit_logo.png'; }}
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                            3D Printing Request Pipeline
                          </h4>
                          <p className="text-xs text-slate-400 font-mono">
                            MIT Mysore Mechanical Engg. • Review, verify CAD geometry, slice, and update printing stages.
                          </p>
                        </div>
                      </div>

                      {/* Filter & Search */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <select
                          value={requestFilter}
                          onChange={(e) => {
                            setRequestFilter(e.target.value);
                            loadDashboardData();
                          }}
                          className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-white font-mono focus:outline-none"
                        >
                          <option value="All">All Statuses</option>
                          <option value="Submitted">Submitted</option>
                          <option value="Under Review">Under Review</option>
                          <option value="Printing in Progress">Printing in Progress</option>
                          <option value="Ready for Pickup">Ready for Pickup</option>
                          <option value="Completed">Completed</option>
                          <option value="Rejected">Rejected</option>
                        </select>

                        <button
                          onClick={loadDashboardData}
                          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition"
                          title="Refresh Queue"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Requests Table */}
                    <div className="glass-card rounded-2xl border border-slate-800 overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-900 text-slate-400 border-b border-slate-800 uppercase text-[10px]">
                          <tr>
                            <th className="p-3.5">ID / USN</th>
                            <th className="p-3.5">Student / Project</th>
                            <th className="p-3.5">Tech & Material</th>
                            <th className="p-3.5">Quantity</th>
                            <th className="p-3.5">Status</th>
                            <th className="p-3.5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {requests.map((r) => (
                            <tr key={r.id} className="hover:bg-slate-900/40 transition">
                              <td className="p-3.5">
                                <div className="font-bold text-cyan-300">{r.id}</div>
                                <div className="text-[11px] text-slate-400">{r.usn}</div>
                              </td>
                              <td className="p-3.5">
                                <div className="font-semibold text-white">{r.student_name}</div>
                                <div className="text-[11px] text-slate-400 truncate max-w-xs">{r.project_name}</div>
                              </td>
                              <td className="p-3.5">
                                <span className="text-white font-bold">{r.technology}</span>
                                <span className="text-slate-400 block text-[11px]">{r.material}</span>
                              </td>
                              <td className="p-3.5">
                                <span className="text-white font-bold">{r.quantity}</span>
                                <span className="text-slate-500 block text-[10px]">{r.infill_percentage}% infill</span>
                              </td>
                              <td className="p-3.5">
                                <span
                                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                                    r.status === 'Ready for Pickup' || r.status === 'Completed'
                                      ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                                      : r.status === 'Printing in Progress'
                                      ? 'bg-cyan-950 text-cyan-300 border-cyan-800 animate-pulse'
                                      : r.status === 'Rejected'
                                      ? 'bg-rose-950 text-rose-300 border-rose-800'
                                      : 'bg-blue-950 text-blue-300 border-blue-800'
                                  }`}
                                >
                                  {r.status}
                                </span>
                              </td>
                              <td className="p-3.5 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  {r.file_name && r.file_name.toLowerCase().endsWith('.stl') && (
                                    <button
                                      onClick={() => {
                                        setActivePreviewModel({
                                          url: `/uploads/${r.file_path}`,
                                          name: r.file_name || 'CAD Model',
                                        });
                                        setPreviewModalOpen(true);
                                      }}
                                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition"
                                      title="3D Inspect STL"
                                    >
                                      <Eye className="w-4 h-4" />
                                    </button>
                                  )}

                                  {r.file_path && (
                                    <a
                                      href={`/uploads/${r.file_path}`}
                                      download={r.file_name}
                                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                                      title="Download 3D File"
                                    >
                                      <Download className="w-4 h-4" />
                                    </a>
                                  )}

                                  <button
                                    onClick={() => {
                                      setSelectedRequest(r);
                                      setNewStatus(r.status);
                                      setAdminNotes(r.admin_notes || '');
                                      setEstCompletion(r.estimated_completion || '');
                                    }}
                                    className="p-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 transition"
                                    title="Update Status / Notes"
                                  >
                                    <Edit3 className="w-4 h-4" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* 2. MATERIALS STOCK MANAGEMENT */}
                {activeTab === 'materials' && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                        Material Availability & Cost Management
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Configure live availability, stock alerts, and subsidized recovery pricing for student orders.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {materials.map((m) => (
                        <div key={m.id} className="glass-card rounded-2xl border border-slate-800 p-5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                                {m.category}
                              </span>
                              <span
                                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                                  m.stock_status === 'In Stock'
                                    ? 'bg-emerald-950 text-emerald-300'
                                    : m.stock_status === 'Low Stock'
                                    ? 'bg-amber-950 text-amber-300'
                                    : 'bg-rose-950 text-rose-300'
                                }`}
                              >
                                {m.stock_status}
                              </span>
                            </div>

                            <h5 className="text-base font-bold text-white font-['Rajdhani'] mb-1">
                              {m.name}
                            </h5>
                            <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                              {m.description}
                            </p>

                            <div className="text-xs font-mono text-slate-300 mb-4">
                              Recovery Rate: <span className="text-cyan-300 font-bold">₹{m.price_per_gram}/g</span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                            <span className="text-[11px] text-slate-400 font-mono">Toggle Stock:</span>
                            <button
                              onClick={() => handleToggleMaterial(m)}
                              className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition"
                            >
                              Cycle Status ({m.stock_status})
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 3. STUDENT PROJECTS MANAGEMENT */}
                {activeTab === 'projects' && (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                          Student Projects Registry
                        </h4>
                        <p className="text-xs text-slate-400 font-mono">
                          Add or curate published student mechanical engineering capstone projects.
                        </p>
                      </div>

                      <button
                        onClick={() => setAddProjectOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase transition shadow-lg shadow-cyan-500/30"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Project</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((p) => (
                        <div key={p.id} className="glass-card rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between">
                          <div className="h-36 relative overflow-hidden bg-slate-900">
                            <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />
                            <span className="absolute top-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-cyan-300">
                              {p.category}
                            </span>
                          </div>

                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                              <h5 className="text-sm font-bold text-white font-['Rajdhani'] mb-1 line-clamp-1">
                                {p.title}
                              </h5>
                              <p className="text-xs text-slate-400 font-mono mb-2">Team: {p.students}</p>
                              <p className="text-[11px] text-slate-500 font-mono mb-4">{p.technology} • {p.material}</p>
                            </div>

                            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                              <span className="text-[10px] font-mono text-slate-400">{p.academic_year}</span>
                              <button
                                onClick={() => handleDeleteProject(p.id)}
                                className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/40 transition"
                                title="Delete Project"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. GALLERY MANAGEMENT */}
                {activeTab === 'gallery' && (
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-800">
                      <div>
                        <h4 className="text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                          Our 3D Printing Facility Gallery Curator
                        </h4>
                        <p className="text-xs text-slate-400 font-mono">
                          Add, replace, and curate photographs of 3D printers, laboratory stations, equipment, printed models, and student activities.
                        </p>
                      </div>

                      <button
                        onClick={() => setAddGalleryOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono uppercase transition shadow-lg shadow-cyan-500/30"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Facility Photo</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {gallery.map((g) => (
                        <div key={g.id} className="relative rounded-xl overflow-hidden group glass-card border border-slate-800 h-48 flex flex-col justify-end">
                          <img 
                            src={g.image_url} 
                            alt={g.title} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                            onError={(e) => { e.currentTarget.src = '/images/mit/research_lab.jpg'; }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                          <div className="relative z-10 p-2.5">
                            <span className="text-[9px] font-mono font-bold text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800 inline-block mb-1">
                              {g.category}
                            </span>
                            <span className="text-xs font-bold text-white font-['Rajdhani'] line-clamp-1 block">
                              {g.title}
                            </span>
                            {g.caption && (
                              <span className="text-[10px] text-slate-300 line-clamp-1 font-mono">
                                {g.caption}
                              </span>
                            )}
                          </div>

                          {/* Quick Admin Actions (Replace / Edit + Delete) */}
                          <div className="absolute top-2 right-2 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity z-20">
                            <button
                              onClick={() => handleOpenEditGallery(g)}
                              className="p-1.5 rounded-lg bg-black/80 text-cyan-400 hover:bg-cyan-950 hover:text-cyan-300 border border-cyan-500/40 transition"
                              title="Replace Photo / Edit"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteGallery(g.id)}
                              className="p-1.5 rounded-lg bg-black/80 text-rose-400 hover:bg-rose-950 hover:text-rose-300 border border-rose-500/40 transition"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. ANALYTICS & STATS */}
                {activeTab === 'stats' && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-xl font-bold text-white font-['Rajdhani'] uppercase tracking-wide">
                        Laboratory Analytics & Operational KPIs
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        Overview of request volume, printer utilization, and popular engineering polymers.
                      </p>
                    </div>

                    {stats && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl glass-card border border-slate-800">
                          <span className="text-slate-400 text-xs font-mono">TOTAL REQUESTS</span>
                          <div className="text-3xl font-black text-cyan-400 font-mono mt-1">{stats.total_requests}</div>
                        </div>

                        <div className="p-5 rounded-2xl glass-card border border-slate-800">
                          <span className="text-slate-400 text-xs font-mono">ACTIVE PRINT JOBS</span>
                          <div className="text-3xl font-black text-amber-400 font-mono mt-1">{stats.active_jobs}</div>
                        </div>

                        <div className="p-5 rounded-2xl glass-card border border-slate-800">
                          <span className="text-slate-400 text-xs font-mono">COMPLETED PRINTS</span>
                          <div className="text-3xl font-black text-emerald-400 font-mono mt-1">{stats.completed_jobs}</div>
                        </div>

                        <div className="p-5 rounded-2xl glass-card border border-slate-800">
                          <span className="text-slate-400 text-xs font-mono">MATERIALS STOCKED</span>
                          <div className="text-3xl font-black text-white font-mono mt-1">{stats.available_materials}</div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Update Status Modal */}
        {selectedRequest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20">
                <h4 className="text-lg font-bold text-white font-['Rajdhani'] uppercase">
                  Update Request: {selectedRequest.id}
                </h4>
                <button onClick={() => setSelectedRequest(null)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdateStatus} className="flex flex-col gap-4 text-xs font-mono">
                <div>
                  <label className="text-slate-400 block mb-1">Pipeline Status:</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Submitted">Submitted</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Slicing & Approved">Slicing & Approved</option>
                    <option value="Queued for Printing">Queued for Printing</option>
                    <option value="Printing in Progress">Printing in Progress</option>
                    <option value="Post-Processing">Post-Processing</option>
                    <option value="Ready for Pickup">Ready for Pickup</option>
                    <option value="Completed">Completed</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Estimated Completion Date / Note:</label>
                  <input
                    type="text"
                    value={estCompletion}
                    onChange={(e) => setEstCompletion(e.target.value)}
                    placeholder="e.g. 2026-11-18 16:00 / Ready for Pickup"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Laboratory Slicing & Engineering Feedback:</label>
                  <textarea
                    rows={3}
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Add notes for student (e.g. Layer 0.16mm sliced in Cura. Bed temp 60C. Ready in Locker A-2)."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedRequest(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add Project Modal */}
        {addProjectOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20">
                <h4 className="text-lg font-bold text-white font-['Rajdhani'] uppercase">
                  Add Student Capstone Project
                </h4>
                <button onClick={() => setAddProjectOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateProject} className="flex flex-col gap-3 text-xs font-mono">
                <div>
                  <label className="text-slate-400 block mb-1">Project Title:</label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Category:</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none"
                    >
                      <option value="Mechanical">Mechanical</option>
                      <option value="Automotive">Automotive</option>
                      <option value="Gear Systems">Gear Systems</option>
                      <option value="Robotics">Robotics</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Final-Year Capstone">Final-Year Capstone</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Academic Year:</label>
                    <input
                      type="text"
                      value={newProject.academic_year}
                      onChange={(e) => setNewProject({ ...newProject, academic_year: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Student Names:</label>
                  <input
                    type="text"
                    value={newProject.students}
                    onChange={(e) => setNewProject({ ...newProject, students: e.target.value })}
                    placeholder="e.g. Arjun Rao, Bhavana K"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Student USNs:</label>
                  <input
                    type="text"
                    value={newProject.usn_list}
                    onChange={(e) => setNewProject({ ...newProject, usn_list: e.target.value })}
                    placeholder="e.g. 4MH21ME012, 4MH21ME028"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 block mb-1">Technology:</label>
                    <input
                      type="text"
                      value={newProject.technology}
                      onChange={(e) => setNewProject({ ...newProject, technology: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Material:</label>
                    <input
                      type="text"
                      value={newProject.material}
                      onChange={(e) => setNewProject({ ...newProject, material: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Image URL:</label>
                  <input
                    type="text"
                    value={newProject.image_url}
                    onChange={(e) => setNewProject({ ...newProject, image_url: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Description:</label>
                  <textarea
                    rows={2}
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setAddProjectOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold uppercase"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Add Facility Photo Modal */}
        {addGalleryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20">
                <h4 className="text-lg font-bold text-white font-['Rajdhani'] uppercase">
                  Add Facility Photograph
                </h4>
                <button onClick={() => setAddGalleryOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateGallery} className="flex flex-col gap-3 text-xs font-mono">
                <div>
                  <label className="text-slate-400 block mb-1">Photo Title:</label>
                  <input
                    type="text"
                    value={newGalleryItem.title}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, title: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="e.g. FDM Industrial 3D Printer Station"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Facility Category:</label>
                  <select
                    value={newGalleryItem.category}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, category: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Laboratory">Laboratory</option>
                    <option value="3D Printers">3D Printers</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Printed Models">Printed Models</option>
                    <option value="Student Activities">Student Activities</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Upload Real Photo File:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleGalleryImageUpload(e, false)}
                    className="w-full text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30"
                  />
                  {uploadingGalleryImage && (
                    <div className="text-[11px] text-cyan-400 mt-1">Uploading image...</div>
                  )}
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Image URL or Local Path:</label>
                  <input
                    type="text"
                    value={newGalleryItem.image_url}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, image_url: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="/images/mit/... or upload above"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Technical Caption:</label>
                  <input
                    type="text"
                    value={newGalleryItem.caption}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, caption: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Description of machine, specifications, or activity..."
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setAddGalleryOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold uppercase hover:bg-cyan-400 transition"
                  >
                    Save Photo
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit / Replace Facility Photo Modal */}
        {editGalleryOpen && editingGalleryItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="bg-[#070e24] border border-cyan-500/40 rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyan-500/20">
                <h4 className="text-lg font-bold text-white font-['Rajdhani'] uppercase">
                  Replace / Edit Facility Photo
                </h4>
                <button onClick={() => setEditGalleryOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdateGallery} className="flex flex-col gap-3 text-xs font-mono">
                {/* Photo Preview */}
                <div className="w-full h-36 rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center relative">
                  <img
                    src={editingGalleryItem.image_url}
                    alt={editingGalleryItem.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.src = '/images/mit/research_lab.jpg'; }}
                  />
                  <span className="absolute bottom-1 right-2 text-[10px] bg-black/80 px-2 py-0.5 rounded text-cyan-300">
                    Current Preview
                  </span>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Replace With Real Photo File:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleGalleryImageUpload(e, true)}
                    className="w-full text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-mono file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30"
                  />
                  {uploadingGalleryImage && (
                    <div className="text-[11px] text-cyan-400 mt-1">Uploading replacement...</div>
                  )}
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Photo Title:</label>
                  <input
                    type="text"
                    value={editingGalleryItem.title}
                    onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, title: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Category:</label>
                  <select
                    value={editingGalleryItem.category}
                    onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, category: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Laboratory">Laboratory</option>
                    <option value="3D Printers">3D Printers</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Printed Models">Printed Models</option>
                    <option value="Student Activities">Student Activities</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Image URL / Path:</label>
                  <input
                    type="text"
                    value={editingGalleryItem.image_url}
                    onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, image_url: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                    required
                  />
                </div>

                <div>
                  <label className="text-slate-400 block mb-1">Caption:</label>
                  <input
                    type="text"
                    value={editingGalleryItem.caption || ''}
                    onChange={(e) => setEditingGalleryItem({ ...editingGalleryItem, caption: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setEditGalleryOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-cyan-500 text-black font-bold uppercase hover:bg-cyan-400 transition"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* 3D STL Inspection Modal */}
        {activePreviewModel && (
          <STLViewerModal
            isOpen={previewModalOpen}
            onClose={() => setPreviewModalOpen(false)}
            fileUrl={activePreviewModel.url}
            modelName={activePreviewModel.name}
          />
        )}
      </div>
    </div>
  );
};

