import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const response = await axios.post("https://seven-spices-1.onrender.com/api/admin-login", {
        email,
        password,
      } , {
        withCredentials : true 
      });
      
      if (response.data == true) {
        window.alert("Logged in successfully");
        navigate("/addfood");
      } else {
        window.alert("try again");
      }
    } catch (error) {
      window.alert("Login failed");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
      {/* Main Login Div */}
      <div className="flex flex-col justify-center items-center bg-gray-800 text-white p-8 rounded-2xl shadow-2xl w-96">
        <h1 className="text-3xl font-semibold mb-6">Login as Admin</h1>

        {/* Input Fields */}
        <div className="w-full space-y-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          {/* Submit Button */}
          <button
            className="px-5 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300"
            onClick={login}
          >
            Submit
          </button>

          {/* Home Button */}
          <button
            className="px-5 py-3 rounded-lg text-white bg-red-500 hover:bg-red-400 transition-all duration-300"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
