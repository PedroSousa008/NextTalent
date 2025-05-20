'use client';

import { useState } from 'react';

export default function LoginPlayer() {
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState({ day: '', month: '', year: '' });

  return (
    <div className="flex flex-col min-h-screen bg-white items-center pt-8">
      {/* Logo and branding */}
      <div className="flex flex-col items-center mb-8">
        <img src="/logo.png" alt="Next Talent Logo" width={320} height={320} className="mb-4" style={{objectFit: 'contain'}} />
      </div>
      {/* Title and tabs */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-8">
        <h1 className="text-4xl font-serif font-semibold mb-2 text-black">Create a New Account</h1>
        <div className="flex justify-center gap-12 text-xl mb-6">
          <span className="text-gray-400 cursor-pointer">Agent</span>
          <span className="font-bold text-black border-b-2 border-black pb-1">Player</span>
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
          <div className="relative">
            <input className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 cursor-pointer select-none"
              onClick={() => setWeightUnit(weightUnit === 'kg' ? 'lbs' : 'kg')}
            >
              ▼<span className="ml-1 text-black">{weightUnit}</span>
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Last Name</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Height</label>
          <div className="relative">
            <input className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 cursor-pointer select-none"
              onClick={() => setHeightUnit(heightUnit === 'cm' ? 'ft' : 'cm')}
            >
              ▼<span className="ml-1 text-black">{heightUnit}</span>
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Date of Birthday</label>
          <div className="flex items-center bg-gray-100 border-0 border-b border-gray-300 rounded-none px-2 py-2 mb-2">
            <input
              type="text"
              maxLength={2}
              value={dob.day}
              onChange={e => setDob({ ...dob, day: e.target.value.replace(/\D/g, '').slice(0, 2) })}
              className="w-12 px-2 bg-gray-100 text-gray-700 border-none focus:outline-none focus:ring-0 text-center"
              placeholder="DD"
            />
            <span className="text-gray-400 text-xl">/</span>
            <input
              type="text"
              maxLength={2}
              value={dob.month}
              onChange={e => setDob({ ...dob, month: e.target.value.replace(/\D/g, '').slice(0, 2) })}
              className="w-12 px-2 bg-gray-100 text-gray-700 border-none focus:outline-none focus:ring-0 text-center"
              placeholder="MM"
            />
            <span className="text-gray-400 text-xl">/</span>
            <input
              type="text"
              maxLength={4}
              value={dob.year}
              onChange={e => setDob({ ...dob, year: e.target.value.replace(/\D/g, '').slice(0, 4) })}
              className="w-16 px-2 bg-gray-100 text-gray-700 border-none focus:outline-none focus:ring-0 text-center"
              placeholder="YYYY"
            />
            <span className="ml-2 text-gray-400">📅</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Position</label>
          <div className="relative">
            <input value="CM/CAM" readOnly className="w-full px-4 py-2 pr-8 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Gender</label>
          <div className="relative">
            {!gender ? (
              <select
                value={gender}
                onChange={e => setGender(e.target.value)}
                className="w-full px-4 py-2 pr-8 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 appearance-none"
              >
                <option value="" disabled>I am…</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <div className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none mb-2 flex items-center justify-center text-center font-medium">
                I am {gender}
              </div>
            )}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Nationality</label>
          <div className="relative flex items-center">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🇵🇹</span>
            <input value="Portuguese" readOnly className="w-full pl-12 pr-8 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Phone Number</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-2xl">
              <span className="text-2xl">🇵🇹</span>
              <span className="ml-2 text-base font-normal text-black">+351</span>
            </span>
            <input className="w-full pl-24 pr-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 text-center" />
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
        {/* Full width row for Create Your Account button */}
        <div className="col-span-2 flex justify-center mt-8">
          <button type="submit" className="w-1/2 bg-gray-200 text-black py-3 rounded-none text-xl font-bold shadow-sm border-0 flex items-center justify-center">
            Create Your Account
          </button>
        </div>
      </form>
    </div>
  );
} 