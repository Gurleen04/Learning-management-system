import {signInWithEmailAndPassword} from "firebase/auth";
import React,{useState} from "react";
import {auth} from "../services/firebase.js";
import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";


// const loginemail=(email,password) =>{



// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
// }




const Login=() =>{
    // const [email, setEmail] = useState() // this is used to define/set a state variable
    // const [password, setPassword] = useState()

    const [userData,setUserData]=useState({
       email:"",
      password:"",

    })
    const navigate= useNavigate();

    const getLogin=()=>{
      axios.post(`${
        process.env.REACT_APP_BASE_URL
      }/login`,userData).then((response)=>{
        console.log(response.data)

        if(response.data.role === "admin") {
          navigate("/dashboard/admin");
        } else if(response.data.role === "student") {
          console.log('Navigating to /dashboard/student');
          navigate("/student");
        } else {
          // handle other roles or default case
        }
      })
      .catch((error)=>{
        console.log(error)
      })
    }





    return (

        <div className="main">
        <form className="sub-main"  onSubmit={(e) => {
          
          e.preventDefault()
          getLogin()
         // loginwithemail(email, password);
         
         // navigate("/dashboard")
                     
       }}>
          <div>

              <h1>Login Page</h1>
              <div>

                <input type="text" placeholder="Email" className="email" onChange={(e)=>{
               setUserData({
                ...userData,email:e.target.value
              })

                }}/>
              </div>
              <div className="second-input">

                <input type="password" placeholder="Password" className="password"
                onChange={(e)=>{
                  setUserData({
                    ...userData,password:e.target.value
                  })}}/>
              </div>
             <div className="login-button">
             <button className=" rounded-full bg-slate-800 text-med text-white" 
            //  onClick={(e)=>{
            //   e.preventDefault()
            //   loginemail(email,password)
            //  }}
             >
              Login</button>
             </div>


               <p className="link">
               <Link className='link' to='/signup'>Register Now</Link>
               </p>



          </div>


        </form>
       </div>
     );
}
export default Login