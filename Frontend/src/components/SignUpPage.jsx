import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNo, setContactNo] = useState("");

  async function signup(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1504/api/signup", {
        username,
        email,
        password,
        contactNo,
      } , {
        withCredentials : true
      });
      console.log(response.data)
      navigate("/login-page");
    } catch (error) {
      console.log("Error happened while loading the data");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen from-pink-100 ">
      <div className="flex flex-col justify-center items-center bg-gray-800 text-white p-8 rounded-2xl shadow-2xl w-96">
        {/* Input Fields */}
        <div className="w-full space-y-4">
          {/* name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* contactNo */}
          <input
            type="number"
            placeholder="Contact No."
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="contactNo"
            onChange={(e) => setContactNo(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          {/* Submit Button */}
          <button
            className="px-5 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300"
            onClick={signup}
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

export default SignUpPage;
