import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../services/firebase.js";
import React,{useContext, useState} from "react"
import './Signup.css';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import { UserContext } from "../App.js";
import axios from "axios";

const Login=() =>{
    // const [email, setEmail] = useState() 
    // const [password, setPassword] = useState()
    //  const [name, setName] = useState()
    //  const [role,setRole]=useState()
    const [userData,setUserData]=useState({
      name:"",
      email:"",
      password:"",
      role:"",
    })

    // const loginwithemail=(email,password) =>{

    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       // Signed in 
    //       const user = userCredential.user;
    //       console.log(user);
    //       navigate("/dashboard")
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // ..
    //     });
    //   }
    const getSignup=()=>{
      axios.post(`${
        process.env.REACT_APP_BASE_URL
      }/signup`,userData).then((response)=>{
        console.log(response.data)

        if(response.data.role === "admin") {
          navigate("/dashboard/admin");
        } else if(response.data.role === "student") {
          console.log('Navigating to /dashboard/student');
          navigate("/dashboard/student");
        } else if(response.data.role=== "instructor") {
          navigate("/dashboard/instructor");
          // handle other roles or default case
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    const handleOptionChange = (event) => {
      
      setUserData({

        ...userData,role:event.target.value
      })
      
     
        };


   
      // const navigateToPage = () => {
        
      //   switch (selectedOption) {
      //     case 'Admin':
      //       window.location.href = './components/Admin';
      //       break;
      //     case 'Instructor':
      //       window.location.href = './components/Instructor';
      //       break;
      //     case 'Student':
      //       window.location.href = './components/Student';
      //       break;
      //     default:
      //       break;
      //   }
      // };

      function handlesubmit(){
          console.log("calledsubmit");
      }
    const navigate=useNavigate();



    return (       
    
        <div className="main">
        <form className="sub-main" onSubmit={(e) => {
          
   e.preventDefault()
   getSignup()
  // loginwithemail(email, password);
  
  // navigate("/dashboard")
              
}}>
          <div>
                     
              <h1>Signup</h1>
              <div>
              <input type="text"  placeholder="Name" className="name"  onChange={(e)=>{ 
                  setUserData({
                    ...userData,name:e.target.value
                  })
                  
                }}/><br/><br/>

                <input type="text"  placeholder="Email" className="email"  onChange={(e)=>{ 
                   setUserData({
                    ...userData,email:e.target.value
                  })
                  
                  
                }}/>
              </div>
              <div className="second-input">
              
                <input type="password"  placeholder="Password" className="password" 
                 onChange={(e)=>{ 
                  setUserData({
                    ...userData,password:e.target.value
                  })
                  
                  
                }}/><br /><br />
                 {/* <input type="text" placeholder="Role" className="role" 3
                 onChange={(e)=>{ 
                  setRole(e.target.value)}}/> */}
<label for="role">Choose a role:&nbsp;  </label>
<select id="role"  className="rounded-none bg-slate-300" name="role" value={userData.role} onChange={handleOptionChange}>
  <option value="admin">Admin</option>
  <option value="instructor">Instructor</option>
  <option value="student">Student</option>
 
</select>
              </div>
             
             <div className="login-button">
            
             {/* <button onClick={(e)=>{
              e.preventDefault()
              loginwithemail(email,password);
              {navigateToPage}}}>Login </button> */}
        
             <button className="rounded-full bg-slate-800 text-white" >Register</button>
     </div>

              
              
               <div className='reg-link'>
                                <p>If account already exists then</p><Link className='link' to='/login'>Login!!</Link>
                            </div>
              
    
            
          </div>
          
   
        </form>
       </div>
     );
}
export default Login