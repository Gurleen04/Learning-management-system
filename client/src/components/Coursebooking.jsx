import React from "react";

import { Link } from 'react-router-dom';


const Coursebooking=()=>
{
    return(
        <div>
            <div className="main items-center text-3xl font-semibold">
                <p>
                   Congratulations! You have been successfully enrolled into the course.<br/><br/>
                   <a href="Profile" className="text-lg text-black justify-left!">Go back to your profile!</a><br/>
                   <Link to='/' className="text-lg text-black justify-left!">Logout</Link><br/>
               
                </p>
                <img alt="celebrate" src="/images/celebration.png"></img>
                
              
            </div>


        </div>
    );
};
export default Coursebooking;