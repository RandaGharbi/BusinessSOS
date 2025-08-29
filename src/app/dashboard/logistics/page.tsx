'use client'

import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Trash2, 
  BarChart3,
  CheckCircle,
  AlertTriangle,
  XCircle,
  TrendingUp
} from 'lucide-react'

import { Product, LogisticsMetric } from '../../../types'

export default function LogisticsPage() {
  // TODO: Récupérer ces données depuis l'API
  const products: Product[] = [
    {
      id: 1,
      name: 'Cartons d\'emballage 40x30x20',
      brand: 'Emballages Pro',
      sku: 'EMB-001',
      category: 'Emballage',
      stock: 150,
      maxStock: 300,
      price: 2.50,
      location: 'A1-B2',
      status: 'En stock',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      name: 'Papier bulle 100m',
      brand: 'Protection Plus',
      sku: 'PROT-002',
      category: 'Protection',
      stock: 25,
      maxStock: 100,
      price: 15.00,
      location: 'B2-C1',
      status: 'Stock faible',
      statusColor: 'bg-orange-100 text-orange-800'
    },
    {
      id: 3,
      name: 'Étiquettes d\'expédition',
      brand: 'Label Express',
      sku: 'ETI-003',
      category: 'Étiquetage',
      stock: 0,
      maxStock: 500,
      price: 0.10,
      location: 'C1-D1',
      status: 'Rupture',
      statusColor: 'bg-red-100 text-red-800'
    },
    {
      id: 4,
      name: 'Sangles d\'arrimage 5m',
      brand: 'Sécurité Transport',
      sku: 'SEC-004',
      category: 'Sécurité',
      stock: 80,
      maxStock: 100,
      price: 12.00,
      location: 'D1-E1',
      status: 'En stock',
      statusColor: 'bg-green-100 text-green-800'
    }
  ]

  const metrics: LogisticsMetric[] = [
    {
      title: 'Total produits',
      value: '4',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'En stock',
      value: '2',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Stock faible',
      value: '1',
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Ruptures',
      value: '1',
      icon: XCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'Valeur stock',
      value: '€1710',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const getStockPercentage = (stock: number, maxStock: number) => {
    return (stock / maxStock) * 100
  }

  const getStockColor = (percentage: number) => {
    if (percentage >= 50) return 'bg-green-500'
    if (percentage >= 25) return 'bg-orange-500'
    return 'bg-red-500'
  }

  return (
    <div className="space-y-6">
      {/* Header simplifié */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Gestion Logistique</h1>
            <p className="text-gray-600">Gérez vos stocks et produits</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              <BarChart3 className="w-4 h-4 mr-2" />
              Rapport
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Nouveau Produit
            </button>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Tous les statuts</option>
            <option>En stock</option>
            <option>Stock faible</option>
            <option>Rupture</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Toutes les catégories</option>
            <option>Emballage</option>
            <option>Protection</option>
            <option>Étiquetage</option>
            <option>Sécurité</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRODUIT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CATÉGORIE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STOCK
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRIX
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  EMPLACEMENT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => {
                const stockPercentage = getStockPercentage(product.stock, product.maxStock)
                return (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                          <Package className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.brand}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.sku}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 mb-1">
                        {product.stock} / {product.maxStock} pièces
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getStockColor(stockPercentage)}`}
                          style={{ width: `${stockPercentage}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      €{product.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${product.statusColor}`}>
                        {product.status === 'En stock' && <CheckCircle className="w-3 h-3 mr-1" />}
                        {product.status === 'Stock faible' && <AlertTriangle className="w-3 h-3 mr-1" />}
                        {product.status === 'Rupture' && <XCircle className="w-3 h-3 mr-1" />}
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
