import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-slate-700">
          Task<span className="text-blue-600">Manager</span>
        </h1>

        <div className="flex items-center gap-4 text-sm">
          {!isAuthenticated() ? (
            <>
              <Link to="/login" className="text-slate-600 hover:text-blue-600">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/tasks" className="text-slate-600 hover:text-blue-600">
                Tasks
              </Link>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
