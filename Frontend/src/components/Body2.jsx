import React from "react";

const Body2 = () => {
  return (
    <div
      className="bg-black w-full h-screen mt-65 "
      style={{ backgroundColor: "#f5f5dc" }}
    >
      <div className="heading font-ChristopherDone h-full w-full object-cover relative">
        <img
          src="https://img.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg?t=st=1738211874~exp=1738215474~hmac=9843fd8cfe378f8c334beb553da7fed3226fec5f0dcef69e35be4addaba47206&w=1380"
          alt=""
          className=" w-full h-full absolute outline"
        />
        <img
          src="https://www.one8.com/uploads/image/Laravel-6150ab51e03340.76792423otb($cj0.jpg"
          alt=""
          className="absolute pr-6 pt-35 pl-3 rounded-md outline"
        />
        
      </div>
      <button className="bg-yellow-500 rounded-full p-3 text-lg outline-6 outline-orange-600 hover:bg-yellow-200 hover:outline-zinc-600 hover:scale-105 duration-200 translate-x-300 -translate-y-23 cursor-pointer">Click for bookings </button>
    </div>
  );
};

export default Body2;
