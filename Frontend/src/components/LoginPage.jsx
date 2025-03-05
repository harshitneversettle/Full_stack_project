import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";


const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log(response);
      if (response.data == true) {
        window.alert("logged in successfully");
        navigate("/");
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

        <div className="quotation flex flex-row justify-between w-full  ">
          <Link
            to="/admin-login"
            className="text-white cursor-pointer hover:text-red-600 pl-2"
          >
            Admin login ?
          </Link>
          <Link
            to="/sign-Up"
            className="text-white cursor-pointer hover:text-red-600 pr-2"
          >
            Don't have an account ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
