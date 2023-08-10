import React,{useEffect, useState} from "react";
import teacher from "../images/teacher.png";
import book from "../images/book.png";
import money from "../images/money.png";
import ux from "../images/ux.jpeg";
import axios from "axios";
import './Landing.css';
const getLogin=()=>{
  axios.get("http://localhost:8080/get").then((response)=>{
    console.log(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
}
const Landing = () => {
  useEffect(()=>{
    getLogin()
  },[])
  return (


 

    <div>


    <section id="home" class="home container-fluid p-0">
  
    <div className="row hero">
      <div className="col pl-3 ml-sm-5 p-0">
        <h1 className="text1">Invest in your future today!!!</h1>
        </div>
      </div>
    
</section>
<div className="feature-section flex flex-row items-center justify-center min-h-screen">
<h1>Why choose us &nbsp;&nbsp;</h1><br/><br/>
<div className="feature-block div-1 items-center justify-center" >
    
    <img src={teacher} alt="My Image" className="feature-icons" />
    <h4>Learn from the best</h4>
</div>
<div className="feature-block div-2">
    
    <img src={book} alt="My Image" className="feature-icons" />
    <h4>Set your own learning pace</h4>
</div>
<div className="feature-block div-3">
    
    <img src={money} alt="My Image" className="feature-icons" />
    <h4>Regular offers</h4>
</div>
</div>
<div className="courses">
  <h1>Our Courses</h1>

  <div class="container">
  <div class="row">
    <div class="col-sm">
    <img className="card-img-top" src={ux} alt="Card image cap" />
                      <div class="card-body">
                        <h5 class="card-title" name="title">Basics of UX design</h5>     <br/>                      
                        <a href="bookingpagemovies.html" class="btn btn-dark">Find out more</a>
                      </div>
    </div>
    <div class="col-sm">
    <img className="card-img-top" src="/images/python.png"alt="Card image cap" />
                      <div class="card-body">
                      <h5 class="card-title" name="title">Basics of python</h5> <br/>                     
                        <a href="bookingpagemovies.html" class="btn btn-dark">Find out more</a>
                      </div>

    </div>
    <div class="col-sm">
    <img className="card-img-top" src="images/ethical.avif" alt="Card image cap" />
                      <div class="card-body">
                      <h5 class="card-title" name="title">Ethical hacking</h5>        <br/>                   
                        <a href="bookingpagemovies.html" class="btn btn-dark">Find out more</a>
                      </div>
    </div>
  </div>
</div>
  </div>
  
  </div>
                  


  
       
      
  
  );
};

export default Landing;