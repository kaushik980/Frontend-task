import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!"); 
  
    setTimeout(() => {
      navigate("/login"); 
    }, 2000); 
  };
  
  

  return (
    <>
    <ToastContainer position="top-center" autoClose={2000} />
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>

      {user ? (
        <>
          <p className="text-lg mb-2">Welcome, <span className="font-semibold">{user.email}</span>!</p>
          
          <div className="flex gap-4 mt-4">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>

            <a href="/home" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Go to Home
            </a>
          </div>
        </>
      ) : (
        <p className="text-lg text-red-500">
          Unauthorized Access! Please <a href="/login" className="text-blue-500">Login</a>.
        </p>
      )}
    </div>
  </>
  );
};

export default Dashboard;
