import { ArrowUpRight, BarChart3, FileText, HelpCircle, Home, LogOut, Package, Settings, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export default function Aside({sidebarOpen}: {sidebarOpen: boolean, setSidebarOpen: (open: boolean) => void}) {
    const [activeTab, setActiveTab] = useState('overview');
    const menuItems = [
        { label: 'Overview', icon: Home, id: 'overview', link: '/' },
        { label: 'Transactions', icon: ArrowUpRight, id: 'transactions', link: '/transactions' },
        { label: 'Invoices', icon: FileText, id: 'invoices', link: '/invoices' },
        { label: 'Customers', icon: Users, id: 'customers', link: '/customers' },
        { label: 'Analytics', icon: BarChart3, id: 'analytics', link: '/analytics' },
        { label: 'Inventory', icon: Package, id: 'inventory', link: '/inventory' },
        { label: 'Settings', icon: Settings, id: 'settings', link: '/settings' },
        { label: 'Help', icon: HelpCircle, id: 'help', link: '/help' }
    ];

    return (
        <aside className={`fixed top-0 left-0 h-full bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 w-64 z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-15 h-15 rounded-xl flex items-center justify-center font-bold text-xl">
                <Image src="/logo.svg" alt="Bentech Logo" height={80} width={80} />
            </div>
            <div>
                <span className="text-xl font-bold block">Bentrx</span>
                <span className="text-xs text-slate-400">Business Edition</span>
            </div>
          </div>

          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? 'bg-sky-900 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-2 rounded-xl text-red-400 hover:text-red-300 hover:bg-slate-800/50 transition-all">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    )
}