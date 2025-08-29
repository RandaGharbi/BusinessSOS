'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  UserGroup, 
  Truck, 
  MapPin, 
  Clock, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronUp, 
  ChevronDown,
  Building,
  Package,
  Shield
} from 'lucide-react'

interface SidebarProps {
  userRole: string
  userName: string
  userEmail: string
}

export default function Sidebar({ userRole, userName, userEmail }: SidebarProps) {
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(true)
  const pathname = usePathname()

  const getNavigationItems = () => {
    const baseItems = [
      {
        name: 'Tableau de bord',
        href: '/dashboard',
        icon: LayoutDashboard,
        roles: ['admin', 'chef-entreprise', 'rh', 'employe', 'client']
      }
    ]

    if (userRole === 'admin') {
      return [
        ...baseItems,
        { name: 'Entreprises', href: '/dashboard/companies', icon: Building, roles: ['admin'] },
        { name: 'Utilisateurs', href: '/dashboard/users', icon: Users, roles: ['admin'] },
        { name: 'Abonnements', href: '/dashboard/subscriptions', icon: Package, roles: ['admin'] },
        { name: 'Factures', href: '/dashboard/invoices', icon: FileText, roles: ['admin'] },
        { name: 'Signalements', href: '/dashboard/reports', icon: Shield, roles: ['admin'] }
      ]
    }

    if (userRole === 'chef-entreprise') {
      return [
        ...baseItems,
        { name: 'Clients', href: '/dashboard/clients', icon: UserGroup, roles: ['chef-entreprise'] },
        { name: 'Employés', href: '/dashboard/employees', icon: Users, roles: ['chef-entreprise'] },
        { name: 'Véhicules', href: '/dashboard/vehicles', icon: Truck, roles: ['chef-entreprise'] },
        { name: 'Logistique', href: '/dashboard/logistics', icon: Package, roles: ['chef-entreprise'] },
        { name: 'Tournées', href: '/dashboard/tours', icon: MapPin, roles: ['chef-entreprise'] },
        { name: 'Documents', href: '/dashboard/documents', icon: FileText, roles: ['chef-entreprise'] },
        { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare, roles: ['chef-entreprise'] }
      ]
    }

    if (userRole === 'rh') {
      return [
        ...baseItems,
        { name: 'Employés', href: '/dashboard/employees', icon: Users, roles: ['rh'] },
        { name: 'Pointage', href: '/dashboard/time-tracking', icon: Clock, roles: ['rh'] },
        { name: 'Documents', href: '/dashboard/documents', icon: FileText, roles: ['rh'] },
        { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare, roles: ['rh'] }
      ]
    }

    if (userRole === 'employe') {
      return [
        ...baseItems,
        { name: 'Planning', href: '/dashboard/schedule', icon: Clock, roles: ['employe'] },
        { name: 'Missions', href: '/dashboard/missions', icon: MapPin, roles: ['employe'] },
        { name: 'Pointage', href: '/dashboard/time-tracking', icon: Clock, roles: ['employe'] },
        { name: 'Documents', href: '/dashboard/documents', icon: FileText, roles: ['employe'] }
      ]
    }

    if (userRole === 'client') {
      return [
        ...baseItems,
        { name: 'Mes commandes', href: '/dashboard/orders', icon: Package, roles: ['client'] },
        { name: 'Livraisons', href: '/dashboard/deliveries', icon: Truck, roles: ['client'] },
        { name: 'Factures', href: '/dashboard/invoices', icon: FileText, roles: ['client'] },
        { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare, roles: ['client'] }
      ]
    }

    return baseItems
  }

  const navigationItems = getNavigationItems()

  const getRoleDisplayName = (role: string) => {
    const roleNames: { [key: string]: string } = {
      'admin': 'Administrateur',
      'chef-entreprise': 'Chef d\'entreprise',
      'rh': 'RH',
      'employe': 'Employé',
      'client': 'Client'
    }
    return roleNames[role] || role
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">BusinessOS</h1>
            <p className="text-sm text-gray-600">{getRoleDisplayName(userRole)}</p>
          </div>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
            {getInitials(userName)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
          </div>
        </div>
        
        <Link 
          href="/dashboard/profile" 
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mt-3"
        >
          <Users className="w-4 h-4 mr-2" />
          Mon Profil
        </Link>
      </div>

      {/* Navigation */}
      <div className="p-4">
        <div className="mb-4">
          <button
            onClick={() => setIsNavigationExpanded(!isNavigationExpanded)}
            className="flex items-center justify-between w-full text-left text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <span>NAVIGATION</span>
            {isNavigationExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {isNavigationExpanded && (
          <nav className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="space-y-2">
          <Link
            href="/dashboard/settings"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5 mr-3" />
            Paramètres
          </Link>
          <button
            className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  )
}
