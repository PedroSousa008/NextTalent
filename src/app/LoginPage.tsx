import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side: Logo and branding */}
      <div className="flex flex-col items-center justify-center w-1/2 bg-gray-50 p-8">
        <Image src="/logo.png" alt="Next Talent Logo" width={320} height={320} className="mb-6" />
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">Next Talent</h1>
          <div className="text-lg text-gray-600 mb-4">Ambition, Learn, Success, Journey, Opportunity</div>
        </div>
      </div>
      {/* Right side: Login form */}
      <div className="flex flex-col justify-center w-1/2 px-16">
        <form className="w-full max-w-md mx-auto">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="email">Email/Phone Number</label>
          <input id="email" type="text" className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />

          <label className="block text-gray-700 text-lg mb-2" htmlFor="password">Password</label>
          <div className="flex items-center mb-4">
            <input id="password" type="password" className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="button" className="px-4 py-2 bg-gray-200 rounded-r text-gray-700">Show</button>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded text-xl font-semibold hover:bg-blue-700 transition-colors mb-4">Log In</button>

          <div className="text-right mb-6">
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <div className="text-center mb-4">
            <span className="text-blue-700 text-xl font-semibold">Create a new account</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800 mb-8">
            <a href="#" className="hover:underline">As a Coach</a>
            <a href="#" className="hover:underline">As a Player</a>
            <a href="#" className="hover:underline">As an Agent</a>
          </div>
        </form>
        <footer className="flex justify-between text-sm text-gray-500 mt-8">
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Language</a>
        </footer>
      </div>
    </div>
  );
} 