'use client'

import { useState } from 'react';
import { Home, ArrowUpRight, ArrowDownLeft, CreditCard, TrendingUp, Settings, Bell, Search, Plus, Send, MoreVertical, Eye, EyeOff, Menu, X, LogOut, HelpCircle, Wallet, Zap, ChevronDown } from 'lucide-react';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const recentTransactions = [
    { id: 1, name: 'Netflix Subscription', amount: -15.99, type: 'expense', category: 'Entertainment', date: 'Today, 2:30 PM', icon: '🎬', status: 'completed' },
    { id: 2, name: 'Salary Deposit', amount: 3500.00, type: 'income', category: 'Salary', date: 'Today, 9:00 AM', icon: '💼', status: 'completed' },
    { id: 3, name: 'Grocery Store', amount: -87.50, type: 'expense', category: 'Food', date: 'Yesterday, 6:45 PM', icon: '🛒', status: 'completed' },
    { id: 4, name: 'Freelance Project', amount: 850.00, type: 'income', category: 'Business', date: 'Nov 2, 3:20 PM', icon: '💻', status: 'completed' },
    { id: 5, name: 'Electric Bill', amount: -124.30, type: 'expense', category: 'Utilities', date: 'Nov 1, 10:15 AM', icon: '⚡', status: 'pending' },
    { id: 6, name: 'Amazon Purchase', amount: -45.99, type: 'expense', category: 'Shopping', date: 'Oct 30, 4:15 PM', icon: '📦', status: 'completed' },
  ];

  const quickActions = [
    { label: 'Send Money', icon: Send, color: 'from-blue-500 to-blue-600', desc: 'Transfer funds' },
    { label: 'Request', icon: ArrowDownLeft, color: 'from-purple-500 to-purple-600', desc: 'Request payment' },
    { label: 'Add Card', icon: CreditCard, color: 'from-green-500 to-green-600', desc: 'Link new card' },
    { label: 'Pay Bills', icon: Zap, color: 'from-orange-500 to-orange-600', desc: 'Quick payments' },
  ];

  const cards = [
    { type: 'Visa', last4: '4532', balance: 8234.50, color: 'from-blue-600 to-purple-600' },
    { type: 'Mastercard', last4: '8976', balance: 4309.17, color: 'from-slate-700 to-slate-800' },
  ];

  const stats = [
    { label: 'Income', value: '$4,350.00', change: '+12.5%', trend: 'up', icon: ArrowDownLeft },
    { label: 'Expenses', value: '$1,227.79', change: '-8.2%', trend: 'down', icon: ArrowUpRight },
    { label: 'Savings', value: '$12,543.67', change: '+23.1%', trend: 'up', icon: TrendingUp },
  ];

  const menuItems = [
    { label: 'Overview', icon: Home, id: 'overview' },
    { label: 'Transactions', icon: ArrowUpRight, id: 'transactions' },
    { label: 'Cards', icon: CreditCard, id: 'cards' },
    { label: 'Analytics', icon: TrendingUp, id: 'analytics' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 w-64 z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-bold text-xl">
              P
            </div>
            <span className="text-xl font-bold">PayFlow</span>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Upgrade Banner */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-4 mb-4">
            <h4 className="font-semibold mb-2">Upgrade to Pro</h4>
            <p className="text-sm text-slate-300 mb-3">Get unlimited transactions and advanced analytics</p>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform">
              Upgrade Now
            </button>
          </div>

          {/* Bottom Menu */}
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all">
              <Settings size={20} />
              <span className="font-medium">Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all">
              <HelpCircle size={20} />
              <span className="font-medium">Help</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-slate-800/50 transition-all">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-30">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <h1 className="text-2xl font-bold">Good Evening, Alex</h1>
                <p className="text-slate-400 text-sm">Thursday, November 06, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center gap-2 bg-slate-800/50 rounded-xl px-4 py-2 border border-slate-700">
                <Search size={18} className="text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search transactions..." 
                  className="bg-transparent outline-none text-sm w-64 placeholder-slate-500"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-slate-800 rounded-xl transition-colors">
                <Bell size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Profile */}
              <button className="flex items-center gap-3 hover:bg-slate-800 rounded-xl p-2 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">
                  A
                </div>
                <ChevronDown size={18} className="hidden md:block text-slate-400" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Balance Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${card.color} rounded-3xl p-6 shadow-2xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-white/70 text-sm mb-2">Current Balance</p>
                      <div className="flex items-center gap-3">
                        <h2 className="text-4xl font-bold">
                          {balanceVisible ? `$${card.balance.toLocaleString()}` : '••••••'}
                        </h2>
                        <button 
                          onClick={() => setBalanceVisible(!balanceVisible)}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          {balanceVisible ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                      </div>
                    </div>
                    <Wallet className="text-white/30" size={40} />
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/70 text-xs mb-1">Card Number</p>
                      <p className="text-lg font-mono">•••• {card.last4}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/70 text-xs mb-1">{card.type}</p>
                      <p className="text-sm font-semibold">12/28</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.trend === 'up' ? 'from-green-500/20 to-green-600/20' : 'from-red-500/20 to-red-600/20'} flex items-center justify-center`}>
                    <stat.icon className={stat.trend === 'up' ? 'text-green-400' : 'text-red-400'} size={24} />
                  </div>
                  <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                <h3 className="text-3xl font-bold">{stat.value}</h3>
              </div>
            ))}
          </div>

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
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                View All
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden">
              {recentTransactions.map((tx, idx) => (
                <div 
                  key={tx.id}
                  className={`p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors cursor-pointer ${
                    idx !== recentTransactions.length - 1 ? 'border-b border-slate-800' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-2xl">
                      {tx.icon}
                    </div>
                    <div>
                      <p className="font-medium">{tx.name}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-slate-400">{tx.date}</p>
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
                        {tx.type === 'income' ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
                      </p>
                      <p className="text-xs text-slate-400">{tx.category}</p>
                    </div>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-30">
        <Plus size={28} />
      </button>
    </div>
  );
}