import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col items-center pt-12 px-4">
      {/* Logo centered at top */}
      <div className="w-full max-w-md">
        <img 
          src="/images/hero-logo.png" 
          alt="Bio-Sync Academy" 
          className="w-full h-auto"
        />
      </div>

      {/* Login link */}
      <div className="mt-8">
        <Link 
          to="/login" 
          className="text-blue-400 hover:text-blue-300 underline text-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
// trigger deploy
