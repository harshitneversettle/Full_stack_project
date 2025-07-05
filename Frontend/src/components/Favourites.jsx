import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { useNavigate } from "react-router";

const Favourites = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const check_token = async () => {
      const response = await axios.get("https://seven-spices-1.onrender.com/api/check-token", {
        withCredentials: true,
      });
      if (response.data !== "Token is available") {
        window.alert("No token 😑 , go back intruder");
        navigate("/login-page");
      }
    };
    check_token();
  }, []);
  const [favlist, setfavList] = useState([]);
  useEffect(() => {
    const getfavitems = async () => {
      try {
        const favitem = await axios.get("https://seven-spices-1.onrender.com/api/get-favourites");
        setfavList(favitem.data);
        console.log(favitem.data);
      } catch (error) {
        console.log("error");
      }
    };

    getfavitems();
  }, []);
  return (
    <div className=" h-screen">
      <h1
        className="text-5xl font-bold text-gray-800 mb-10 ml-2 p-2 border-b-2 w-fit"
        style={{ fontFamily: "Peralta, sans-serif" }}
      >
        Favourites
      </h1>
      <div className="p-4">
        <div className="flex flex-wrap gap-16 ">
          {favlist.length > 0 ? (
            favlist.map((i) => (
              <FoodCard
                key={i._id}
                name={i.name}
                price={i.price}
                about={i.about}
                type={i.type}
                discount={i.discount}
                image={i.image}
                button_info={'Remove favourites '}
                className=""
              />
            ))
          ) : (
            <h1 className="text-xl font-semibold text-red-500 col-span-full text-center">
              No food items available
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
