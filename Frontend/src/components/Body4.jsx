import React from 'react'

const Body4 = () => {
  return (
    <div className=' w-full h-full flex flex-row mt-10'>
    <div className="w-full h-full textdiv mt-10 ml-10">
    <h1 className=' text-5xl font-bold text-center ' style={{ fontFamily: "Gorditas, sans-serif", lineHeight:1.5 }}>CATERING TO YOUR EVERY</h1>
    <h1 className=' text-5xl font-bold text-center ' style={{ fontFamily: "Gorditas, sans-serif" }}>CRAVING, EVERY OCCASION</h1>
    <p className='text-xl text-justify ml-8 mt-5 ' style={{ lineHeight:1.5 }}>Seven Spices is the ultimate crowd-pleaser for parties and wedding receptions! It's like a flavor explosion in every bite, with its spicy kick and savory dishes. The perfect catering choice for parties, weddings, & more.</p>

    </div>
    <div className="w-full h-full imagediv">
    <div className="imagecard">
        <img src="https://www.one8.com/uploads/image/Laravel-6150aca54801d2.90299986mwvskt75.jpg" alt="image" className='w-85 h-85 rounded-lg m-auto'  />
    </div>
    </div>
    </div>
  )
}

export default Body4
