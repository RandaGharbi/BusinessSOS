import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Logique de connexion à implémenter
    console.log('Tentative de connexion:', { email, password })
    setIsLoggedIn(true)
  }

  const handleDemoLogin = (role: string) => {
    // Logique de connexion avec compte de démonstration
    console.log('Connexion avec compte:', role)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  if (isLoggedIn) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/logistics" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/clients" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/vehicles" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/tours" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/time" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/documents" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/employees" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/messages" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/users" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-business-blue-900 via-business-blue-800 to-indigo-800 flex flex-col items-center justify-center p-4">
      {/* Logo et titre principal */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-business-blue-500 rounded-xl mb-4 shadow-lg shadow-business-blue-500/30">
          <div className="w-8 h-8 bg-white rounded-md relative shadow-sm">
            <div className="absolute top-1 right-1 w-2 h-2 bg-business-blue-500 rounded-sm"></div>
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">BusinessSOS</h1>
        <p className="text-lg text-slate-200 font-normal">Gestion d'entreprise simplifiée et efficace</p>
      </div>

      {/* Formulaire de connexion */}
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md mb-6">
        <div>
          {/* Champ Email */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative">
              <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3.5 border border-gray-300 rounded-xl text-base transition-all duration-200 bg-white focus:outline-none focus:border-business-blue-500 focus:ring-4 focus:ring-business-blue-500/10 placeholder:text-gray-400"
                placeholder="votre@email.com"
              />
            </div>
          </div>

          {/* Champ Mot de passe */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mot de passe</label>
            <div className="relative">
              <svg className="absolute top-1/2 left-3 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-12 py-3.5 border border-gray-300 rounded-xl text-base transition-all duration-200 bg-white focus:outline-none focus:border-business-blue-500 focus:ring-4 focus:ring-business-blue-500/10 placeholder:text-gray-400"
                placeholder="********"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-none border-none text-gray-400 cursor-pointer p-1 rounded-md transition-all duration-200 hover:text-gray-600 hover:bg-gray-100"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  {showPassword ? (
                    <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  ) : (
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Bouton de connexion */}
          <button
            onClick={handleLogin}
            className="w-full bg-business-blue-500 text-white py-3.5 px-4 border-none rounded-xl text-base font-semibold cursor-pointer transition-all duration-200 flex items-center center gap-2 shadow-lg shadow-business-blue-500/40 hover:bg-business-blue-600 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-business-blue-500/50 focus:outline-none focus:ring-4 focus:ring-business-blue-500/20 active:translate-y-0"
          >
            <span>Se connecter</span>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Lien Créer un compte */}
          <div className="text-center mt-4">
            <a href="#" className="text-gray-500 no-underline text-sm font-medium inline-flex items-center gap-1 p-2 rounded-lg transition-all duration-200 hover:text-gray-700 hover:bg-gray-50">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Créer un compte</span>
            </a>
          </div>
        </div>
      </div>

      {/* Comptes de démonstration */}
      <div className="bg-business-blue-800 rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold text-white mb-4 text-center">
          Comptes de démonstration
        </h3>
        <div className="flex flex-col gap-3">
          {['Admin Demo', 'RH Demo', 'Employé Demo', 'Artisan Demo', 'Client Demo'].map((role) => (
            <button
              key={role}
              onClick={() => handleDemoLogin(role)}
              className="w-full bg-business-blue-500 text-white py-3.5 px-4 border-none rounded-xl font-semibold cursor-pointer transition-all duration-200 text-center hover:bg-business-blue-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0"
            >
              {role}
            </button>
          ))}
        </div>
      </div>


    </div>
  )
}

export default App
