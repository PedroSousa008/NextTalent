import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-start pt-8">
      {/* Logo at the top */}
      <div className="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Next Talent Logo" width={320} height={320} className="mb-4" style={{objectFit: 'contain'}} />
      </div>
      {/* Login form and content below logo */}
      <div className="w-full max-w-lg flex flex-col items-center">
        <form className="w-full">
          <label className="block text-gray-500 text-base mb-1" htmlFor="email">Email/Phone Number</label>
          <input id="email" type="text" placeholder="" className="w-full mb-6 px-4 py-2 bg-gray-100 text-gray-700 rounded-none border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 shadow-sm" />

          <label className="block text-gray-500 text-base mb-1" htmlFor="password">Password</label>
          <div className="relative mb-6">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder=""
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-none border-0 border-b border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-400 shadow-sm pr-20"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-gray-500 font-medium bg-transparent"
              tabIndex={-1}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button type="submit" className="w-full bg-gray-200 text-gray-800 py-2 rounded-none text-2xl font-bold shadow-sm border-0 mb-6">Log In</button>
        </form>
        <div className="w-full text-center mb-8">
          <a href="#" className="text-blue-700 hover:underline text-base">Forgot Password?</a>
        </div>
        {/* Divider line */}
        <div className="w-full border-t border-gray-200 mb-8"></div>
        <div className="w-full text-center mb-4">
          <span className="text-blue-700 text-2xl font-semibold">Create a new account</span>
        </div>
        <div className="flex justify-between w-full text-xl font-bold text-gray-900 mb-12">
          <a href="#" className="hover:underline">As a Coach</a>
          <a href="#" className="hover:underline">As a Player</a>
          <a href="#" className="hover:underline">As an Agent</a>
        </div>
      </div>
      <footer className="flex justify-between w-full max-w-lg text-sm text-blue-700 mt-auto mb-4 px-2">
        <a href="#" className="hover:underline">Support</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Language</a>
      </footer>
    </div>
  );
} 