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
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import Cart from "./components/Cart";
import Body5 from "./components/Body5";
import Map22 from "./components/Map22";

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
                <Body5 />
                <Footer />
              </div>
            }
          />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/addfood" element={<AdminFood />} />
          <Route path="/services" element={<Menupage />} />
          <Route path="/services/favourites" element={<Favourites />} />
          <Route path="/services/cart" element={<Cart />} />
          <Route path="/map" element={<Map22 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
