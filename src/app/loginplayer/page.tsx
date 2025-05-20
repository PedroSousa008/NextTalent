'use client';

import { useState } from 'react';

export default function LoginPlayer() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center pt-8">
      {/* Logo and branding */}
      <div className="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Next Talent Logo" width={320} height={320} className="mb-4" style={{objectFit: 'contain'}} />
      </div>
      {/* Title and tabs */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-8">
        <h1 className="text-4xl font-serif font-semibold mb-2">Create a New Account</h1>
        <div className="flex justify-center gap-12 text-xl mb-6">
          <span className="text-gray-400 cursor-pointer">Agent</span>
          <span className="font-bold underline underline-offset-8">Player</span>
          <span className="text-gray-400 cursor-pointer">Coach</span>
        </div>
      </div>
      {/* Form */}
      <form className="w-full max-w-3xl grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
        <div>
          <label className="block text-gray-500 mb-1">First Name</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Weight</label>
          <div className="flex items-center">
            <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="ml-2 text-gray-400">▼ kg</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Last Name</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Hight</label>
          <div className="flex items-center">
            <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="ml-2 text-gray-400">▼ m</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Date of Birthday</label>
          <div className="flex items-center">
            <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="ml-2 text-gray-400">📅</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Position</label>
          <div className="flex items-center">
            <input value="CM/CAM" readOnly className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="ml-2 text-gray-400">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Gender</label>
          <div className="flex items-center">
            <input value="I am…" readOnly className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="ml-2 text-gray-400">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Nationality</label>
          <div className="flex items-center">
            <span className="mr-2 text-2xl">🇵🇹</span>
            <input value="Portuguese" readOnly className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="ml-2 text-gray-400">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Phone Number</label>
          <div className="flex items-center">
            <span className="mr-2 text-2xl">🇵🇹</span>
            <input value="+351" readOnly className="w-20 px-2 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 mr-2" />
            <input className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">NIF</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Email</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">CC nº</label>
          <div className="flex items-center">
            <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="mx-2 text-gray-400">-</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Club</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">User SNS nº</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Club Code</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Player Certificate Number</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
      </form>
    </div>
  );
} 