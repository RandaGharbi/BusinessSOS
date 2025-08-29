'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building, Users, Truck, User, Shield, Check, ArrowLeft } from 'lucide-react'

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<string>('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    phone: ''
  })

  const roles = [
    {
      id: 'chef-entreprise',
      title: 'Chef d\'entreprise',
      description: 'Créez et gérez votre espace entreprise',
      icon: Building,
      features: [
        'Créer son espace entreprise',
        'Ajouter/modifier des employés',
        'Gérer contrats, tournées, logistique',
        'Consulter factures et abonnement'
      ]
    },
    {
      id: 'rh',
      title: 'RH (Ressources Humaines)',
      description: 'Gérez vos équipes et ressources humaines',
      icon: Users,
      features: [
        'Ajouter des employés/chauffeurs',
        'Gérer pointages, absences, documents',
        'Communiquer avec Chef et employés'
      ]
    },
    {
      id: 'employe',
      title: 'Employé / Chauffeur',
      description: 'Accédez à votre planning et missions',
      icon: Truck,
      features: [
        'Accéder à son planning',
        'Pointer ses heures (QR code/NFC)',
        'Recevoir missions et tournées',
        'Envoyer photos/signatures de livraison'
      ]
    },
    {
      id: 'client',
      title: 'Client (entreprise ou particulier)',
      description: 'Suivez vos commandes et livraisons',
      icon: User,
      features: [
        'Commander et suivre livraisons',
        'Accéder aux factures et historique',
        'Contacter livreur / entreprise'
      ]
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) {
      alert('Veuillez sélectionner un rôle')
      return
    }
    // TODO: Implémenter la logique d'inscription
    console.log('Inscription:', { ...formData, role: selectedRole })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rejoignez BusinessOS</h1>
          <p className="text-blue-600">Créez votre compte et commencez à gérer votre entreprise</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Role Selection */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Choisissez votre profil</h2>
            
            <div className="space-y-4">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedRole === role.id
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRole(role.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedRole === role.id ? 'bg-blue-600' : 'bg-gray-100'
                    }`}>
                      <role.icon className={`w-6 h-6 ${
                        selectedRole === role.id ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{role.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                      <ul className="space-y-2">
                        {role.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {selectedRole === role.id && (
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Informations personnelles</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              {(selectedRole === 'chef-entreprise' || selectedRole === 'client') && (
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'entreprise
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required={selectedRole === 'chef-entreprise'}
                  />
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!selectedRole}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
              >
                Créer mon compte
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Déjà un compte ?{' '}
                <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
