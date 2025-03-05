import React from "react";
const Body3 = () => {
  return (
    <>
      <div
        className=" m-auto relative "
        data-ratio="0.5625"
      >
        <video
          src="https://vid.cdn-website.com/ed715a1f/videos/rTOYlvE9S6TlMN4Q8ylv_Masala+Pizza+++D3+2-v.mp4"
          autoPlay="autoplay"
          loop
          muted
          className="h-140 w-655 object-fit mt-3 outline-black object-cover bg-black"
        ></video>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" >
          <h1
            className="text-white text-5xl "
            style={{ fontFamily: "Peralta, sans-serif", lineHeight:1.5 }}
          >
            TASTE THE FUSION
          </h1>
          <h1
            className="text-white text-5xl "
            style={{ fontFamily: "Peralta, sans-serif" }}
          >
            LOVE THE FLAVOR
          </h1><br></br>
          <button className="text-white text-lg bg-yellow-500 p-3 rounded-full hover:bg-yellow-200 hover:text-black hover:scale-103 duration-300 hover:outline-zinc-600 cursor-pointer translate-x-50">VIEW OUR MENU</button>
        </div>
      </div>
    </>
  );
};

export default Body3;
