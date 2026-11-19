export interface PrintingRequest {
  id: string;
  student_name: string;
  usn: string;
  department: string;
  year_semester: string;
  email: string;
  phone: string;
  project_name: string;
  technology: 'FDM' | 'SLA' | 'SLS' | 'DLP' | string;
  material: string;
  quantity: number;
  dimensions: string;
  infill_percentage: number;
  layer_height: number;
  additional_instructions?: string;
  file_name?: string;
  file_path?: string;
  file_size?: number;
  file_type?: string;
  status: 'Submitted' | 'Under Review' | 'Slicing & Approved' | 'Queued for Printing' | 'Printing in Progress' | 'Post-Processing' | 'Ready for Pickup' | 'Completed' | 'Rejected';
  admin_notes?: string;
  estimated_completion?: string;
  created_at: string;
  updated_at: string;
}

export interface Material {
  id: string;
  name: string;
  category: string;
  density: number;
  tensile_strength: string;
  heat_deflection: string;
  print_temp: string;
  bed_temp: string;
  is_available: number | boolean;
  stock_status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  price_per_gram: number;
  colors: string;
  applications: string;
  description: string;
  image_url?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  students: string;
  usn_list: string;
  guide: string;
  academic_year: string;
  technology: string;
  material: string;
  print_time_hours: number;
  dimensions: string;
  description: string;
  features: string;
  image_url: string;
  featured: number | boolean;
  created_at: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image_url: string;
  caption?: string;
  date?: string;
  featured?: number | boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

export interface SystemStats {
  total_requests: number;
  active_jobs: number;
  completed_jobs: number;
  available_materials: number;
  total_projects: number;
  printers_count: number;
  laser_scanners_count: number;
  status_distribution?: Record<string, number>;
  popular_materials?: Array<{ material: string; count: number }>;
}

export interface TechnologyCard {
  id: string;
  name: string;
  acronym: string;
  fullTitle: string;
  badge: string;
  tagline: string;
  workingPrinciple: string;
  accuracy: string;
  layerHeight: string;
  maxVolume: string;
  advantages: string[];
  applications: string[];
  materials: string[];
  equipmentModel: string;
}

