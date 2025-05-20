'use client';

export default function LoginPlayer() {
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
            <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 pointer-events-none">▼<span className="ml-1">kg</span></span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Last Name</label>
          <input className="w-full px-4 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Hight</label>
          <div className="relative">
            <input className="w-full px-4 py-2 pr-14 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-gray-400 pointer-events-none">▼<span className="ml-1">m</span></span>
          </div>
        </div>
        <div>
          <label className="block text-gray-500 mb-1">Date of Birthday</label>
          <div className="relative">
            <input className="w-full px-4 py-2 pr-10 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">📅</span>
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
            <input value="I am…" readOnly className="w-full px-4 py-2 pr-8 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2" />
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
          <div className="relative flex items-center">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl">🇵🇹</span>
            <input value="+351" readOnly className="w-24 pl-12 pr-2 py-2 bg-gray-100 text-gray-700 border-0 border-b border-gray-300 rounded-none focus:outline-none focus:ring-0 mb-2 mr-2" />
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