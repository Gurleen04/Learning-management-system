import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import React,{useState} from "react";
import Assignment from "./components/Assignments";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from 'react-router-dom';

import Landing from './components/Landing';
import About from './components/About';
import Admin from './components/Admin';
import Login from "./components/Login";
import Signup from './components/Signup';
import Student from "./components/Student";
import Coursedetails from "./components/Coursedetails"
import Form from "./components/Form";
import Payment from './components/Payment';
import MyCourse from './components/MyCourse';
import Coursebooking from './components/Coursebooking';



// HERE FOR ROUTING WE HAVE TO DEFINE PATHS SO 
// THROUGH REACT-ROUTER WE CAN ROUTE AND GIVE THE PATH TO INDIVIDUAL COMPONENTS
const defaultValue={
  role:"guest"

}
export const UserContext = React.createContext(defaultValue);

function App() {
 
  const [uservalue, setuservalue] = useState(defaultValue) 
  
  const location=useLocation()
  console.log(location)

  return (
    
    <UserContext.Provider value={[uservalue,setuservalue]}>
      <div className="App">
       {
        location.pathname.includes("dashboard")||location.pathname.includes("student")||
        location.pathname.includes("profile")||location.pathname.includes("MyCourse")||location.pathname.includes("Coursebooking")?null:
        <Header
        dark={true}
        headerClassName="justify-content-center"
        className="Header"
      >
        
      </Header>
       }
           
       

       
        <Routes>
        <Route exact path="/"  element={<Landing />} />
       
         
    <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Form" element={<Form/>}/>
  <Route path="/Coursebooking" element={<Coursebooking/>}/>
  <Route path="/Assignment" element={<Assignment/>}/>

<Route path="/Payment" element={<Payment/>}/>
  
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/student" element={<Student/>}/>
  <Route path="/MyCourse" element={<MyCourse/>}/>

     <Route path="/course/:id" element={<Coursedetails/>}/>  
     <Route path="/" component={Student} />
     
      <Route path="/admin" element={<Admin/>}/>
     
        </Routes>
        <Footer
          dark={true}
          headerClassName="justify-content-center"
          className="Header"
        >
          
        </Footer>

      </div>
      </UserContext.Provider>
    
  );
}

export default App;