// Types pour le Dashboard
export interface DashboardProps {
  onLogout: () => void
}

export interface Metric {
  id: string
  label: string
  value: string
  change: number
  icon: string
  color: string
  bgColor: string
}

export interface Activity {
  id: string
  type: string
  message: string
  time: string
  user: string
}

export interface Task {
  id: string
  title: string
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  status: 'pending' | 'in-progress' | 'completed'
}

// Types pour la page Logistique
export interface Product {
  id: number
  name: string
  brand: string
  sku: string
  category: string
  stock: number
  maxStock: number
  price: number
  location: string
  status: string
  statusColor: string
}

export interface LogisticsMetric {
  title: string
  value: string
  icon: any // Pour les icônes Lucide
  color: string
  bgColor: string
}

// Types pour les notifications (si on les remet plus tard)
export interface Notification {
  id: number
  message: string
  time: string
  type: 'info' | 'success' | 'warning' | 'error'
}

// Types pour la navigation
export type ActiveTab = 
  | 'dashboard'
  | 'users'
  | 'clients'
  | 'vehicles'
  | 'logistics'
  | 'tours'
  | 'time'
  | 'documents'
  | 'employees'
  | 'messages'
