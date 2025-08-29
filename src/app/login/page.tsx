'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Building, Mail, Lock, User } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const demoAccounts = [
    { role: 'Admin Demo', email: 'admin@businessos.com', password: 'demo123' },
    { role: 'RH Demo', email: 'rh@businessos.com', password: 'demo123' },
    { role: 'Employé Demo', email: 'employee@businessos.com', password: 'demo123' },
    { role: 'Artisan Demo', email: 'artisan@businessos.com', password: 'demo123' },
    { role: 'Client Demo', email: 'client@businessos.com', password: 'demo123' }
  ]

  const handleDemoLogin = (demoAccount: typeof demoAccounts[0]) => {
    setEmail(demoAccount.email)
    setPassword(demoAccount.password)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter la logique de connexion
    console.log('Connexion:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">BusinessOS</h1>
          <p className="text-blue-600">Connectez-vous à votre espace</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
            >
              <span>→ Se connecter</span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              href="/register" 
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-1"
            >
              <User className="w-4 h-4" />
              <span>+ Créer un compte</span>
            </Link>
          </div>
        </div>

        {/* Demo Accounts */}
        <div className="bg-blue-900 rounded-2xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-4 text-center">Comptes de démonstration</h3>
          <div className="space-y-3">
            {demoAccounts.map((account) => (
              <button
                key={account.role}
                onClick={() => handleDemoLogin(account)}
                className="w-full bg-blue-800 hover:bg-blue-700 text-blue-100 hover:text-white py-2 px-4 rounded-lg transition-colors text-sm"
              >
                {account.role}
              </button>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}
