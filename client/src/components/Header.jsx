import React from 'react';

const Header = () => {

  return (
    <nav  className="flex items-center justify-between sticky bg-gray-800 text-xl  ">
      <a className="navbar-brand text-white " href="#">Couremy</a>
     

    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="h-full">
        <ul className="flex items-center justify-evenly gap-4 font-semibold 
         h-full">
          <li className=" ">
            <a className="no-underline  text-white  text-xl" href="/">Home</a>
          </li>
          <li className="">
            <a className="no-underline  text-white  text-xl" href="/about">About</a>
          </li>
        
          <li className="">
            <a className="no-underline  text-white text-xl" href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
