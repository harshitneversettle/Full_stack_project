import React, { useState } from "react";
import MakeFoodCard from "./MakeFoodCard";

const Menupage = () => {
  const [downarrow, setDownArrow] = useState(true);
  const [dropdownfilter, setDropdownfilter] = useState(false);

  const [downarrowlanguage, setDownArrowlanguage] = useState(true);

  function handlefilter(e) {
    e.preventDefault();
    setDownArrow((prev) => !prev);
    setDropdownfilter((prev) => !prev);
  }
  function handlelanguage(e) {
    e.preventDefault();
    setDownArrowlanguage((prev) => !prev);
  }

  
  return (
    <>
      <div className="flex justify-between h-20 items-center">
        <h1
          className="text-6xl ml-4 "
          style={{ fontFamily: "Peralta, sans-serif" }}
        >
          Our Servings
        </h1>
        <input
          type="search"
          className="bg-white p-2 text-xl h-8 outline-black mx-10 mt-2 mr-25"
          placeholder="search"
        />
      </div>

      <div className="fooditems py-3 flex ">
        <div className="rightcontainer bg-pink-100">
          <MakeFoodCard />
        </div>
        <div className="leftcontainer  ">
          <div className="div fixed w-80 bg-pink-100 rounded-lg mt-3 outline-amber-600 h-200">
            <div className="uppercontainer  block ">
              <div className="filter mb-4">
                <button
                  className="bg-white px-3 py-1 text-lg outline-1 rounded-lg flex items-center justify-center"
                  onClick={handlefilter}
                >
                  Filter{" "}
                  {downarrow ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 ml-2 mt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 ml-2 mt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </button>
                <div className="bg-white ">
                  {dropdownfilter && <div className="w-20 p-2"></div>}
                </div>
              </div>
              <div className="favourites bg-white text-lg outline-1 rounded-lg mb-4 px-3 py-1 w-max">
                <button className="flex items-center justify-center">
                  Favourites
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-5 fill-red-600 ml-1 items-center justify-center"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="language mb-4 ">
                <button
                  className="bg-white px-3 py-1 text-lg outline-1 rounded-lg flex items-center justify-center"
                  onClick={handlelanguage}
                >
                  Select language{" "}
                  {downarrowlanguage ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 ml-2 mt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 ml-2 mt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="promo">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="bg-white px-2 py-1"
                />
                <span className="bg-yellow-400 px-3 py-1 outline ">Done</span>
              </div>
            </div>
            <div className="lowercontainer flex flex-col mt-90 ">
              <button className="bg-white px-3 py-1 rounded-lg outline mb-4 w-32 ">
                Your orders{" "}
              </button>
              <button className="bg-white px-3 py-1 rounded-lg outline mb-4 w-32 flex items-center justify-center  ">
                View cart{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="blue-700"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </button>
              <button className="bg-white px-3 py-1 rounded-lg outline mb-4 w-32 flex items-center justify-center  ">
                Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menupage;
