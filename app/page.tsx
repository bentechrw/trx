'use client'

import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, TrendingUp, CreditCard, Smartphone, Globe, Menu, X, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Instant Transfers',
      description: 'Send and receive money in seconds with real-time processing'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit encryption and multi-factor authentication keep you safe'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'AI-powered insights help you understand your spending habits'
    },
    {
      icon: Globe,
      title: 'Global Payments',
      description: 'Send money to 10+ countries with competitive exchange rates'
    },
    {
      icon: CreditCard,
      title: 'Virtual Cards',
      description: 'Create unlimited virtual cards for secure online shopping'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Seamless experience across all your devices, anytime, anywhere'
    }
  ];

  const stats = [
    { value: '100+', label: 'Active Users' },
    { value: '$50+', label: 'Processed' },
    { value: '18+', label: 'Countries' },
    { value: '2.7★', label: 'App Rating' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">  
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="">
                <Image src="/logo.svg" alt="Bentech Logo" height={80} width={80} />
              </div>
              <span className="text-xl font-bold">Bentrx</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <button className="text-slate-300 hover:text-white transition-colors">Log In</button>
              <button className="bg-sky-900 px-6 py-2.5 rounded-xl font-medium hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block text-slate-300 hover:text-white">Features</a>
              <a href="#pricing" className="block text-slate-300 hover:text-white">Pricing</a>
              <a href="#about" className="block text-slate-300 hover:text-white">About</a>
              <button className="block w-full text-left text-slate-300 hover:text-white">Log In</button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-2.5 rounded-xl font-medium">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm">
                <span className="text-blue-400">✨ To be trusted by 100+ users worldwide</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Your Money,
                <span className="bg-blue-400 bg-clip-text text-transparent"> Simplified</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Send, receive, and manage your money with the most secure and intuitive platform. Join millions who trust PayFlow for their daily transactions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-sky-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <Play size={20} />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full bg-blue-400 border-2 border-slate-950"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-slate-400">Join 100+ happy users</p>
                  <div className="flex gap-1 text-yellow-400">★★★★★</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl">
                <div className="bg-sky-900 rounded-2xl p-6 mb-6">
                  <p className="text-blue-100 text-sm mb-2">Total Balance</p>
                  <h2 className="text-4xl font-bold mb-4">$24,563.89</h2>
                  <div className="flex gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex-1">
                      <p className="text-xs text-white/70 mb-1">Income</p>
                      <p className="text-lg font-bold">+$8,240</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex-1">
                      <p className="text-xs text-white/70 mb-1">Expenses</p>
                      <p className="text-lg font-bold">-$2,145</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: 'Salary Deposit', amount: '+$3,500', icon: '💼' },
                    { name: 'Netflix', amount: '-$15.99', icon: '🎬' },
                    { name: 'Grocery Store', amount: '-$87.50', icon: '🛒' }
                  ].map((tx, i) => (
                    <div key={i} className="bg-sky-900/50 rounded-xl p-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          {tx.icon}
                        </div>
                        <p className="font-medium">{tx.name}</p>
                      </div>
                      <p className={tx.amount.startsWith('+') ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                        {tx.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Powerful features designed to give you complete control over your finances
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 hover:bg-slate-800/50 transition-all hover:scale-105 hover:border-blue-500/50 group">
                <div className="bg-sky-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sky-600 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join millions of users who trust PayFlow with their finances
              </p>
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                Create Free Account
              </button>
              <p className="text-sm text-blue-100 mt-4">No credit card required • Free forever</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="">
                  <Image src="/logo.svg" alt="Bentech Logo" height={80} width={80} />
                </div>
                <span className="font-bold">Bentrx</span>
              </div>
              <p className="text-slate-400 text-sm">Making money management simple and secure for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>Features</p>
                <p>Pricing</p>
                <p>Security</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>About</p>
                <p>Careers</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>Help Center</p>
                <p>Contact</p>
                <p>Status</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2025 Bentrx. All rights reserved.</p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <Link href="#" className="hover:text-white">Privacy</Link>
              <Link href="#" className="hover:text-white">Terms</Link>
              <Link href="#" className="hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}