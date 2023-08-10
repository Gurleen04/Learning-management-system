import React from "react";
import './Profile.css';
import user from '../images/user.png';
import Header3 from "./Header3";
import { useState } from "react";



const Profile=()=>{
    return(
        <div>
 <div>
         <Header3
        dark={true}
        headerClassName="justify-content-center"
        className="Header"
      >
        
      </Header3>
           </div>
<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src={user} alt="student dp"></img>
            <h3>User Name:</h3>
          </div>
          <div class="card-body">
            <p><strong class="pr-1">Email Id:</strong>321000001</p>
            
            <p ><strong class="pr-1">Courses Enrolled:</strong>321000001</p>
            <p ><strong class="pr-1">Courses Completed:</strong>321000001</p>
            <p ><strong class="pr-1">Certificates:</strong>321000001</p>            
           
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>YOUR COURSES</h3>
          </div>
          {/* <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">Roll</th>
                <td width="2%">:</td>
                <td>125</td>
              </tr>
              <tr>
                <th width="30%">Academic Year	</th>
                <td width="2%">:</td>
                <td>2020</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th width="30%">Religion</th>
                <td width="2%">:</td>
                <td>Group</td>
              </tr>
              <tr>
                <th width="30%">blood</th>
                <td width="2%">:</td>
                <td>B+</td>
              </tr>
            </table>
          </div> */}

          <div className="course1">
            <p>
              How to play the piano
            </p>
            <p className="certificate">
              Certificate &nbsp;&nbsp;&nbsp;&nbsp; 
              Status
            </p>
            <p className="pro"> Course Progress Overview</p>
            
            <div>
           </div>
          
      </div>

    </div><br/>
    <div className="query">Have a query?<a href="/Form" className="text-lg text-white" >Raise it!!</a></div>
  </div>
  
</div>
</div></div></div>
      
    );
    
};
export default Profile;