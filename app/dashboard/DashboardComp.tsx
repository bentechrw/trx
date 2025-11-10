'use client'

import { useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, CreditCard, TrendingUp, Plus, Send, MoreVertical, Eye, EyeOff, Zap, DollarSign, Clock } from 'lucide-react';
import Aside from '@/components/aside';
import Header from '@/components/Header';

export default function DashboardComp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const businessTransactions = [
    { id: 1, name: 'Customer Payment - Invoice #1234', amount: 2500.00, type: 'income', category: 'Sales', date: 'Today, 3:45 PM', icon: '💰', status: 'completed', customer: 'Acme Corp' },
    { id: 2, name: 'Supplier Payment - Tech Supplies', amount: -850.00, type: 'expense', category: 'Inventory', date: 'Today, 11:20 AM', icon: '📦', status: 'completed', vendor: 'Tech Wholesale' },
    { id: 3, name: 'Monthly Subscription - Invoice #1235', amount: 499.00, type: 'income', category: 'Recurring', date: 'Today, 9:15 AM', icon: '🔄', status: 'completed', customer: 'Beta LLC' },
    { id: 4, name: 'Office Rent Payment', amount: -3200.00, type: 'expense', category: 'Overhead', date: 'Yesterday, 2:30 PM', icon: '🏢', status: 'completed', vendor: 'Property Manager' },
    { id: 5, name: 'Freelancer Payment - Web Design', amount: -1500.00, type: 'expense', category: 'Services', date: 'Yesterday, 10:00 AM', icon: '💼', status: 'pending', vendor: 'John Design Co' },
    { id: 6, name: 'Product Sale - Invoice #1236', amount: 3750.00, type: 'income', category: 'Sales', date: 'Nov 3, 4:20 PM', icon: '🛒', status: 'completed', customer: 'Gamma Inc' },
    { id: 7, name: 'Marketing Campaign - Facebook Ads', amount: -450.00, type: 'expense', category: 'Marketing', date: 'Nov 3, 1:15 PM', icon: '📱', status: 'completed', vendor: 'Meta Ads' },
    { id: 8, name: 'Consulting Fee - Invoice #1237', amount: 1200.00, type: 'income', category: 'Services', date: 'Nov 2, 11:30 AM', icon: '🎯', status: 'completed', customer: 'Delta Corp' },
  ];
  
  const businessStats = [
    { label: 'Revenue', value: '$47,250.00', change: '+15.3%', trend: 'up', icon: TrendingUp, period: 'This month' },
    { label: 'Expenses', value: '$18,420.00', change: '-5.2%', trend: 'down', icon: ArrowUpRight, period: 'This month' },
    { label: 'Net Profit', value: '$28,830.00', change: '+22.8%', trend: 'up', icon: DollarSign, period: 'This month' },
    { label: 'Pending', value: '$12,450.00', change: '12 invoices', trend: 'neutral', icon: Clock, period: 'Outstanding' },
  ];

  const recentInvoices = [
    { id: '#1237', customer: 'Delta Corp', amount: 1200.00, status: 'paid', date: 'Nov 2' },
    { id: '#1236', customer: 'Gamma Inc', amount: 3750.00, status: 'paid', date: 'Nov 3' },
    { id: '#1235', customer: 'Beta LLC', amount: 499.00, status: 'paid', date: 'Today' },
    { id: '#1238', customer: 'Epsilon Ltd', amount: 2100.00, status: 'pending', date: 'Today' },
  ];

  const topCustomers = [
    { name: 'Acme Corp', revenue: 15240.00, transactions: 24, growth: '+12%' },
    { name: 'Beta LLC', revenue: 12450.00, transactions: 18, growth: '+8%' },
    { name: 'Gamma Inc', revenue: 9870.00, transactions: 15, growth: '+25%' },
  ];

  const filteredTransactions = filterType === 'all' 
    ? businessTransactions 
    : businessTransactions.filter(tx => tx.type === filterType);


  const quickActions = [
    { label: 'Send Money', icon: Send, color: 'from-blue-500 to-blue-600', desc: 'Transfer funds' },
    { label: 'Request', icon: ArrowDownLeft, color: 'from-purple-500 to-purple-600', desc: 'Request payment' },
    { label: 'Add Card', icon: CreditCard, color: 'from-green-500 to-green-600', desc: 'Link new card' },
    { label: 'Pay Bills', icon: Zap, color: 'from-orange-500 to-orange-600', desc: 'Quick payments' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      
      <Aside sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="lg:ml-64">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="p-6 space-y-6">
            {/* Business Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessStats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    stat.trend === 'up' ? 'from-green-500/20 to-green-600/20' : 
                    stat.trend === 'down' ? 'from-red-500/20 to-red-600/20' : 
                    'from-blue-500/20 to-blue-600/20'
                    } flex items-center justify-center`}>
                    <stat.icon className={
                        stat.trend === 'up' ? 'text-green-400' : 
                        stat.trend === 'down' ? 'text-red-400' : 
                        'text-blue-400'
                    } size={24} />
                    </div>
                    <span className={`text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-400' : 
                    stat.trend === 'down' ? 'text-red-400' : 
                    'text-slate-400'
                    }`}>
                    {stat.change}
                    </span>
                </div>
                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-xs text-slate-500">{stat.period}</p>
                </div>
            ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Transaction Section */}
            <div className="lg:col-span-2 space-y-6">
                {/* Quick Actions */}
                <div>
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {quickActions.map((action, idx) => (
                    <button
                        key={idx}
                        className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all hover:scale-105 active:scale-95 text-left"
                    >
                        <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                        <action.icon size={24} />
                        </div>
                        <p className="font-semibold mb-1">{action.label}</p>
                        <p className="text-xs text-slate-400">{action.desc}</p>
                    </button>
                    ))}
                </div>
                </div>

                {/* Recent Transactions */}
                <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Recent Transactions</h3>
                    <div className="flex items-center gap-2">
                    <div className="flex bg-slate-800/50 rounded-xl p-1 border border-slate-700">
                        <button
                        onClick={() => setFilterType('all')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            filterType === 'all' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                        >
                        All
                        </button>
                        <button
                        onClick={() => setFilterType('income')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            filterType === 'income' ? 'bg-green-500 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                        >
                        Income
                        </button>
                        <button
                        onClick={() => setFilterType('expense')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            filterType === 'expense' ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                        >
                        Expense
                        </button>
                    </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
                    {filteredTransactions.map((tx, idx) => (
                    <div 
                        key={tx.id}
                        className={`p-4 hover:bg-slate-800/50 transition-colors cursor-pointer ${
                        idx !== filteredTransactions.length - 1 ? 'border-b border-slate-800' : ''
                        }`}
                    >
                        <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl">
                            {tx.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{tx.name}</p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-sm text-slate-400">{tx.date}</p>
                                <span className="text-slate-600">•</span>
                                <span className="text-xs text-blue-400">{tx.customer || tx.vendor}</span>
                                <span className="text-slate-600">•</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                tx.status === 'completed' 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : 'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                {tx.status}
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                            <p className={`font-bold text-lg ${tx.type === 'income' ? 'text-green-400' : 'text-white'}`}>
                                {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toLocaleString()}
                            </p>
                            <p className="text-xs text-slate-400">{tx.category}</p>
                            </div>
                            <button className="text-slate-400 hover:text-white transition-colors">
                            <MoreVertical size={20} />
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
                {/* Recent Invoices */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Recent Invoices</h3>
                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                    View All
                    </button>
                </div>
                <div className="space-y-3">
                    {recentInvoices.map((invoice) => (
                    <div key={invoice.id} className="bg-slate-800/30 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-mono text-blue-400">{invoice.id}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                            invoice.status === 'paid' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                            {invoice.status}
                        </span>
                        </div>
                        <p className="text-sm font-medium mb-1">{invoice.customer}</p>
                        <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">{invoice.date}</span>
                        <span className="text-sm font-bold">${invoice.amount.toLocaleString()}</span>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Top Customers */}
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
                <h3 className="font-bold mb-4">Top Customers</h3>
                <div className="space-y-4">
                    {topCustomers.map((customer, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {customer.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{customer.name}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-xs text-slate-400">{customer.transactions} orders</p>
                            <span className="text-xs text-green-400">{customer.growth}</span>
                        </div>
                        </div>
                        <div className="text-right">
                        <p className="text-sm font-bold">${customer.revenue.toLocaleString()}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Business Account Balance */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                    <div>
                    <p className="text-blue-100 text-sm mb-2">Business Balance</p>
                    <div className="flex items-center gap-3">
                        <h2 className="text-3xl font-bold">
                        {balanceVisible ? '$54,890.67' : '••••••'}
                        </h2>
                        <button 
                        onClick={() => setBalanceVisible(!balanceVisible)}
                        className="text-white/60 hover:text-white transition-colors"
                        >
                        {balanceVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <p className="text-xs text-white/70 mb-1">Available Credit</p>
                    <p className="text-lg font-bold">$25,000.00</p>
                </div>
                </div>
            </div>
            </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-blue-400 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-30 cursor-pointer">
        <Plus size={28} />
      </button>
    </div>
  );
}