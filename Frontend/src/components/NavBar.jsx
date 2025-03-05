import React, { useState } from "react";
import { Link} from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const NavBar = () => {
  const[loggedin , setLoggedin] = useState(true) ;
  const[drop , setDrop ] = useState(false) ;
  function dropdown(e){
    setDrop((prev)=>!prev)
    
  }
  return (
    
    // left component
    <div className="navbar flex justify-between bg-zinc-600 w-full h-auto ">
      <div className="leftcomponents flex ">
        <div className="image ">
          <img
            src="https://i.postimg.cc/qM1crthK/Screenshot-2024-07-25-155536.png"
            alt="H7 logo"
            className="rounded-full w-24 p-1"
          />
        </div>
        <div className="name text-4xl font-semibold m-auto ml-2">
          Seven Spices
        </div>
      </div>

      {/* left component */}
      <div className="rightcomponents flex space-x-6 mr-5 text-l m-auto  ">
        <Link
          to="/"
          className="one text-lg hover:curser-pointer hover:underline hover:text-white duration-150"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="Two text-lg hover:curser-pointer hover:underline hover:text-white duration-150"
        >
          Services
        </Link>
        <div>
        <Link
          className="Three text-lg hover:curser-pointer hover:underline hover:text-white duration-150 "
          onClick={dropdown}
        >
          Connect us
        </Link>
        {
        drop && <ul className="text-black outline-black border-2 p-4 absolute rounded-lg text-xl bg-pink-200 leading-12 duration-500 ease-in-out  ">
        <li><FontAwesomeIcon icon={faGithub} /> <Link to={"https://github.com/harshitneversettle"} className="hover:text-zinc-400"> Github </Link>   </li>
        {/* <li><FontAwesomeIcon icon={faTelegram} /> <Link to={"https://www.telegram.com/"}> Telegram </Link></li> */}
        <li><FontAwesomeIcon icon={faInstagram} /> <Link to={"https://www.instagram.com/"} className="hover:text-zinc-400"> Instagram  </Link></li>
        <li><FontAwesomeIcon icon={faLinkedin} /> <Link to={"https://www.linkdin.com/"} className="hover:text-zinc-400"> Linkdin </Link></li>
      </ul>
      }
        </div>
        <Link
          to="/login-page"
          className="four text-lg hover:curser-pointer hover:underline hover:text-white duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
      </div>
      
      
    
    </div>
  );
};

export default NavBar;
