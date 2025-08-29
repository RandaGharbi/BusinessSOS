'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  // TODO: Récupérer ces informations depuis l'authentification
  const mockUser = {
    name: 'Admin Demo',
    email: 'admin@businessos.com',
    role: 'admin'
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0 transition-transform duration-300 ease-in-out`}>
        <Sidebar 
          userRole={mockUser.role}
          userName={mockUser.name}
          userEmail={mockUser.email}
        />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <Header 
          userName={mockUser.name}
          userRole={mockUser.role}
          onToggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
