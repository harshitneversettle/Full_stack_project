import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";



const MakeFoodCard = () => {
  const [foodlist, setfoodlist] = useState([]);
  const [loading , setloading ] = useState(false) ;

  useEffect(() => {
    setloading(true) ;
    const getlist = async () => {
      try {
        const response = await axios.get("/foodlist");
        setfoodlist(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("error occured " );
      }
    }
    setloading(false)
    getlist();
  }, []);

  return (
    <div className=" grid grid-cols-4 h-full ml-4 mr-8">
    {loading ? <h1>Data is loading ..... please wait .</h1> : <h1></h1>}
      {foodlist.map((i) => {
        console.log(foodlist)
        return (
             foodlist.length > 0 ?
          (<FoodCard
            key={i._id}
            name={i.name}
            price={i.price}
            about={i.about}
            type={i.type}
            discount={i.discount}
            image={i.image}
          />) : <h1>No food items available</h1>
        );
      })}
    </div>
  );
};

export default MakeFoodCard;
