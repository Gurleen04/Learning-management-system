import React, { useContext } from'react';
import { UserContext } from '../App';
import Instructor from './Instructor';
import Student from './Student';
import Header2 from './Header2';



const Admin=()=>{
    return(
        <div>
           
        </div>
    );
};

const Dashboard=() =>{
    const [User,setUser]=useContext(UserContext)
    console.log(User)


    return(
        <div>
         <Header2
        dark={true}
        headerClassName="justify-content-center"
        className="Header"
      >
        
      </Header2>
           
            {
                //User.role==="instructor"?<Instructor/>:"student"?<Student/>:<Admin/>
                User.role==="instructor"?<Instructor/>:User.role==="student"?<Student/>:<Admin/>
            }
  
      
        </div>
        

    );
};
export default Dashboard