import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './About.css';
import about from "../images/about.jpg";

const About =() =>{
    return(
    //     <div className="about">
    //         <div className="row align-items-center">
    //         <h1>ABOUT US</h1>
    //         </div>
    //         <div class="col-md-6 image">
    //         <img src={about} alt="My Image" />
    //         <br />
    //         <p className="aboutus">
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
    //     consequat varius. Curabitur congue orci non interdum auctor. Etiam
    //     maximus commodo justo, at fermentum erat ultricies sed. Quisque eu
    //     dapibus felis. Duis tincidunt dui vitae sapien lacinia, sed vulputate
    //     nunc blandit. Vestibulum a felis bibendum, iaculis nunc sit amet,
    //     volutpat erat. Phasellus ac lacus odio. Nulla lobortis dui vel dui
    //     consequat, et vulputate sapien maximus. Nullam finibus aliquet turpis,
    //     a vulputate est eleifend ac. Vivamus sed aliquam erat. Integer vel
    //     aliquam neque, ac pharetra nulla. Fusce fermentum dapibus turpis at
    //     fermentum. Morbi pulvinar ligula id consectetur ultrices. Phasellus sed
    //     neque sit amet dui euismod faucibus in sit amet diam.
    //      </p>
    //   </div>
        
    //     </div>
    <section className="about-us">
    <div className="about">
      <img src={about} className="pic" />
      <div className="text">
        <h2>About Us</h2>
        <p>Welcome to Couremy, the future of digital education.We've dedicated ourselves to revolutionizing the way learners engage with content and educators manage coursework. Our platform stands as a testament to the power of technology in the realm of education, merging accessibility with efficiency. Whether you're an educational institution seeking to expand your online reach, a corporation aiming to streamline training, or a learner looking for flexible study options, this platform provides a centralized, user-friendly solution. Driven by innovation and backed by state-of-the-art features, 
          we're committed to fostering a collaborative and dynamic learning environment for all.</p>
      </div>
    </div>
  </section>
    );
};
export default About;