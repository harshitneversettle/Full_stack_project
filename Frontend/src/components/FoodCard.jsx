import React, { useState } from "react";
import axios from "axios";

const FoodCard = ({
  name,
  price,
  about,
  discount,
  image,
  type,
  heart,
  button_info,
}) => {
  const [show, setShow] = useState(false);
  const [favourite, setfavourite] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  function maketrue(e) {
    setShow((prev) => !prev);
  }
  function makefalse(e) {
    setShow((prev) => !prev);
  }

  function handlefavourite(e) {
    e.preventDefault();
    setfavourite((prev) => !prev);
  }

  async function addToFavourite(e) {
    e.preventDefault();
    const result = await axios.post("http://localhost:1504/api/favourites", {
      name,
      type,
      price,
      discount,
      image,
      about,
      heart,
      button_info,
    } , {withCredentials:true});
  }

  async function deleteFavourite(e) {
    e.preventDefault();
    const result = await axios.post("http://localhost:1504/api/delete-favourites", {
      name,
    } , {withCredentials: true});
  }

  async function cartfunction(e) {
    e.preventDefault();
    const nameofbutton = e.target.innerText;
    console.log(name);
    if (nameofbutton == "Remove from cart") {
      const response = await axios.post(
        "http://localhost:1504/api/removefromcart",
        {
          name,
        },
        { withCredentials: true }
      );
      setIsVisible(false);
      console.log(response.data);
    }else if(nameofbutton=="Remove favourites"){
      const response = await axios.post("http://localhost:1504/api/removefavourite" , {name} ,{withCredentials:true})
      setIsVisible(false)
      console.log(response.data)
    } else {
      const result = await axios.post("http://localhost:1504/api/addtocart", {
        name: name,
        image: image, 
        about,
        type,
        price: Number(price),
        discount: Number(discount),
      } , {withCredentials: true});
      console.log(result.data);
    }
  }
  return (
    <div className="">
      <div className="maincard bg-black w-65 h-80 rounded-lg m-auto ">
        <div className="comp p-3 align-middle ">
          <div className="image rounded-b-lg">
            <img
              className="w-60 h-40 rounded-lg m-auto  "
              src={image}
              alt="food image "
              style={{ boxShadow: "0px 0px 2px white " }}
              onMouseEnter={maketrue}
              onMouseLeave={makefalse}
            />
            {show && (
              <div
                className="about absolute w-60 h-auto min-h-40 text-black p-2 bg-white leading-6 rounded-md mt-2 whitespace-normal"
                style={{
                  outlineColor: "gold",
                  outlineWidth: "1px",
                  outlineStyle: "solid",
                  boxShadow: "0px 0px 15px gold ",
                }}
              >
                <div className="aboutcontainer text-wrap h-auto overflow-auto ">
                  {about}
                </div>
              </div>
            )}
          </div>
          <div className="info text-white leading-8 p-1.3 mt-2.5 ml-1.5 ">
            <h1 className=""> Name : {name} </h1>
            <h1> Type : {type}</h1>
            <div className="discount flex justify-between">
              <h1> Price : {price}/- </h1>
              <h1 className="text-green-600 font-" style={{ fontWeight: 800 }}>
                -{discount}%
              </h1>
            </div>
          </div>
          <div
            className={`cart ${
              heart ? "flex justify-between" : "flex justify-end"
            }`}
          >
            {heart ? (
              <button
                onClick={async (e) => {
                  handlefavourite(e);
                  if (!favourite) {
                    await addToFavourite(e);
                  } else {
                    await deleteFavourite(e);
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={favourite ? "red" : "white"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            ) : (
              [null]
            )}
            
            <button
              className=" bg-yellow-500 p-1.5 text-black text-sm rounded-lg cursor-pointer hover:bg-yellow-600 "
              onClick={cartfunction}
            >
              {button_info}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
