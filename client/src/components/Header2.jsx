import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
 
  return (
    <nav className="flex items-center  justify-between sticky bg-gray-700 text-lg">

      <a className="navbar-brand text-white"  href="#">Couremy</a>
     

    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="">
        <ul className="flex place-items-center justify-evenly gap-4 font-semibold ">
          <li className="">
            <a className="no-underline  text-white  text-lg font-medium" href="/">Development</a>
          </li>
          <li className="">
            <a className="no-underline  text-white text-lg font-medium" href="/about">Business</a>
          </li>
        
          <li className="">
            <a className="no-underline  text-white  text-lg font-medium" href="/login">Finance</a>
          </li>
          <li className="">
            <a className="no-underline  text-white  text-lg font-medium" href="/about">Health</a>
          </li>
          <li className="">
            <a className="no-underline  text-white  text-lg font-medium" href="/about">Business</a>
          </li>&nbsp;
          <li className="">
            <a className="no-underline  text-white  text-lg font-medium" href="/MyCourse">My courses</a>
          </li>
          <div class="container-fluid">
          <li class="">
			 	
    <a class="no-underline  text-white  text-lg font-medium" aria-current="page" href="/profile">

      <FontAwesomeIcon icon={faUser} className="text-xl text-left" />&nbsp;
    
    My profile
    </a>
    
    </li>
   
  </div>
  
        </ul>
      </div>
    </nav>
  );
}

export default Header;
