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
  const [loginError, setLoginError] = useState('');

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

  if (!showPasswordStep) {
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
          <button className="w-full bg-gray-200 text-black py-3 rounded-none text-xl font-bold shadow-sm border-0 flex items-center justify-center" onClick={() => router.push('/success')}>
            Create Your Account
          </button>
        </div>
      </div>
    );
  } else {
    // Login step
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
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-4"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-4"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-gray-200 text-black py-3 rounded-none text-xl font-bold shadow-sm border-0 flex items-center justify-center mb-2"
            onClick={() => {
              if (form.email === 'sousa.2003pedro@gmail.com' && password === 'Sousa10Pedro') {
                setLoginError('');
                router.push('/success');
              } else {
                setLoginError('Incorrect email or password.');
              }
            }}
          >
            Log In
          </button>
          {loginError && <div className="text-red-500 text-sm mt-2">{loginError}</div>}
        </div>
      </div>
    );
  }
} 