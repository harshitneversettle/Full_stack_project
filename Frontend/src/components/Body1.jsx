import React, { useState } from "react";

import Carousel from "../components/ui/carousel.jsx";

const Body1 = () => {

/*   const [curridx, setCurridx] = useState(0);

  function leftclick() {
    const isfirstslide = curridx === 0;
    const newidx = isfirstslide ? data.length - 1 : curridx - 1;
    setCurridx(newidx);
  }
  function rightclick() {
    const isLastslide = curridx === data.length - 1;
    const newidx = isLastslide ? 0 : curridx + 1;
    setCurridx(newidx);
  } */
  const slideData = [
    {
      title: "Food 1 ",
      button: "Explore ",
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Food 2",
      button: "Explore",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Food 3",
      button: "Explore",
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Food 4",
      button: "Explore",
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  
  return (
    
    <div className="relative overflow-hidden w-full h-full py-20 ">
      <Carousel slides={slideData} />
    </div>
  );
};

export default Body1;
