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
      const response = await axios.post("/signup", {
        username,
        email,
        password,
        contactNo,
      });
      navigate("/login-page")
      
    } catch (error) {
      console.log("error happened while loading the data ")
    }
  }

  return (
    <div>
      <div className="login flex items-center justify-center bg-pink-100 w-full h-screen ">
        <div className="mainlogindiv flex flex-col justify-center items-center outline-solid w-120 m-auto  bg-zinc-600 rounded-lg">
          <div className="inputdiv flex flex-col w-full m-auto w-50% h-1/2 backdrop-blur ">
            {/* name */}
            <input
              type="text"
              placeholder="Name"
              className="border-zinc p-3 m-4  bg-blue-100  outline-solid rounded-full "
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* email */}
            <input
              type="email"
              placeholder="email"
              className="border-zinc p-3 m-4 bg-blue-100 outline-solid rounded-full "
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/*  password */}
            <input
              type="password"
              placeholder="Password"
              className="border-zinc p-3  bg-blue-100  m-4 outline-solid rounded-full"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* contactNo */}
            <input
              type="number"
              placeholder="ContactNo."
              className="border-zinc p-3 m-4  bg-blue-100  outline-solid rounded-full "
              name="contactNo"
              onChange={(e) => setContactNo(e.target.value)}
            />
          </div>

          {/* buttons  */}
          <div className="buttondiv m-4">
            {/* submit button */}
            <button
              className="submitbtn bg-blue-500 text-lg p-3 text-white rounded-full m-4 outline-solid cursor-pointer hover:bg-blue-300 "
              style={{ backgroundColor: "#033452" }}
              onClick={signup}
            >
              Submit
            </button>

            {/* resetButton */}
            <button
              className="resetbtn bg-blue-500 text-lg p-3 text-white rounded-full m-4 outline-solid cursor-pointer hover:bg-blue-300"
              style={{ backgroundColor: "#033452" }}
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;