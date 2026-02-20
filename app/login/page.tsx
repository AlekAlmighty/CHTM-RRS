'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [leftImgError, setLeftImgError] = useState(false);
  const [rightImgError, setRightImgError] = useState(false);
  const [email, setEmail] = useState('admin@chtm.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Extract username from email (e.g., admin@chtm.com -> admin)
    const userName = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
    
    // Store user info in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', userName);
    
    // Navigate to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-800 rounded-lg shadow-2xl p-10">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-white ring-2 ring-white">
                {!leftImgError ? (
                  <Image
                    src="/login/chtmlogo.png"
                    alt="CHTM Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setLeftImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-pink-500 flex items-center justify-center rounded-full">
                    <span className="text-white font-bold text-2xl">CH</span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-pink-500 tracking-wide">CHTM-RRS</h1>
                <p className="text-sm text-gray-400">ROOM RESERVATION SYSTEM</p>
              </div>

              <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg bg-white ring-2 ring-white">
                {!rightImgError ? (
                  <Image
                    src="/login/gclogo.jpg"
                    alt="GC Logo"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setRightImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-green-500 flex items-center justify-center rounded-full">
                    <span className="text-white font-bold text-xl">GC</span>
                  </div>
                )}
              </div>
            </div>

            <div className="h-2 rounded bg-gradient-to-r from-pink-500 to-pink-600 mb-6 mx-10"></div>
            <h2 className="text-3xl font-bold text-white mb-2">Admin Login</h2>
            <p className="text-gray-400">Enter your credentials to access the dashboard</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition"
                  placeholder="admin@chtm.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg py-3 px-4 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 bg-slate-700 border border-slate-600 rounded checked:bg-pink-500 checked:border-pink-500 cursor-pointer"
                />
                Remember me
              </label>
              <a href="#" className="text-pink-500 hover:text-pink-400 text-sm font-medium">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 rounded-lg transition duration-200 transform hover:scale-105"
            >
              Login to Dashboard
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-slate-700 text-center text-gray-500 text-sm">
            © 2026 CHTM Hotel Management. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
