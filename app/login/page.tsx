'use client'
import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const features = [
    'Bank-level 256-bit encryption',
    'Multi-factor authentication',
    'Real-time fraud detection',
    'FDIC insured deposits'
  ];

  return (
    <>
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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
                <div className="">
                    <Image src="/logo.svg" alt="Bentech Logo" height={80} width={80} />
                </div>
                <span className="text-xl font-bold">Bentrx</span>
            </div>

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
                <div className="hidden md:block space-y-8">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-4">
                        Welcome to the
                        <span className="bg-blue-400 bg-clip-text text-transparent"> Future of Finance</span>
                        </h1>
                        <p className="text-xl text-slate-300">
                        Join 100+ users who trust Bentrx for secure, instant transactions worldwide.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-300">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={16} />
                            </div>
                            <span>{feature}</span>
                        </div>
                        ))}
                    </div>

                    <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                        <Shield className="text-blue-400" size={24} />
                        <h3 className="font-semibold">Your Security Matters</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                        We use industry-leading security measures to protect your data and transactions. Your information is encrypted and never shared with third parties.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl">
                    <div className="flex bg-slate-800/50 rounded-2xl p-1 mb-8" style={{
                        left: isLogin ? '4px' : '50%',
                        right: isLogin ? '50%' : '4px'
                    }}>
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 py-3 rounded-xl font-semibold transition-colors cursor-pointer ${
                                isLogin
                                ? 'bg-sky-900 text-white'
                                : 'text-slate-400 hover:text-white'
                            }`}
                            >
                            Log In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 py-3 rounded-xl font-semibold transition-colors cursor-pointer ${
                                !isLogin
                                ? 'bg-sky-900 text-white'
                                : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            <span className={`transition-colors duration-200 ${!isLogin ? 'text-white' : 'text-slate-400'}`}>Sign Up</span>
                        </button>
                    </div>

                <div className="space-y-3 mb-6">
                    <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-3 cursor-pointer">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                    </button>
                    <button className="w-full bg-slate-800 text-white py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-3 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        Continue with GitHub
                    </button>
                </div>

                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-slate-900 text-slate-400">Or continue with email</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                    <div className='animate-[slideDown_0.3s_ease-out]'>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Full Name</label>
                        <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                        </div>
                    </div>
                    )}

                    <div className='animate-[fadeIn_0.3s_ease-out]'>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="you@example.com"
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                        </div>
                    </div>

                    <div className="animate-[fadeIn_0.3s_ease-out]">
                        <label className="block text-sm font-medium mb-2 text-slate-300">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                            <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                            <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                            >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {!isLogin && (
                    <div className='animate-[slideDown_0.3s_ease-out]'>
                        <label className="block text-sm font-medium mb-2 text-slate-300">Confirm Password</label>
                        <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                        </div>
                    </div>
                    )}

                    {isLogin && (
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900" />
                            Remember me
                            </label>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Forgot password?
                            </a>
                        </div>
                    )}

                    {!isLogin && (
                        <div className="flex items-start gap-2 text-sm text-slate-300">
                            <input type="checkbox" className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900" required />
                            <span>
                                I agree to the{' '}
                                <Link href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</Link>
                                {' '}and{' '}
                                <Link href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>
                            </span>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-sky-900 py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group mt-6 cursor-pointer"
                    >
                    {isLogin ? 'Log In' : 'Create Account'}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </form>

                <p className="text-center text-sm text-slate-400 mt-6">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                    {isLogin ? 'Sign Up' : 'Log In'}
                    </button>
                </p>
                </div>
            </div>

            <div className="md:hidden absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 z-10">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Shield className="text-blue-400" size={18} />
                    <span>Protected by 256-bit encryption</span>
                </div>
            </div>
        </div>
    </>
  );
}