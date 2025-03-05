import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const response = await axios.post("http://localhost:3000/admin-login", {
        email,
        password,
      });
      console.log(response);
      if (response.data == true) {
        window.alert("logged in successfully");
        navigate("/addfood");
      } else {
        window.alert("bosdike firse try kro ");
      }
    } catch (error) {
      window.alert("login failed");
    }
  }
  return (
    <div className="login flex flex-col items-center justify-center bg-pink-100 w-full h-screen ">
    
      <div className="mainlogindiv flex flex-col justify-center items-center outline-solid w-120 m-auto bg-zinc-600 rounded-lg ">
      <h1 className="text-2xl text-white ">Login as Admin </h1>
        <div className="inputdiv flex flex-col w-full m-auto w-50% h-1/2 backdrop-blur rounded-lg ">
          <input
            type="text"
            placeholder="email"
            className="border-zinc p-3 m-4 bg-white outline-solid rounded-full "
            name="email "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-zinc p-3 m-4 bg-white outline-solid rounded-full"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="buttondiv m-4 flex flex-row justify-between ">
          <button
            className="submitbtn text-lg p-3 text-white rounded-full m-4 outline-solid cursor-pointer hover:bg-blue-300 w-20 "
            style={{ backgroundColor: "#033452" }}
            onClick={login}
          >
            Submit
          </button>
          <button
            className="resetbtn bg-blue-500 text-lg p-3 text-white rounded-full m-4 outline-solid cursor-pointer hover:bg-white w-20"
            style={{ backgroundColor: "#033452" }}
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
