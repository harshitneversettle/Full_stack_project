import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const AdminFood = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check_token = async () => {
      const response = await axios.post(
        "https://seven-spices-1.onrender.com/api/check-token-admin",
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.data != "Token is available") {
        window.alert("No token 😑 , go back intruder");
        navigate("/admin-login");
      }
    };
    check_token();
  }, []);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://seven-spices-q11n.onrender.com/api/addFood", {
        name,
        type,
        price,
        discount,
        image,
        about,
      } , {withCredentials : true });
      alert(response.data);
    } catch (error) {
      console.log("An error occurred");
    }
  }

  return (
    <div className="flex items-center justify-center  bg-pink-200 min-h-screen">
      <div className="flex flex-col items-center bg-gray-900 p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl text-white font-semibold mb-5">
          Add Food Item
        </h1>

        <div className="w-full">
          {/* name */}
          <input
            type="text"
            placeholder="Name"
            className="input-field"
            onChange={(e) => setName(e.target.value)}
          />

          {/* type */}
          <input
            type="text"
            placeholder="Type"
            className="input-field"
            onChange={(e) => setType(e.target.value)}
          />

          {/* price */}
          <input
            type="number"
            placeholder="Price"
            className="input-field"
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* discount */}
          <input
            type="number"
            placeholder="Discount (%)"
            className="input-field"
            onChange={(e) => setDiscount(e.target.value)}
          />

          {/* image */}
          <input
            type="text"
            placeholder="Image Link"
            className="input-field"
            onChange={(e) => setImage(e.target.value)}
          />

          {/* about */}
          <input
            type="text"
            placeholder="About"
            className="input-field"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        {/* buttons */}
        <div className="mt-5">
          {/* submit button */}
          <button className="submit-btn" onClick={handlesubmit}>
            Submit
          </button>
        </div>
      </div>

      {/* Tailwind Utility Styles */}
      <style>{`
        .input-field {
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 8px;
          border: none;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          outline: none;
          transition: all 0.3s;
        }
        .input-field::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .input-field:focus {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .submit-btn {
          background-color: #007bff;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s;
        }
        .submit-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default AdminFood;
