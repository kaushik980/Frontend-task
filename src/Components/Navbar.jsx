import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth(); 

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      {/* Logo or Brand Name */}
      <Link to="/" className="text-2xl font-bold">MyApp</Link>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>

        
        {!user ? (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
          </>
        ) : (
          <>
            
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <button 
              onClick={logout} 
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
