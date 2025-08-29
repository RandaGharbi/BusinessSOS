'use client'

import { 
  DollarSign, 
  Users, 
  Truck, 
  Clock, 
  TrendingUp,
  Calendar,
  Plus,
  BarChart3,
  UserPlus,
  Route,
  FileText,
  AlertCircle
} from 'lucide-react'

export default function DashboardPage() {
  // TODO: Récupérer ces données depuis l'API
  const metrics = [
    {
      title: 'Chiffre d\'affaires',
      value: '€0',
      change: '0%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Clients actifs',
      value: '0',
      change: '0%',
      changeType: 'positive',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Tournées du jour',
      value: '0',
      change: '0%',
      changeType: 'positive',
      icon: Truck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Heures travaillées',
      value: '0h',
      change: '0%',
      changeType: 'positive',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ]

  const quickActions = [
    {
      title: 'Nouveau client',
      icon: UserPlus,
      href: '/dashboard/clients/new',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Créer tournée',
      icon: Route,
      href: '/dashboard/tours/new',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Générer facture',
      icon: FileText,
      href: '/dashboard/invoices/new',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Signaler incident',
      icon: AlertCircle,
      href: '/dashboard/incidents/new',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Bonjour, Admin Demo 👑
            </h1>
            <p className="text-gray-600">
              Tableau de bord administrateur - Vue d'ensemble complète
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <BarChart3 className="w-4 h-4 mr-2" />
              Rapport
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nouvelle action
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</p>
                <div className="flex items-center">
                  <TrendingUp className={`w-4 h-4 mr-1 ${
                    metric.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                  }`} />
                  <span className={`text-sm ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className={`w-16 h-16 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
            <a href="/dashboard/activity" className="text-sm text-blue-600 hover:text-blue-700">
              Voir tout
            </a>
          </div>
          
          <div className="text-center py-12">
            <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">Aucune activité récente</p>
            <p className="text-gray-400">Les activités apparaîtront ici</p>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Tâches à venir</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">Aucune tâche prévue</p>
            <p className="text-gray-400">Vos tâches apparaîtront ici</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Actions rapides</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="group p-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all text-center"
            >
              <div className={`w-12 h-12 ${action.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {action.title}
              </p>
            </a>
          ))}
        </div>
      </div>


    </div>
  )
}
