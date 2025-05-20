'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const POSITIONS = [
  'GK', 'CB', 'LB', 'LWB', 'RB', 'RWB', 'CDM', 'CM', 'CAM', 'LM', 'LW', 'RM', 'RW', 'CF', 'ST'
];

function convertWeight(value: string, from: 'kg' | 'lbs', to: 'kg' | 'lbs') {
  const num = parseFloat(value);
  if (isNaN(num)) return '';
  return from === 'kg' && to === 'lbs'
    ? (num * 2.20462).toFixed(1)
    : from === 'lbs' && to === 'kg'
    ? (num / 2.20462).toFixed(1)
    : value;
}

// Height conversion helpers
function cmToFeetInches(cm: number) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}ft${inches > 0 ? inches : ''}`;
}

function feetInchesToCm(feetInches: string) {
  const match = feetInches.match(/(\d+)ft(\d{1,2})?/);
  if (!match) return '';
  const feet = parseInt(match[1], 10);
  const inches = match[2] ? parseInt(match[2], 10) : 0;
  return Math.round((feet * 12 + inches) * 2.54).toString();
}

function formatCmInput(val: string) {
  // Insert comma after first digit if 3 digits
  if (/^\d{3}$/.test(val)) return val[0] + ',' + val.slice(1);
  if (/^\d,\d{2}$/.test(val)) return val;
  return val.replace(/[^\d,]/g, '');
}

export default function LoginPlayer() {
  const router = useRouter();
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [weight, setWeight] = useState('');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft'>('cm');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [positions, setPositions] = useState<string[]>([]);
  const [showPositionDropdown, setShowPositionDropdown] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    club: '',
    nif: '',
    clubCode: '',
    cc: '',
    sns: '',
    certificate: '',
  });
  const [showPasswordStep, setShowPasswordStep] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleGenderSelect(value: string) {
    setGender(value);
    setShowGenderDropdown(false);
  }

  function handlePositionToggle(pos: string) {
    if (positions.includes(pos)) {
      setPositions(positions.filter(p => p !== pos));
    } else if (positions.length < 3) {
      setPositions([...positions, pos]);
    }
  }

  function handleWeightUnitSwitch() {
    const newUnit = weightUnit === 'kg' ? 'lbs' : 'kg';
    setWeight(convertWeight(weight, weightUnit, newUnit));
    setWeightUnit(newUnit);
  }

  function handleHeightUnitSwitch() {
    if (heightUnit === 'cm' && height) {
      setHeight(cmToFeetInches(Number(height.replace(',', ''))));
      setHeightUnit('ft');
    } else if (heightUnit === 'ft' && height) {
      setHeight(feetInchesToCm(height));
      setHeightUnit('cm');
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowPasswordStep(true);
  }

  if (showPasswordStep) {
    return (
      <div className="flex flex-col min-h-screen bg-white items-center pt-8">
        <img
          src="/logo.png"
          alt="Next Talent Logo"
          width={320}
          height={320}
          className="mb-4 cursor-pointer"
          style={{ objectFit: 'contain' }}
          onClick={() => router.push('/')}
        />
        <div className="w-full max-w-md flex flex-col items-center mt-8">
          <h2 className="text-3xl font-bold mb-2">Hello {form.firstName}!</h2>
          <div className="text-gray-700 mb-6">{form.email} / {form.phone}</div>
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-4 px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <button className="w-full bg-gray-200 text-black py-3 rounded-none text-xl font-bold shadow-sm border-0 flex items-center justify-center">
            Create Your Account
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white items-center pt-8">
      {/* Logo and branding */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/logo.png"
          alt="Next Talent Logo"
          width={320}
          height={320}
          className="mb-4 cursor-pointer"
          style={{ objectFit: 'contain' }}
          onClick={() => router.push('/')}
        />
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
      <form className="w-full max-w-3xl grid grid-cols-2 gap-x-8 gap-y-4 mb-8" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-500 mb-1">First Name</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.firstName}
            onChange={e => setForm({ ...form, firstName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Weight</label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
              value={weight}
              onChange={e => setWeight(e.target.value.replace(/[^\d.]/g, ''))}
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 cursor-pointer select-none"
              onClick={handleWeightUnitSwitch}
            >
              ▼<span className="ml-1 text-black">{weightUnit}</span>
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Last Name</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.lastName}
            onChange={e => setForm({ ...form, lastName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Height</label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
              value={heightUnit === 'cm' ? formatCmInput(height) : height}
              onChange={e => {
                let val = e.target.value.replace(/[^\d,]/g, '');
                if (heightUnit === 'cm') {
                  if (/^\d{3}$/.test(val)) val = val[0] + ',' + val.slice(1);
                  setHeight(val.replace(',', ''));
                } else {
                  setHeight(val);
                }
              }}
              onBlur={() => {
                if (heightUnit === 'cm' && height.length === 3) setHeight(height[0] + height.slice(1));
              }}
            />
            <span
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 cursor-pointer select-none"
              onClick={handleHeightUnitSwitch}
            >
              ▼<span className="ml-1 text-black">{heightUnit}</span>
            </span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Date of Birthday</label>
          <div className="flex items-center bg-gray-100 border-0 border-b border-gray-300 rounded-none px-2 py-2 mb-2 relative">
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
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">📅</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Gender</label>
          <div className="relative">
            {(!gender || showGenderDropdown) ? (
              <select
                value={gender}
                onChange={e => handleGenderSelect(e.target.value)}
                onBlur={() => setShowGenderDropdown(false)}
                className="w-full px-4 py-2 pr-8 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 appearance-none"
                autoFocus={showGenderDropdown}
              >
                <option value="" disabled>I am…</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <div
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none mb-2 flex items-center text-left font-medium cursor-pointer"
                onClick={() => setShowGenderDropdown(true)}
              >
                I am {gender}
              </div>
            )}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Position</label>
          <div className="relative">
            <div
              className="w-full px-4 py-2 pr-8 bg-gray-100 text-black border-0 border-b border-gray-300 rounded-none mb-2 flex items-center flex-wrap gap-2 cursor-pointer min-h-[44px]"
              onClick={() => setShowPositionDropdown(!showPositionDropdown)}
              tabIndex={0}
              onBlur={() => setShowPositionDropdown(false)}
            >
              {positions.length === 0 ? (
                <span className="text-gray-400">Select up to 3 positions</span>
              ) : (
                positions.map(pos => (
                  <span key={pos} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{pos}</span>
                ))
              )}
            </div>
            {showPositionDropdown && (
              <div className="absolute left-0 z-10 w-full bg-white border border-gray-200 rounded shadow-lg max-h-48 overflow-y-auto mt-1">
                {POSITIONS.map(pos => (
                  <div
                    key={pos}
                    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center text-black ${positions.includes(pos) ? 'font-bold text-blue-700' : ''}`}
                    onMouseDown={e => { e.preventDefault(); handlePositionToggle(pos); }}
                  >
                    <input
                      type="checkbox"
                      checked={positions.includes(pos)}
                      readOnly
                      className="mr-2"
                      tabIndex={-1}
                    />
                    {pos}
                  </div>
                ))}
              </div>
            )}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Email</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Phone Number</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center text-2xl">
              <span className="text-2xl">🇵🇹</span>
              <span className="ml-2 text-base font-normal text-black">+351</span>
            </span>
            <input
              className="w-full pl-24 pr-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 text-center"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, '') })}
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Club</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.club || ''}
            onChange={e => setForm({ ...form, club: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">NIF</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.nif || ''}
            onChange={e => setForm({ ...form, nif: e.target.value.replace(/[^\d]/g, '') })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Club Code</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.clubCode || ''}
            onChange={e => setForm({ ...form, clubCode: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">CC nº</label>
          <div className="flex items-center">
            <input
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
              value={form.cc || ''}
              onChange={e => setForm({ ...form, cc: e.target.value.replace(/[^\d]/g, '') })}
            />
            <span className="mx-2 text-gray-400">-</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">User SNS nº</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.sns || ''}
            onChange={e => setForm({ ...form, sns: e.target.value.replace(/[^\d]/g, '') })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Player Certificate Number</label>
          <input
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2"
            value={form.certificate || ''}
            onChange={e => setForm({ ...form, certificate: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Nationality</label>
          <div className="relative flex items-center">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🇵🇹</span>
            <input value="Portuguese" readOnly className="w-full pl-12 pr-8 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
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