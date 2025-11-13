'use client'

import { useState } from 'react';
import { Search, Filter, Download, ArrowUpRight, ArrowDownLeft, Eye, Trash2, Edit, FileText, Package, DollarSign, X, CheckCircle, Clock } from 'lucide-react';

export default function TransactionsComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [dateRange, setDateRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const allTransactions = [
    { 
      id: 1,
      name: 'Customer Payment - Invoice #1234', 
      amount: 2500.00,
      type: 'income', 
      category: 'Sales', 
      date: '2025-11-06', 
      time: '3:45 PM',
      icon: '💰', 
      status: 'completed', 
      customer: 'Acme Corp',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: '#1234',
      products: [
        { name: 'Consulting Service', quantity: 10, unitPrice: 250, total: 2500 }
      ]
    },
    { 
      id: 2, 
      name: 'Supplier Payment - Tech Supplies', 
      amount: -850.00, 
      type: 'expense', 
      category: 'Inventory', 
      date: '2025-11-06', 
      time: '11:20 AM',
      icon: '📦', 
      status: 'completed', 
      vendor: 'Tech Wholesale',
      paymentMethod: 'Credit Card',
      invoiceNumber: '#SUP-5678'
    },
    { 
      id: 3, 
      name: 'Monthly Subscription - Invoice #1235', 
      amount: 499.00, 
      type: 'income', 
      category: 'Recurring', 
      date: '2025-11-06', 
      time: '9:15 AM',
      icon: '🔄', 
      status: 'completed', 
      customer: 'Beta LLC',
      paymentMethod: 'PayPal',
      invoiceNumber: '#1235'
    },
    { 
      id: 4, 
      name: 'Office Rent Payment', 
      amount: -3200.00, 
      type: 'expense', 
      category: 'Overhead', 
      date: '2025-11-05', 
      time: '2:30 PM',
      icon: '🏢', 
      status: 'completed', 
      vendor: 'Property Manager',
      paymentMethod: 'Check',
      invoiceNumber: '#RENT-NOV'
    },
    { 
      id: 5, 
      name: 'Freelancer Payment - Web Design', 
      amount: -1500.00, 
      type: 'expense', 
      category: 'Services', 
      date: '2025-11-05', 
      time: '10:00 AM',
      icon: '💼', 
      status: 'pending', 
      vendor: 'John Design Co',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: '#FREE-789'
    },
    { 
      id: 6, 
      name: 'Product Sale - Invoice #1236', 
      amount: 3750.00, 
      type: 'income', 
      category: 'Sales', 
      date: '2025-11-03', 
      time: '4:20 PM',
      icon: '🛒', 
      status: 'completed', 
      customer: 'Gamma Inc',
      paymentMethod: 'Credit Card',
      invoiceNumber: '#1236',
      products: [
        { name: 'Product A', quantity: 15, unitPrice: 150, total: 2250 },
        { name: 'Product B', quantity: 10, unitPrice: 150, total: 1500 }
      ]
    },
    { 
      id: 7, 
      name: 'Marketing Campaign - Facebook Ads', 
      amount: -450.00, 
      type: 'expense', 
      category: 'Marketing', 
      date: '2025-11-03', 
      time: '1:15 PM',
      icon: '📱', 
      status: 'completed', 
      vendor: 'Meta Ads',
      paymentMethod: 'Credit Card',
      invoiceNumber: '#META-456'
    },
    { 
      id: 8, 
      name: 'Consulting Fee - Invoice #1237', 
      amount: 1200.00, 
      type: 'income', 
      category: 'Services', 
      date: '2025-11-02', 
      time: '11:30 AM',
      icon: '🎯', 
      status: 'completed', 
      customer: 'Delta Corp',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: '#1237'
    },
    { 
      id: 9, 
      name: 'Software Subscription - Adobe', 
      amount: -79.99, 
      type: 'expense', 
      category: 'Services', 
      date: '2025-11-01', 
      time: '8:00 AM',
      icon: '💻', 
      status: 'completed', 
      vendor: 'Adobe Inc',
      paymentMethod: 'Credit Card',
      invoiceNumber: '#ADOBE-2025'
    },
    { 
      id: 10, 
      name: 'Client Payment Pending - Invoice #1238', 
      amount: 2100.00, 
      type: 'income', 
      category: 'Sales', 
      date: '2025-10-30', 
      time: '3:00 PM',
      icon: '⏳', 
      status: 'pending', 
      customer: 'Epsilon Ltd',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: '#1238'
    },
  ];

  const categories = ['All', 'Sales', 'Services', 'Recurring', 'Inventory', 'Overhead', 'Marketing'];

  const filteredTransactions = allTransactions.filter(tx => {
    const matchesSearch = tx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (tx.customer && tx.customer.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (tx.vendor && tx.vendor.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         tx.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || tx.type === filterType;
    const matchesStatus = filterStatus === 'all' || tx.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || tx.category === filterCategory;
    
    return matchesSearch && matchesType && matchesStatus && matchesCategory;
  });

  const totalIncome = filteredTransactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);
  
  const totalExpenses = filteredTransactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  const netAmount = totalIncome - totalExpenses;

  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Transactions</h1>
          <p className="text-slate-400">Track and manage all your business transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                <ArrowDownLeft className="text-green-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Income</p>
                <h3 className="text-2xl font-bold text-green-400">${totalIncome.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                <ArrowUpRight className="text-red-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Expenses</p>
                <h3 className="text-2xl font-bold text-red-400">${totalExpenses.toLocaleString()}</h3>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <DollarSign className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Net Amount</p>
                <h3 className={`text-2xl font-bold ${netAmount >= 0 ? 'text-blue-400' : 'text-red-400'}`}>
                  ${Math.abs(netAmount).toLocaleString()}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, customer, invoice..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex gap-3 flex-wrap">
              <div className="flex bg-slate-800/50 rounded-xl p-1 border border-slate-700">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === 'all' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType('income')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === 'income' ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Income
                </button>
                <button
                  onClick={() => setFilterType('expense')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === 'expense' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Expenses
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-xl transition-colors border border-slate-700"
              >
                <Filter size={18} />
                <span className="text-sm font-medium">Filters</span>
              </button>

              <button className="flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-xl transition-colors border border-slate-700">
                <Download size={18} />
                <span className="text-sm font-medium">Export</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="grid md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-800 animate-[slideDown_0.3s_ease-out]">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-2 px-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Category</label>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-2 px-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Date Range</label>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-2 px-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Transactions Table */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50 border-b border-slate-800">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Transaction</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">Status</th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-300">Amount</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-slate-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-slate-400">
                      No transactions found
                    </td>
                  </tr>
                ) : (
                  filteredTransactions.map((tx, idx) => (
                    <tr 
                      key={tx.id}
                      className={`hover:bg-slate-800/50 transition-colors ${
                        idx !== filteredTransactions.length - 1 ? 'border-b border-slate-800' : ''
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                            {tx.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium truncate">{tx.name}</p>
                            <p className="text-sm text-blue-400 truncate">
                              {tx.customer || tx.vendor}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-sm">{new Date(tx.date).toLocaleDateString()}</p>
                        <p className="text-xs text-slate-400">{tx.time}</p>
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                          {tx.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          tx.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {tx.status === 'completed' ? <CheckCircle size={12} /> : <Clock size={12} />}
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <p className={`font-bold text-lg ${tx.type === 'income' ? 'text-green-400' : 'text-white'}`}>
                          {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toLocaleString()}
                        </p>
                        <p className="text-xs text-slate-400">{tx.paymentMethod}</p>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => handleViewDetails(tx)}
                            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-blue-400 hover:text-blue-300"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          <button 
                            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button 
                            className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-red-400 hover:text-red-300"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {filteredTransactions.length > 0 && (
            <div className="bg-slate-800/30 border-t border-slate-800 px-6 py-4 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                Showing {filteredTransactions.length} of {allTransactions.length} transactions
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors">
                  1
                </button>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showDetails && selectedTransaction && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold">Transaction Details</h2>
                <p className="text-slate-400 text-sm">{selectedTransaction.invoiceNumber}</p>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-xl"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className={`bg-gradient-to-r ${
                selectedTransaction.type === 'income' 
                  ? 'from-green-600 to-green-500' 
                  : 'from-red-600 to-red-500'
              } rounded-2xl p-6 text-center`}>
                <p className="text-white/80 text-sm mb-2">Transaction Amount</p>
                <h3 className="text-5xl font-bold mb-2">
                  {selectedTransaction.type === 'income' ? '+' : '-'}${Math.abs(selectedTransaction.amount).toLocaleString()}
                </h3>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/20`}>
                  {selectedTransaction.status === 'completed' ? <CheckCircle size={12} /> : <Clock size={12} />}
                  {selectedTransaction.status}
                </span>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Date & Time</p>
                  <p className="font-medium">{new Date(selectedTransaction.date).toLocaleDateString()}</p>
                  <p className="text-sm text-slate-300">{selectedTransaction.time}</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Category</p>
                  <p className="font-medium">{selectedTransaction.category}</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">
                    {selectedTransaction.type === 'income' ? 'Customer' : 'Vendor'}
                  </p>
                  <p className="font-medium">{selectedTransaction.customer || selectedTransaction.vendor}</p>
                </div>
                <div className="bg-slate-800/30 rounded-xl p-4">
                  <p className="text-slate-400 text-sm mb-1">Payment Method</p>
                  <p className="font-medium">{selectedTransaction.paymentMethod}</p>
                </div>
              </div>

              {/* Products Section */}
              {selectedTransaction.products && selectedTransaction.products.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Package size={18} />
                    Products/Services
                  </h4>
                  <div className="space-y-2">
                    {selectedTransaction.products.map((product, idx) => (
                      <div key={idx} className="bg-slate-800/30 rounded-xl p-4 flex items-center justify-between">
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-slate-400">
                            {product.quantity} × ${product.unitPrice.toLocaleString()}
                          </p>
                        </div>
                        <p className="text-lg font-bold text-green-400">
                          ${product.total.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              <div className="bg-slate-800/30 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-2">Description</p>
                <p className="font-medium">{selectedTransaction.name}</p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <FileText size={18} />
                  Download Invoice
                </button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  <Edit size={18} />
                  Edit Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}