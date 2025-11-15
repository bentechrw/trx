'use client'

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownLeft, CreditCard, TrendingUp, Plus, MoreVertical, Eye, EyeOff, Zap, DollarSign, Clock, ArrowUpDown, CheckCircle, ChevronDown, Users, Calendar, X, Store } from 'lucide-react';
import Aside from '@/components/aside';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function DashboardComp() {
    const route = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [balanceVisible, setBalanceVisible] = useState(false);
    const [filterType, setFilterType] = useState('all');
    const [transactionType, setTransactionType] = useState('income');
    
    

    const productLists = [
        {id: 1, name: 'Product A', unitPrice: 50.00, inStock: 20},
        {id: 2, name: 'Product B', unitPrice: 75.00, inStock: 15},
        {id: 3, name: 'Product C', unitPrice: 100.00, inStock: 10},
        {id: 4, name: 'Product D', unitPrice: 150.00, inStock: 5},
        {id: 5, name: 'Product E', unitPrice: 200.00, inStock: 8}
    ];
    
    const [formData, setFormData] = useState({
        type: 'income',
        amount: '',
        description: '',
        category: '',
        customerVendor: '',
        PID: 0,
        date: new Date().toISOString().split('T')[0],
        paymentMethod: 'Cash',
        notes: '',
        hasProducts: false
    });

    const expenseCategories = ['Inventory', 'Overhead', 'Marketing', 'Services', 'Utilities', 'Salaries', 'Other Expense'];
    const paymentMethods = ['Bank Transfer', 'Credit Card', 'Debit Card', 'Cash', 'Check', 'PayPal'];
    const incomeCategories = ['Sales', 'Services', 'Recurring', 'Refund', 'Other Income'];
    

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTransactionTypeChange = (type: 'income' | 'expense') => {
        setTransactionType(type);
        setFormData(prev => ({ ...prev, type, category: '' }));
    };

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
        { label: 'Transact', icon: ArrowUpDown, color: 'from-blue-500 to-blue-600', desc: 'Make transaction' },
        { label: 'Request', icon: ArrowDownLeft, color: 'from-purple-500 to-purple-600', desc: 'Request payment' },
        { label: 'Add Card', icon: CreditCard, color: 'from-green-500 to-green-600', desc: 'Link new card' },
        { label: 'Pay Bills', icon: Zap, color: 'from-orange-500 to-orange-600', desc: 'Quick payments' },
    ];

    const handleSubmit = () => {
        console.log('Transaction submitted:', formData);
        setIsOpen(false);
            setFormData({
            type: 'income',
            amount: '',
            description: '',
            category: '',
            customerVendor: '',
            PID: 0,
            date: new Date().toISOString().split('T')[0],
            paymentMethod: 'Cash',
            notes: '',
            hasProducts: false
        });
        setTransactionType('income');
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
        
        <Aside sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {sidebarOpen && (
            <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            />
        )}

        <div className="lg:ml-64 p-6">

            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <main className="mt-6 space-y-6">
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
                <div className="lg:col-span-2 space-y-6">
                    <div>
                    <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickActions.map((action, idx) => (
                        <button
                            key={idx}
                            className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-all hover:scale-105 active:scale-95 text-left cursor-pointer"
                            onClick={() => console.log(action.label)}
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

                <div className="space-y-6">
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

                    <div className="bg-blue-600 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                        <p className="text-blue-100 text-sm mb-2">Business Balance</p>
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-bold">
                            {balanceVisible ? '$54,890.67' : '••••••'}
                            </h2>
                            <button 
                            onClick={() => setBalanceVisible(!balanceVisible)}
                            className="text-white/60 hover:text-white transition-colors cursor-pointer"
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

        <button className="fixed bottom-8 right-8 bg-sky-900 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-30 cursor-pointer" onClick={() => setIsOpen(true)}>
            <Plus size={30} className='font-black' />
        </button>

        {isOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-[fadeIn_0.2s_ease-out]">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-[slideUp_0.3s_ease-out]">
                    <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between z-10">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Add New Transaction</h2>
                            <p className="text-slate-400 text-sm">Record a new business transaction</p>
                        </div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-xl"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="p-6 space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-3 text-slate-300">Transaction Type</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleTransactionTypeChange('income')}
                                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                    transactionType === 'income'
                                        ? 'border-green-500 bg-green-500/10'
                                        : 'border-slate-700 hover:border-slate-600'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                                        <ArrowDownLeft className="text-green-400" size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-white">Income</p>
                                        <p className="text-xs text-slate-400">Money received</p>
                                    </div>
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleTransactionTypeChange('expense')}
                                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                                    transactionType === 'expense'
                                        ? 'border-red-500 bg-red-500/10'
                                        : 'border-slate-700 hover:border-slate-600'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                                        <ArrowUpRight className="text-red-400" size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-white">Expense</p>
                                        <p className="text-xs text-slate-400">Money spent</p>
                                    </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Amount *</label>
                        <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            placeholder="0.00"
                            step="0.01"
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white text-lg placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            required
                        />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Description *</label>
                        <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="e.g., Payment for consulting services"
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Category *</label>
                        <div className="relative">
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            required
                        >
                            <option value="">Select a category</option>
                            {(transactionType === 'income' ? incomeCategories : expenseCategories).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">
                        {transactionType === 'income' ? 'Customer Name' : 'Vendor Name'}
                        </label>
                        <div className="relative">
                        <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            name="customerVendor"
                            value={formData.customerVendor}
                            onChange={handleInputChange}
                            placeholder={transactionType === 'income' ? 'e.g., Acme Corp' : 'e.g., Tech Supplies Inc'}
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                        </div>
                    </div>

                    {transactionType === 'income' && (
                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">
                            </label>
                            <div className="relative">
                                <Store className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                <select name="productId" className='w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all' onChange={handleInputChange}>
                                    <option value="">Select Product</option>
                                    {productLists.map(product => (
                                        <option key={product.id} value={product.id}>{product.name} - ${product.unitPrice.toFixed(2)} (In Stock: {product.inStock})</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                        
                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">Date *</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2 text-slate-300">Payment Method *</label>
                            <div className="relative">
                            <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleInputChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                required
                            >
                                {paymentMethods.map(method => (
                                    <option key={method} value={method.toLowerCase().replace(' ', '_')}>{method}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                            </div>
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Additional Notes</label>
                        <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Add any additional details..."
                        rows={3}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 px-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        />
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-semibold transition-all text-white"
                        >
                        Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-sky-900 hover:scale-[1.02] py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-white cursor-pointer"
                        >
                        <CheckCircle size={20} />
                         Create Transaction
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        )}
        <style>{`
            @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
            }
            @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
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