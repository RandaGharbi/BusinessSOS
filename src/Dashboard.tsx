import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import LogisticsPage from './app/dashboard/logistics/page'
import { 
  DashboardProps, 
  Metric, 
  Activity, 
  Task, 
  ActiveTab 
} from './types'



function Dashboard({ onLogout }: DashboardProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('dashboard')

  // Synchroniser l'onglet actif avec l'URL
  useEffect(() => {
    const path = location.pathname === '/' ? 'dashboard' : location.pathname.slice(1)
    setActiveTab(path)
  }, [location])

  // Fonction pour changer d'onglet et naviguer
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === 'dashboard') {
      navigate('/')
    } else {
      navigate(`/${tab}`)
    }
  }

  const [metrics] = useState<Metric[]>([
    {
      id: 'revenue',
      label: 'Chiffre d\'affaires',
      value: '€2,450',
      change: 12.5,
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 'clients',
      label: 'Clients actifs',
      value: '24',
      change: 8.2,
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 'tours',
      label: 'Tournées du jour',
      value: '7',
      change: 15.3,
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      id: 'hours',
      label: 'Heures travaillées',
      value: '156h',
      change: 5.7,
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ])

  const [recentActivities] = useState<Activity[]>([
    { id: 1, type: 'client', message: 'Nouveau client "TechCorp" ajouté', time: 'Il y a 5 min', user: 'Admin Demo' },
    { id: 2, type: 'tour', message: 'Tournée #T-2024-001 planifiée', time: 'Il y a 15 min', user: 'Admin Demo' },
    { id: 3, type: 'invoice', message: 'Facture #F-2024-015 générée', time: 'Il y a 1h', user: 'Admin Demo' },
    { id: 4, type: 'employee', message: 'Employé "Jean Dupont" a pointé', time: 'Il y a 2h', user: 'Système' }
  ])

  const [upcomingTasks] = useState<Task[]>([
    { id: 1, title: 'Réviser les contrats clients', priority: 'high', dueDate: 'Aujourd\'hui', status: 'pending' },
    { id: 2, title: 'Planifier les tournées de la semaine', priority: 'medium', dueDate: 'Demain', status: 'in-progress' },
    { id: 3, title: 'Générer les rapports mensuels', priority: 'low', dueDate: 'Vendredi', status: 'pending' }
  ])



  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'in-progress': return 'text-blue-600 bg-blue-100'
      case 'pending': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'client': return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
      case 'tour': return 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
      case 'invoice': return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
      case 'employee': return 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
      default: return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Header du sidebar - Affiché seulement sur le tableau de bord principal */}
        {activeTab === 'dashboard' && (
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-business-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">BusinessSOS</h1>
                <p className="text-sm text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        )}

        {/* Informations utilisateur */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-business-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              AD
            </div>
            <div>
              <p className="font-medium text-gray-900">Admin Demo</p>
              <p className="text-sm text-gray-500">admin@businessos.com</p>
            </div>
          </div>
          <a href="#" className="text-sm text-business-blue-600 hover:text-business-blue-700 flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Mon Profil</span>
          </a>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
              NAVIGATION
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            <nav className="space-y-2">
              <button
                onClick={() => handleTabChange('dashboard')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Tableau de bord</span>
              </button>
              
              <button
                onClick={() => handleTabChange('users')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'users' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                <span>Utilisateurs inscrits</span>
              </button>
              
              <button
                onClick={() => handleTabChange('clients')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'clients' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Clients</span>
              </button>
              
              <button
                onClick={() => handleTabChange('vehicles')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'vehicles' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Véhicules</span>
              </button>
              
              <button
                onClick={() => handleTabChange('logistics')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'logistics' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span>Logistique</span>
              </button>
              
              <button
                onClick={() => handleTabChange('tours')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'tours' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Tournées</span>
              </button>
              
              <button
                onClick={() => handleTabChange('time')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'time' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pointage</span>
              </button>
              
              <button
                onClick={() => handleTabChange('documents')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'documents' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Documents</span>
              </button>
              
              <button
                onClick={() => handleTabChange('employees')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'employees' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Employés</span>
              </button>
              
              <button
                onClick={() => handleTabChange('messages')}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === 'messages' 
                    ? 'text-business-blue-600 bg-business-blue-50' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Messages</span>
              </button>
            </nav>
          </div>

          {/* Liens de bas */}
          <div className="space-y-2">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Paramètres</span>
            </a>
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg text-left"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 overflow-auto">
        {/* Header - Affiché seulement sur le tableau de bord principal */}
        {activeTab === 'dashboard' && (
          <div className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Bonjour, Admin Demo 👑
              </h1>
              <p className="text-gray-600 mt-1">
                Tableau de bord administrateur - Vue d'ensemble complète
              </p>
            </div>
          </div>
        )}

        {/* Contenu du dashboard */}
        <div className="p-8">
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Métriques clés */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric) => (
                  <div key={metric.id} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                        <p className={`text-sm flex items-center ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          <span className="mr-1">{metric.change >= 0 ? '+' : ''}{metric.change}%</span>
                          <svg className={`w-4 h-4 ${metric.change >= 0 ? 'rotate-0' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        </p>
                      </div>
                      <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                        <svg className={`w-6 h-6 ${metric.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d={metric.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activité et tâches */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Activité récente */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Activité récente</h3>
                    <a href="#" className="text-sm text-business-blue-600 hover:text-business-blue-700">Voir tout</a>
                  </div>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                        <div className="w-8 h-8 bg-business-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-business-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d={getActivityIcon(activity.type)} />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-500">{activity.time}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">{activity.user}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tâches à venir */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Tâches à venir</h3>
                    <a href="#" className="text-sm text-business-blue-600 hover:text-business-blue-700">Voir tout</a>
                  </div>
                  <div className="space-y-3">
                    {upcomingTasks.map((task) => (
                      <div key={task.id} className="p-3 border border-gray-200 rounded-lg hover:border-business-blue-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{task.title}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(task.priority)}`}>
                            {task.priority === 'high' ? 'Élevée' : task.priority === 'medium' ? 'Moyenne' : 'Faible'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{task.dueDate}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(task.status)}`}>
                            {task.status === 'completed' ? 'Terminée' : task.status === 'in-progress' ? 'En cours' : 'En attente'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:border-business-blue-300 hover:bg-business-blue-50 transition-colors duration-200 text-left group">
                    <div className="w-10 h-10 bg-business-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-business-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-business-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">Nouveau client</p>
                    <p className="text-sm text-gray-500 mt-1">Ajouter un nouveau client</p>
                  </button>

                  <button className="p-4 border border-gray-200 rounded-lg hover:border-business-blue-300 hover:bg-business-blue-50 transition-colors duration-200 text-left group">
                    <div className="w-10 h-10 bg-business-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-business-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-business-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">Créer tournée</p>
                    <p className="text-sm text-gray-500 mt-1">Planifier une nouvelle tournée</p>
                  </button>

                  <button className="p-4 border border-gray-200 rounded-lg hover:border-business-blue-300 hover:bg-business-blue-50 transition-colors duration-200 text-left group">
                    <div className="w-10 h-10 bg-business-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-business-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-business-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">Générer facture</p>
                    <p className="text-sm text-gray-500 mt-1">Créer une nouvelle facture</p>
                  </button>

                  <button className="p-4 border border-gray-200 rounded-lg hover:border-business-blue-300 hover:bg-business-blue-50 transition-colors duration-200 text-left group">
                    <div className="w-10 h-10 bg-business-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-business-blue-200 transition-colors">
                      <svg className="w-5 h-5 text-business-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900">Signaler incident</p>
                    <p className="text-sm text-gray-500 mt-1">Déclarer un problème</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Page Logistique */}
          {activeTab === 'logistics' && <LogisticsPage />}

          {/* Autres pages à venir */}
          {activeTab !== 'dashboard' && activeTab !== 'logistics' && (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Page en cours de développement</h3>
                <p className="text-gray-500">La page "{activeTab}" sera bientôt disponible</p>
              </div>
            </div>
          )}
        </div>
      </div>


    </div>
  )
}

export default Dashboard
