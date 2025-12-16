import { useState } from "react";
import api from "../api/axios";
import { saveToken } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await api.post("/auth/login", { email, password });
    saveToken(res.data.token);
    navigate("/tasks");
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-center mb-6 text-slate-700">
          Welcome back
        </h2>

        <input
          className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-slate-500 mt-4">
          No account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
