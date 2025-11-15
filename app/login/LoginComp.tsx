'use client'
import { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../zodValidator';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { mockUsers, USER_STORAGE_KEY } from '@/utils/mock-user';
import { toast, ToastContainer } from 'react-toastify';
import { getErrorMessage } from '@/utils/errorHandler';

type loginForm = z.infer<typeof loginSchema>;

export default function LoginComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {register, handleSubmit, formState: { errors }} = useForm<loginForm>(
    {
        resolver: zodResolver(loginSchema)
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginSubmit = handleSubmit(async (data) => {
    console.log('Form submitted:', data);
    const user = mockUsers.find((u) => u.email === data.email && u.password === data.password);
    if (user) {
        try {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
            localStorage.setItem('IsLoggedIn', 'true');
        } catch (error) {
            toast.error(getErrorMessage(error));
        }
    } else {
      toast.error('Invalid email or password.');
    }
  });

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
            <ToastContainer position='top-right'/>
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

                <form onSubmit={loginSubmit} className="space-y-4">


                    {isLogin && (
                        <>
                            <div className='animate-[fadeIn_0.3s_ease-out]'>
                                <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                    type="email"
                                    {...register('email')}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="you@example.com"
                                    className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="animate-[fadeIn_0.3s_ease-out]">
                                <label className="block text-sm font-medium mb-2 text-slate-300">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        {...register('password')}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                    
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                                )}
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900" />
                                Remember me
                                </label>
                                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                                Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-sky-900 py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group mt-6 cursor-pointer"
                            >
                                Log In
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </>
                    )}

                    {!isLogin && (
                        <>
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
                            <div className='animate-[fadeIn_0.3s_ease-out]'>
                                <label className="block text-sm font-medium mb-2 text-slate-300">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="you@example.com"
                                    className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                    />
                                </div>
                        
                            </div>
                            <div className="animate-[fadeIn_0.3s_ease-out]">
                                <label className="block text-sm font-medium mb-2 text-slate-300">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl py-3 pl-12 pr-12 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                    
                                </div>
                            </div>
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
                            <button
                                type="submit"
                                className="w-full bg-sky-900 py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group mt-6 cursor-pointer"
                            >
                                Create Account
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>
                        </>

                    )}
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