import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";

const MakeFoodCard = () => {
  const [foodlist, setFoodList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getlist = async () => {
      try {
        const response = await axios.get("http://localhost:1504/api/foodlist" , {withCredentials : true });
        setFoodList(response.data);
      
      } catch (error) {
        console.log("Error occurred");
      }
      setLoading(false);
    };
    getlist();
  }, []);

  return (
    <div className="flex flex-wrap gap-16">
      {loading ? (
        <h1 className="text-xl font-semibold text-gray-700">Data is loading... Please wait.</h1>
      ) : (
        <>
          {/* Food List */}
          {foodlist.length > 0 ? (
            foodlist.map((i) => (
              <FoodCard
                key={i._id}
                name={i.name}
                price={i.price}
                about={i.about}
                type={i.type}
                discount={i.discount}
                image={i.image}
                heart = {true}
                button_info={'Add to cart'}
                className=""
              />
            ))
          ) : (
            <h1 className="text-xl font-semibold text-red-500 col-span-full text-center">
              No food items available
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default MakeFoodCard;
