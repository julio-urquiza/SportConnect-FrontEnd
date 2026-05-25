import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-green-400 hover:text-green-300 transition"
        >
          SportConnect
        </Link>

        {/* Links */}
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="hover:text-green-400 transition"
          >
            Home
          </Link>

          <Link
            to="/login"
            className="hover:text-green-400 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;