'use client';

import { useState } from 'react';
import { Search, Plus, Download, Mail, Phone, MapPin, Building, TrendingUp, TrendingDown, DollarSign, ShoppingCart, FileText, Edit, X, User, CreditCard, MoreVertical, Eye } from 'lucide-react';

export default function CustomersComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const customers = [
    {
      id: 1,
      name: 'Acme Corporation',
      email: 'contact@acmecorp.com',
      phone: '+1 (555) 123-4567',
      address: '123 Business St, New York, NY 10001',
      status: 'Active',
      avatar: '🏢',
      totalRevenue: 45240.00,
      totalOrders: 24,
      averageOrder: 1885.00,
      lastOrder: '2025-11-06',
      growth: '+15%',
      paymentMethod: 'Bank Transfer',
      taxId: 'TX-123456789',
      recentTransactions: [
        { id: 1, invoice: '#1234', amount: 2500, date: '2025-11-06', status: 'paid' },
        { id: 2, invoice: '#1220', amount: 3200, date: '2025-10-28', status: 'paid' },
        { id: 3, invoice: '#1205', amount: 1800, date: '2025-10-15', status: 'paid' }
      ]
    },
    {
      id: 2,
      name: 'Beta LLC',
      email: 'info@betallc.com',
      phone: '+1 (555) 234-5678',
      address: '456 Tech Ave, San Francisco, CA 94102',
      status: 'Active',
      avatar: '🚀',
      totalRevenue: 32450.00,
      totalOrders: 18,
      averageOrder: 1802.78,
      lastOrder: '2025-11-06',
      growth: '+8%',
      paymentMethod: 'Credit Card',
      taxId: 'TX-987654321',
      recentTransactions: [
        { id: 1, invoice: '#1235', amount: 499, date: '2025-11-06', status: 'paid' },
        { id: 2, invoice: '#1221', amount: 499, date: '2025-10-06', status: 'paid' }
      ]
    },
    {
      id: 3,
      name: 'Gamma Incorporated',
      email: 'sales@gammainc.com',
      phone: '+1 (555) 345-6789',
      address: '789 Innovation Blvd, Austin, TX 78701',
      status: 'Active',
      avatar: '💼',
      totalRevenue: 28870.00,
      totalOrders: 15,
      averageOrder: 1924.67,
      lastOrder: '2025-11-03',
      growth: '+25%',
      paymentMethod: 'PayPal',
      taxId: 'TX-456789123',
      recentTransactions: [
        { id: 1, invoice: '#1236', amount: 3750, date: '2025-11-03', status: 'paid' },
        { id: 2, invoice: '#1218', amount: 2100, date: '2025-10-20', status: 'paid' }
      ]
    },
    {
      id: 4,
      name: 'Delta Corporation',
      email: 'contact@deltacorp.com',
      phone: '+1 (555) 456-7890',
      address: '321 Commerce Dr, Chicago, IL 60601',
      status: 'Active',
      avatar: '🎯',
      totalRevenue: 18200.00,
      totalOrders: 12,
      averageOrder: 1516.67,
      lastOrder: '2025-11-02',
      growth: '+12%',
      paymentMethod: 'Bank Transfer',
      taxId: 'TX-789123456',
      recentTransactions: [
        { id: 1, invoice: '#1237', amount: 1200, date: '2025-11-02', status: 'paid' }
      ]
    },
    {
      id: 5,
      name: 'Epsilon Limited',
      email: 'hello@epsilonltd.com',
      phone: '+1 (555) 567-8901',
      address: '555 Enterprise Way, Seattle, WA 98101',
      status: 'Pending',
      avatar: '⚡',
      totalRevenue: 15600.00,
      totalOrders: 8,
      averageOrder: 1950.00,
      lastOrder: '2025-10-30',
      growth: '-5%',
      paymentMethod: 'Check',
      taxId: 'TX-321654987',
      recentTransactions: [
        { id: 1, invoice: '#1238', amount: 2100, date: '2025-10-30', status: 'pending' },
        { id: 2, invoice: '#1210', amount: 1800, date: '2025-10-10', status: 'paid' }
      ]
    },
    {
      id: 6,
      name: 'Zeta Industries',
      email: 'admin@zetaind.com',
      phone: '+1 (555) 678-9012',
      address: '888 Industry Ln, Boston, MA 02101',
      status: 'Inactive',
      avatar: '🏭',
      totalRevenue: 8450.00,
      totalOrders: 5,
      averageOrder: 1690.00,
      lastOrder: '2025-09-15',
      growth: '-12%',
      paymentMethod: 'Credit Card',
      taxId: 'TX-654987321',
      recentTransactions: [
        { id: 1, invoice: '#1185', amount: 1200, date: '2025-09-15', status: 'paid' }
      ]
    }
  ];

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    totalCustomers: customers.length,
    activeCustomers: customers.filter(c => c.status === 'Active').length,
    totalRevenue: customers.reduce((sum, c) => sum + c.totalRevenue, 0),
    averageRevenue: customers.reduce((sum, c) => sum + c.totalRevenue, 0) / customers.length
  };

  const handleViewDetails = (customer) => {
    setSelectedCustomer(customer);
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Customers</h1>
            <p className="text-slate-400">Manage your customer relationships and track revenue</p>
          </div>
          <button 
            onClick={() => setShowAddCustomer(true)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2"
          >
            <Plus size={20} />
            Add Customer
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <User className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Customers</p>
                <h3 className="text-2xl font-bold">{stats.totalCustomers}</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Active</p>
                <h3 className="text-2xl font-bold text-green-400">{stats.activeCustomers}</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="text-purple-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Revenue</p>
                <h3 className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <ShoppingCart className="text-orange-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Avg Revenue</p>
                <h3 className="text-2xl font-bold">${stats.averageRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search customers by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <div className="flex bg-slate-800/50 rounded-xl p-1 border border-slate-700">
                <button
                  onClick={() => setFilterStatus('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterStatus === 'all' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterStatus('Active')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterStatus === 'active' ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Active
                </button>
                <button
                  onClick={() => setFilterStatus('Inactive')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterStatus === 'inactive' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Inactive
                </button>
              </div>

              <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-xl transition-colors border border-slate-700">
                <Download size={18} />
                <span className="text-sm font-medium">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map((customer) => (
            <div 
              key={customer.id}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all hover:scale-105 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
                    {customer.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{customer.name}</h3>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'active' ? 'bg-green-500/20 text-green-400' :
                      customer.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {customer.status}
                    </span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors">
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Mail size={14} className="text-slate-400" />
                  <span className="truncate">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Phone size={14} className="text-slate-400" />
                  <span>{customer.phone}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-slate-800/50 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1">Total Revenue</p>
                  <p className="font-bold text-green-400">${customer.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1">Orders</p>
                  <p className="font-bold">{customer.totalOrders}</p>
                </div>
              </div>

              {/* Growth */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-400">Growth</span>
                <span className={`flex items-center gap-1 text-sm font-semibold ${
                  customer.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {customer.growth.startsWith('+') ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {customer.growth}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button 
                  onClick={() => handleViewDetails(customer)}
                  className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1"
                >
                  <Eye size={16} />
                  View
                </button>
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1">
                  <Edit size={16} />
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <User size={48} className="mx-auto mb-4 opacity-50" />
            <p>No customers found</p>
          </div>
        )}
      </div>

      {/* Customer Details Modal */}
      {showDetails && selectedCustomer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-3xl">
                  {selectedCustomer.avatar}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedCustomer.name}</h2>
                  <p className="text-slate-400 text-sm">{selectedCustomer.email}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-xl"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Revenue Banner */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-green-100 text-sm mb-2">Total Revenue</p>
                    <h3 className="text-3xl font-bold">${selectedCustomer.totalRevenue.toLocaleString()}</h3>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm mb-2">Total Orders</p>
                    <h3 className="text-3xl font-bold">{selectedCustomer.totalOrders}</h3>
                  </div>
                  <div>
                    <p className="text-green-100 text-sm mb-2">Average Order</p>
                    <h3 className="text-3xl font-bold">${selectedCustomer.averageOrder.toLocaleString()}</h3>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Building size={18} />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <Mail size={16} />
                      Email
                    </div>
                    <p className="font-medium">{selectedCustomer.email}</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <Phone size={16} />
                      Phone
                    </div>
                    <p className="font-medium">{selectedCustomer.phone}</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4 md:col-span-2">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <MapPin size={16} />
                      Address
                    </div>
                    <p className="font-medium">{selectedCustomer.address}</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <CreditCard size={16} />
                      Payment Method
                    </div>
                    <p className="font-medium">{selectedCustomer.paymentMethod}</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                      <FileText size={16} />
                      Tax ID
                    </div>
                    <p className="font-medium">{selectedCustomer.taxId}</p>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <ShoppingCart size={18} />
                  Recent Transactions
                </h3>
                <div className="space-y-3">
                  {selectedCustomer.recentTransactions.map((tx) => (
                    <div key={tx.id} className="bg-slate-800/30 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <FileText className="text-blue-400" size={18} />
                        </div>
                        <div>
                          <p className="font-medium">{tx.invoice}</p>
                          <p className="text-sm text-slate-400">{new Date(tx.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg text-green-400">${tx.amount.toLocaleString()}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          tx.status === 'paid' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {tx.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <FileText size={18} />
                  View All Invoices
                </button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <Plus size={18} />
                  New Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {showAddCustomer && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold">Add New Customer</h2>
                <p className="text-slate-400 text-sm">Create a new customer profile</p>
              </div>
              <button 
                onClick={() => setShowAddCustomer(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-xl"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Company Name *</label>
                <input
                  type="text"
                  placeholder="Acme Corporation"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Email *</label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Phone *</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Address</label>
                <input
                  type="text"
                  placeholder="123 Business St, City, State ZIP"
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Tax ID</label>
                  <input
                    type="text"
                    placeholder="TX-123456789"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Payment Method</label>
                  <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
                    <option>Bank Transfer</option>
                    <option>Credit Card</option>
                    <option>PayPal</option>
                    <option>Check</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Notes</label>
                <textarea
                  placeholder="Additional information about the customer..."
                  rows={3}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowAddCustomer(false)}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    console.log('Customer added');
                    setShowAddCustomer(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-[1.02] py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Add Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}