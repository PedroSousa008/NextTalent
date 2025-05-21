'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPlayer() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '' });
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-white items-center pt-8">
      <img
        src="/logo.png"
        alt="Next Talent Logo"
        width={320}
        height={320}
        className="mb-4 cursor-pointer"
        style={{ objectFit: 'contain' }}
        onClick={() => router.push('/')} />
      <div className="w-full max-w-md flex flex-col items-center mt-8">
        <h2 className="text-3xl font-bold mb-2">Log In</h2>
        <form className="w-full" onSubmit={e => {
          e.preventDefault();
          if (form.email === 'sousa.2003pedro@gmail.com' && password === 'Sousa10Pedro') {
            setLoginError('');
            router.push('/success');
          } else {
            setLoginError('Incorrect email or password.');
          }
        }}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-4"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 pr-20"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(v => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-gray-500 font-medium bg-transparent"
              tabIndex={-1}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-200 text-black py-3 rounded-none text-xl font-bold shadow-sm border-0 flex items-center justify-center mb-2"
          >
            Log In
          </button>
        </form>
        {loginError && <div className="text-red-500 text-sm mt-2">{loginError}</div>}
      </div>
    </div>
  );
} 