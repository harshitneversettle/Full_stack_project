import React from "react";


import NavBar from "./components/NavBar";
import Body1 from "./components/Body1";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUpPage from "./components/SignUpPage";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import Body4 from "./components/Body4";
import AdminLogin from "./components/AdminLogin";
import AdminFood from "./components/AdminFood";
import Menupage from "./components/Menupage";

const App = () => {
  return (
    <div className="bg-pink-100 ">
      
    
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar />
                <Body1 />
                <Body2 />
                <Body3 />
                <Body4 />
              </div>
            }
          />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/admin-login" element={<AdminLogin /> } />
          <Route path="/addfood" element={<AdminFood/> } />
          <Route path="/services" element={<Menupage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
