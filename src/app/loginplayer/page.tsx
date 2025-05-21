'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const POSITIONS = [
  'GK', 'CB', 'LB', 'LWB', 'RB', 'RWB', 'CDM', 'CM', 'CAM', 'LM', 'LW', 'RM', 'RW', 'CF', 'ST'
];

// List of countries and their emoji flags
const COUNTRIES = [
  { name: 'Afghanistan', flag: '🇦🇫' }, { name: 'Albania', flag: '🇦🇱' }, { name: 'Algeria', flag: '🇩🇿' }, { name: 'Andorra', flag: '🇦🇩' }, { name: 'Angola', flag: '🇦🇴' }, { name: 'Antigua and Barbuda', flag: '🇦🇬' }, { name: 'Argentina', flag: '🇦🇷' }, { name: 'Armenia', flag: '🇦🇲' }, { name: 'Australia', flag: '🇦🇺' }, { name: 'Austria', flag: '🇦🇹' }, { name: 'Azerbaijan', flag: '🇦🇿' }, { name: 'Bahamas', flag: '🇧🇸' }, { name: 'Bahrain', flag: '🇧🇭' }, { name: 'Bangladesh', flag: '🇧🇩' }, { name: 'Barbados', flag: '🇧🇧' }, { name: 'Belarus', flag: '🇧🇾' }, { name: 'Belgium', flag: '🇧🇪' }, { name: 'Belize', flag: '🇧🇿' }, { name: 'Benin', flag: '🇧🇯' }, { name: 'Bhutan', flag: '🇧🇹' }, { name: 'Bolivia', flag: '🇧🇴' }, { name: 'Bosnia and Herzegovina', flag: '🇧🇦' }, { name: 'Botswana', flag: '🇧🇼' }, { name: 'Brazil', flag: '🇧🇷' }, { name: 'Brunei', flag: '🇧🇳' }, { name: 'Bulgaria', flag: '🇧🇬' }, { name: 'Burkina Faso', flag: '🇧🇫' }, { name: 'Burundi', flag: '🇧🇮' }, { name: 'Cabo Verde', flag: '🇨🇻' }, { name: 'Cambodia', flag: '🇰🇭' }, { name: 'Cameroon', flag: '🇨🇲' }, { name: 'Canada', flag: '🇨🇦' }, { name: 'Central African Republic', flag: '🇨🇫' }, { name: 'Chad', flag: '🇹🇩' }, { name: 'Chile', flag: '🇨🇱' }, { name: 'China', flag: '🇨🇳' }, { name: 'Colombia', flag: '🇨🇴' }, { name: 'Comoros', flag: '🇰🇲' }, { name: 'Congo (Congo-Brazzaville)', flag: '🇨🇬' }, { name: 'Costa Rica', flag: '🇨🇷' }, { name: 'Croatia', flag: '🇭🇷' }, { name: 'Cuba', flag: '🇨🇺' }, { name: 'Cyprus', flag: '🇨🇾' }, { name: 'Czechia', flag: '🇨🇿' }, { name: 'Democratic Republic of the Congo', flag: '🇨🇩' }, { name: 'Denmark', flag: '🇩🇰' }, { name: 'Djibouti', flag: '🇩🇯' }, { name: 'Dominica', flag: '🇩🇲' }, { name: 'Dominican Republic', flag: '🇩🇴' }, { name: 'Ecuador', flag: '🇪🇨' }, { name: 'Egypt', flag: '🇪🇬' }, { name: 'El Salvador', flag: '🇸🇻' }, { name: 'Equatorial Guinea', flag: '🇬🇶' }, { name: 'Eritrea', flag: '🇪🇷' }, { name: 'Estonia', flag: '🇪🇪' }, { name: 'Eswatini', flag: '🇸🇿' }, { name: 'Ethiopia', flag: '🇪🇹' }, { name: 'Fiji', flag: '🇫🇯' }, { name: 'Finland', flag: '🇫🇮' }, { name: 'France', flag: '🇫🇷' }, { name: 'Gabon', flag: '🇬🇦' }, { name: 'Gambia', flag: '🇬🇲' }, { name: 'Georgia', flag: '🇬🇪' }, { name: 'Germany', flag: '🇩🇪' }, { name: 'Ghana', flag: '🇬🇭' }, { name: 'Greece', flag: '🇬🇷' }, { name: 'Grenada', flag: '🇬🇩' }, { name: 'Guatemala', flag: '🇬🇹' }, { name: 'Guinea', flag: '🇬🇳' }, { name: 'Guinea-Bissau', flag: '🇬🇼' }, { name: 'Guyana', flag: '🇬🇾' }, { name: 'Haiti', flag: '🇭🇹' }, { name: 'Honduras', flag: '🇭🇳' }, { name: 'Hungary', flag: '🇭🇺' }, { name: 'Iceland', flag: '🇮🇸' }, { name: 'India', flag: '🇮🇳' }, { name: 'Indonesia', flag: '🇮🇩' }, { name: 'Iran', flag: '🇮🇷' }, { name: 'Iraq', flag: '🇮🇶' }, { name: 'Ireland', flag: '🇮🇪' }, { name: 'Israel', flag: '🇮🇱' }, { name: 'Italy', flag: '🇮🇹' }, { name: 'Jamaica', flag: '🇯🇲' }, { name: 'Japan', flag: '🇯🇵' }, { name: 'Jordan', flag: '🇯🇴' }, { name: 'Kazakhstan', flag: '🇰🇿' }, { name: 'Kenya', flag: '🇰🇪' }, { name: 'Kiribati', flag: '🇰🇮' }, { name: 'Kuwait', flag: '🇰🇼' }, { name: 'Kyrgyzstan', flag: '🇰🇬' }, { name: 'Laos', flag: '🇱🇦' }, { name: 'Latvia', flag: '🇱🇻' }, { name: 'Lebanon', flag: '🇱🇧' }, { name: 'Lesotho', flag: '🇱🇸' }, { name: 'Liberia', flag: '🇱🇷' }, { name: 'Libya', flag: '🇱🇾' }, { name: 'Liechtenstein', flag: '🇱🇮' }, { name: 'Lithuania', flag: '🇱🇹' }, { name: 'Luxembourg', flag: '🇱🇺' }, { name: 'Madagascar', flag: '🇲🇬' }, { name: 'Malawi', flag: '🇲🇼' }, { name: 'Malaysia', flag: '🇲🇾' }, { name: 'Maldives', flag: '🇲🇻' }, { name: 'Mali', flag: '🇲🇱' }, { name: 'Malta', flag: '🇲🇹' }, { name: 'Marshall Islands', flag: '🇲🇭' }, { name: 'Mauritania', flag: '🇲🇷' }, { name: 'Mauritius', flag: '🇲🇺' }, { name: 'Mexico', flag: '🇲🇽' }, { name: 'Micronesia', flag: '🇫🇲' }, { name: 'Moldova', flag: '🇲🇩' }, { name: 'Monaco', flag: '🇲🇨' }, { name: 'Mongolia', flag: '🇲🇳' }, { name: 'Montenegro', flag: '🇲🇪' }, { name: 'Morocco', flag: '🇲🇦' }, { name: 'Mozambique', flag: '🇲🇿' }, { name: 'Myanmar (Burma)', flag: '🇲🇲' }, { name: 'Namibia', flag: '🇳🇦' }, { name: 'Nauru', flag: '🇳🇷' }, { name: 'Nepal', flag: '🇳🇵' }, { name: 'Netherlands', flag: '🇳🇱' }, { name: 'New Zealand', flag: '🇳🇿' }, { name: 'Nicaragua', flag: '🇳🇮' }, { name: 'Niger', flag: '🇳🇪' }, { name: 'Nigeria', flag: '🇳🇬' }, { name: 'North Korea', flag: '🇰🇵' }, { name: 'North Macedonia', flag: '🇲🇰' }, { name: 'Norway', flag: '🇳🇴' }, { name: 'Oman', flag: '🇴🇲' }, { name: 'Pakistan', flag: '🇵🇰' }, { name: 'Palau', flag: '🇵🇼' }, { name: 'Palestine State', flag: '🇵🇸' }, { name: 'Panama', flag: '🇵🇦' }, { name: 'Papua New Guinea', flag: '🇵🇬' }, { name: 'Paraguay', flag: '🇵🇾' }, { name: 'Peru', flag: '🇵🇪' }, { name: 'Philippines', flag: '🇵🇭' }, { name: 'Poland', flag: '🇵🇱' }, { name: 'Portugal', flag: '🇵🇹' }, { name: 'Qatar', flag: '🇶🇦' }, { name: 'Romania', flag: '🇷🇴' }, { name: 'Russia', flag: '🇷🇺' }, { name: 'Rwanda', flag: '🇷🇼' }, { name: 'Saint Kitts and Nevis', flag: '🇰🇳' }, { name: 'Saint Lucia', flag: '🇱🇨' }, { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' }, { name: 'Samoa', flag: '🇼🇸' }, { name: 'San Marino', flag: '🇸🇲' }, { name: 'Sao Tome and Principe', flag: '🇸🇹' }, { name: 'Saudi Arabia', flag: '🇸🇦' }, { name: 'Senegal', flag: '🇸🇳' }, { name: 'Serbia', flag: '🇷🇸' }, { name: 'Seychelles', flag: '🇸🇨' }, { name: 'Sierra Leone', flag: '🇸🇱' }, { name: 'Singapore', flag: '🇸🇬' }, { name: 'Slovakia', flag: '🇸🇰' }, { name: 'Slovenia', flag: '🇸🇮' }, { name: 'Solomon Islands', flag: '🇸🇧' }, { name: 'Somalia', flag: '🇸🇴' }, { name: 'South Africa', flag: '🇿🇦' }, { name: 'South Korea', flag: '🇰🇷' }, { name: 'South Sudan', flag: '🇸🇸' }, { name: 'Spain', flag: '🇪🇸' }, { name: 'Sri Lanka', flag: '🇱🇰' }, { name: 'Sudan', flag: '🇸🇩' }, { name: 'Suriname', flag: '🇸🇷' }, { name: 'Sweden', flag: '🇸🇪' }, { name: 'Switzerland', flag: '🇨🇭' }, { name: 'Syria', flag: '🇸🇾' }, { name: 'Tajikistan', flag: '🇹🇯' }, { name: 'Tanzania', flag: '🇹🇿' }, { name: 'Thailand', flag: '🇹🇭' }, { name: 'Timor-Leste', flag: '🇹🇱' }, { name: 'Togo', flag: '🇹🇬' }, { name: 'Tonga', flag: '🇹🇴' }, { name: 'Trinidad and Tobago', flag: '🇹🇹' }, { name: 'Tunisia', flag: '🇹🇳' }, { name: 'Turkey', flag: '🇹🇷' }, { name: 'Turkmenistan', flag: '🇹🇲' }, { name: 'Tuvalu', flag: '🇹🇻' }, { name: 'Uganda', flag: '🇺🇬' }, { name: 'Ukraine', flag: '🇺🇦' }, { name: 'United Arab Emirates', flag: '🇦🇪' }, { name: 'United Kingdom', flag: '🇬🇧' }, { name: 'United States of America', flag: '🇺🇸' }, { name: 'Uruguay', flag: '🇺🇾' }, { name: 'Uzbekistan', flag: '🇺🇿' }, { name: 'Vanuatu', flag: '🇻🇺' }, { name: 'Vatican City', flag: '🇻🇦' }, { name: 'Venezuela', flag: '🇻🇪' }, { name: 'Vietnam', flag: '🇻🇳' }, { name: 'Yemen', flag: '🇾🇪' }, { name: 'Zambia', flag: '🇿🇲' }, { name: 'Zimbabwe', flag: '🇿🇼' }
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
  const [nationality, setNationality] = useState(COUNTRIES.find(c => c.name === 'Portugal')!);
  const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);
  const [phoneCountry, setPhoneCountry] = useState(COUNTRIES.find(c => c.name === 'Portugal')!);
  const [showPhoneCountryDropdown, setShowPhoneCountryDropdown] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // For calendar popup
  const currentYear = new Date().getFullYear();
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => (1950 + i).toString());

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

  // Helper to check if all required fields are filled
  function isFormComplete() {
    return (
      form.firstName &&
      form.lastName &&
      dob.day && dob.month && dob.year &&
      gender &&
      positions.length > 0 &&
      form.club &&
      form.clubCode &&
      form.certificate &&
      weight &&
      height &&
      form.phone &&
      form.email &&
      form.nif &&
      form.cc &&
      form.sns
    );
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
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
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
          <div className="relative w-full mb-4">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(v => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-gray-500 font-medium bg-transparent"
              tabIndex={-1}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
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
          <a href="/loginagent" className="text-gray-400 cursor-pointer hover:underline">Agent</a>
          <span className="font-bold text-black border-b-2 border-black pb-1">Player</span>
          <a href="/logincoach" className="text-gray-400 cursor-pointer hover:underline">Coach</a>
        </div>
      </div>
      {/* Form */}
      <form className="w-full max-w-3xl grid grid-cols-2 gap-x-8 gap-y-4 mb-8" onSubmit={handleSubmit}>
        {/* Row 1 */}
        <div>
          <label className="block text-gray-500 mb-1">First Name</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Weight</label>
          <div className="relative">
            <input className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={weight} onChange={e => setWeight(e.target.value.replace(/[^\d.]/g, ''))} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 cursor-pointer select-none" onClick={handleWeightUnitSwitch}>▼<span className="ml-1 text-black">{weightUnit}</span></span>
          </div>
        </div>
        {/* Row 2 */}
        <div>
          <label className="block text-gray-500 mb-1">Last Name</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Height</label>
          <div className="relative">
            <input className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={heightUnit === 'cm' ? formatCmInput(height) : height} onChange={e => { let val = e.target.value.replace(/[^\d,]/g, ''); if (heightUnit === 'cm') { if (/^\d{3}$/.test(val)) val = val[0] + ',' + val.slice(1); setHeight(val.replace(',', '')); } else { setHeight(val); } }} onBlur={() => { if (heightUnit === 'cm' && height.length === 3) setHeight(height[0] + height.slice(1)); }} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 cursor-pointer select-none" onClick={handleHeightUnitSwitch}>▼<span className="ml-1 text-black">{heightUnit}</span></span>
          </div>
        </div>
        {/* Row 3 */}
        <div>
          <label className="block text-gray-500 mb-1">Date of Birthday</label>
          <div className="flex items-center bg-gray-100 border-0 border-b border-gray-300 rounded-none px-2 py-2 mb-2 relative">
            <input type="text" maxLength={2} value={dob.day} onChange={e => setDob({ ...dob, day: e.target.value.replace(/\D/g, '').slice(0, 2) })} className="w-12 px-2 bg-gray-100 text-gray-700 border-none focus:outline-none focus:ring-0 text-center" placeholder="DD" />
            <span className="text-gray-400 text-xl">/</span>
            <input type="text" maxLength={2} value={dob.month} onChange={e => setDob({ ...dob, month: e.target.value.replace(/\D/g, '').slice(0, 2) })} className="w-12 px-2 bg-gray-100 text-gray-700 border-none focus:outline-none focus:ring-0 text-center" placeholder="MM" />
            <span className="text-gray-400 text-xl">/</span>
            <input type="text" maxLength={4} value={dob.year} onChange={e => setDob({ ...dob, year: e.target.value.replace(/\D/g, '').slice(0, 4) })} className="w-16 px-2 bg-gray-100 text-gray-700 border-none focus:outline-none focus:ring-0 text-center" placeholder="YYYY" />
            <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowCalendar(v => !v)}>📅</button>
            {showCalendar && (
              <div className="absolute z-20 top-12 left-0 bg-white border border-gray-300 rounded shadow-lg flex gap-2 p-2">
                <div className="flex flex-col max-h-48 overflow-y-auto">
                  {days.map(day => (
                    <button key={day} type="button" className="px-2 py-1 hover:bg-blue-100 text-left text-black" onClick={() => { setDob(d => ({ ...d, day })); setShowCalendar(false); }}>{day}</button>
                  ))}
                </div>
                <div className="flex flex-col max-h-48 overflow-y-auto">
                  {months.map((month, idx) => (
                    <button key={month} type="button" className="px-2 py-1 hover:bg-blue-100 text-left text-black" onClick={() => { setDob(d => ({ ...d, month: (idx + 1).toString().padStart(2, '0') })); setShowCalendar(false); }}>{month}</button>
                  ))}
                </div>
                <div className="flex flex-col max-h-48 overflow-y-auto">
                  {years.map(year => (
                    <button key={year} type="button" className="px-2 py-1 hover:bg-blue-100 text-left text-black" onClick={() => { setDob(d => ({ ...d, year })); setShowCalendar(false); }}>{year}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Gender</label>
          <div className="relative">{(!gender || showGenderDropdown) ? (<select value={gender} onChange={e => handleGenderSelect(e.target.value)} onBlur={() => setShowGenderDropdown(false)} className="w-full px-4 py-2 pr-8 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 appearance-none" autoFocus={showGenderDropdown}><option value="" disabled>I am…</option><option value="Male">Male</option><option value="Female">Female</option></select>) : (<div className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none mb-2 flex items-center text-left font-medium cursor-pointer" onClick={() => setShowGenderDropdown(true)}>I am {gender}</div>)}<span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span></div>
        </div>
        {/* Row 4: Nationality and Phone Number */}
        <div>
          <label className="block text-gray-500 mb-1">Nationality</label>
          <div className="relative flex items-center">
            <button type="button" className="w-full pl-4 pr-8 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 flex items-center justify-between" onClick={() => setShowNationalityDropdown(v => !v)}>
              <span className="flex items-center">
                <span className="text-2xl mr-2">{nationality?.flag || '🏳️'}</span>
                <span className="text-black ml-0.5" style={{marginLeft: 0}}>{nationality?.name || 'Select Country'}</span>
              </span>
              <span className="text-gray-400">▼</span>
            </button>
            {showNationalityDropdown && (
              <div className="absolute left-0 z-10 w-full bg-white border border-gray-200 rounded shadow-lg max-h-48 overflow-y-auto mt-1">
                {COUNTRIES.map(country => (
                  <div key={country.name} className="px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center" onMouseDown={() => { setNationality(country); setShowNationalityDropdown(false); }}>
                    <span className="text-2xl mr-2">{country.flag}</span>
                    <span className="text-black ml-0.5" style={{marginLeft: 0}}>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Phone Number</label>
          <div className="relative flex items-center">
            <button type="button" className="pl-4 pr-2 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 flex items-center" onClick={() => setShowPhoneCountryDropdown(v => !v)}>
              <span className="flex items-center">
                <span className="text-2xl mr-2">{phoneCountry?.flag || '🏳️'}</span>
                <span className="text-black ml-0.5" style={{marginLeft: 0}}>{phoneCountry?.name || 'Select Country'}</span>
              </span>
              <span className="text-gray-400 ml-2">▼</span>
            </button>
            {showPhoneCountryDropdown && (
              <div className="absolute left-0 z-10 w-64 bg-white border border-gray-200 rounded shadow-lg max-h-48 overflow-y-auto mt-1">
                {COUNTRIES.map(country => (
                  <div key={country.name} className="px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center" onMouseDown={() => { setPhoneCountry(country); setShowPhoneCountryDropdown(false); }}>
                    <span className="text-2xl mr-2">{country.flag}</span>
                    <span className="text-black ml-0.5" style={{marginLeft: 0}}>{country.name}</span>
                  </div>
                ))}
              </div>
            )}
            <input className="w-full pl-4 pr-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 text-center ml-2" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, '') })} />
          </div>
        </div>
        {/* Row 5 */}
        <div>
          <label className="block text-gray-500 mb-1">Position</label>
          <div className="relative">
            <div className="w-full px-4 py-2 pr-8 bg-gray-100 text-black border-0 border-b border-gray-300 rounded-none mb-2 flex items-center flex-wrap gap-2 cursor-pointer min-h-[44px]" onClick={() => setShowPositionDropdown(!showPositionDropdown)} tabIndex={0} onBlur={() => setShowPositionDropdown(false)}>{positions.length === 0 ? (<span className="text-gray-400">Select up to 3 positions</span>) : (positions.map(pos => (<span key={pos} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{pos}</span>)))}</div>{showPositionDropdown && (<div className="absolute left-0 z-10 w-full bg-white border border-gray-200 rounded shadow-lg max-h-48 overflow-y-auto mt-1">{POSITIONS.map(pos => (<div key={pos} className={`px-4 py-2 cursor-pointer hover:bg-blue-100 flex items-center text-black ${positions.includes(pos) ? 'font-bold text-blue-700' : ''}`} onMouseDown={e => { e.preventDefault(); handlePositionToggle(pos); }}><input type="checkbox" checked={positions.includes(pos)} readOnly className="mr-2" tabIndex={-1} />{pos}</div>))}</div>)}<span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Email</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        {/* Row 6 */}
        <div>
          <label className="block text-gray-500 mb-1">Club</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.club || ''} onChange={e => setForm({ ...form, club: e.target.value })} />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">NIF</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.nif || ''} onChange={e => setForm({ ...form, nif: e.target.value.replace(/[^\d]/g, '') })} />
        </div>
        {/* Row 7 */}
        <div>
          <label className="block text-gray-500 mb-1">Club Code</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.clubCode || ''} onChange={e => setForm({ ...form, clubCode: e.target.value })} />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">CC nº</label>
          <div className="flex items-center">
            <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.cc || ''} onChange={e => setForm({ ...form, cc: e.target.value.replace(/[^\d]/g, '') })} />
            <span className="mx-2 text-gray-400">-</span>
          </div>
        </div>
        {/* Row 8 */}
        <div>
          <label className="block text-gray-500 mb-1">Player Certificate Number</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.certificate || ''} onChange={e => setForm({ ...form, certificate: e.target.value })} />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">User SNS nº</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" value={form.sns || ''} onChange={e => setForm({ ...form, sns: e.target.value.replace(/[^\d]/g, '') })} />
        </div>
        {/* Full width row for Create Your Account button */}
        <div className="col-span-2 flex justify-center mt-8">
          <button type="submit" className="w-1/2 bg-gray-200 text-black py-3 rounded-none text-xl font-bold shadow-sm border-0 flex items-center justify-center" disabled={!isFormComplete()}>
            Create Your Account
          </button>
        </div>
      </form>
    </div>
  );
} 