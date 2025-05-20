import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-start pt-8">
      {/* Logo at the top */}
      <div className="flex flex-col items-center mb-8">
        <Image src="/logo.png" alt="Next Talent Logo" width={320} height={320} className="mb-4" />
      </div>
      {/* Login form and content below logo */}
      <div className="w-full max-w-md flex flex-col items-center">
        <form className="w-full">
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
        </form>
        <div className="text-center mb-4">
          <span className="text-blue-700 text-xl font-semibold">Create a new account</span>
        </div>
        <div className="flex justify-between w-full text-lg font-bold text-gray-800 mb-8">
          <a href="#" className="hover:underline">As a Coach</a>
          <a href="#" className="hover:underline">As a Player</a>
          <a href="#" className="hover:underline">As an Agent</a>
        </div>
      </div>
      <footer className="flex justify-between w-full max-w-md text-sm text-gray-500 mt-auto mb-4">
        <a href="#" className="hover:underline">Support</a>
        <a href="#" className="hover:underline">Terms</a>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Language</a>
      </footer>
    </div>
  );
} 