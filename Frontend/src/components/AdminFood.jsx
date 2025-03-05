import axios from "axios";
import React, { useState } from "react";

const AdminFood = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [about, setAbout] = useState("");

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/addfood", {
        name,
        type,
        price,
        discount,
        image,
        about ,
      });
      console.log(response);

    } catch (error) {
      console.log(" an error occured ");
    }
    
  }

  return (
    <div>
    
      <div className="login flex  items-center justify-center bg-pink-100 w-full h-screen ">
     
        <div className="mainlogindiv flex flex-col justify-center items-center outline-solid w-120 m-auto  bg-zinc-600 rounded-lg">
        <h1 className="text-2xl text-white mb-3 ">Add food items </h1>
          <div className="inputdiv flex flex-col w-full m-auto w-50% h-1/2 backdrop-blur ">
            {/* name */}
            <input
              type="text"
              placeholder="Name"
              className="border-zinc p-3 m-4  bg-blue-100  outline-solid rounded-full "
              name="type"
              onChange={(e) => setName(e.target.value)}
            />

            {/* email */}
            <input
              type="type"
              placeholder="Type"
              className="border-zinc p-3 m-4 bg-blue-100 outline-solid rounded-full "
              name="type"
              onChange={(e) => setType(e.target.value)}
            />

            {/*  password */}
            <input
              type="price"
              placeholder="price"
              className="border-zinc p-3  bg-blue-100  m-4 outline-solid rounded-full"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />

            {/* contactNo */}
            <input
              type="Number"
              placeholder="Discount"
              className="border-zinc p-3 m-4  bg-blue-100  outline-solid rounded-full "
              name="Discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <input
              placeholder="image link"
              className="border-zinc p-3 m-4  bg-blue-100  outline-solid rounded-full "
              name="image"
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              placeholder="about"
              className="border-zinc p-3 m-4  bg-blue-100  outline-solid rounded-full "
              name="image"
              onChange={(e) => setAbout(e.target.value)}
            />
          </div>

          {/* buttons  */}
          <div className="buttondiv m-4">
            {/* submit button */}
            <button
              className="submitbtn bg-blue-500 text-lg p-3 text-white rounded-full m-4 outline-solid cursor-pointer hover:bg-blue-300 "
              style={{ backgroundColor: "#033452" }}
              onClick={handlesubmit}
            >
              Submit
            </button>

            {/* resetButton */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFood;
