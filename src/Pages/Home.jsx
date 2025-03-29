import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Web App</h1>
      <p className="text-gray-700 mt-4">Secure and Responsive React Application</p>

      <div className="mt-6">
        <Link to="/signup" className="px-6 py-2 bg-green-500 text-white rounded-lg mr-4">Sign Up</Link>
        <Link to="/login" className="px-6 py-2 bg-blue-500 text-white rounded-lg">Login</Link>
      </div>
    </div>
  );
};

export default Home;
