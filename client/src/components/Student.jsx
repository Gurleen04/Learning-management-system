import React from "react";
import "./Student.css";
import Header2 from './Header2';
import { Link } from "react-router-dom";
const courses = [
  {
    id:1,
    title: "Basics of UX design",    
    image: "/images/ux.jpeg",
  
  },
  {
    id:2,
    title: "Complete Python Bootcamp",
    link: "bookingpagemovies.html",
    image: "/images/python.png",
  },
  {
    id:3,
    title: "Angular-The Complete Guide",
    link: "bookingpagemovies.html",
    image: "/images/angular.png",
  },
  {
    id:4,
    title: "The complete cybersecurity course",
    link: "bookingpagemovies.html",
    image: "/images/cyber.jpg",
  },
  {
    id:5,
    title: "Ethical hacking",
    link: "bookingpagemovies.html",
    image: "/images/ethical.avif",
  },
  {
    id:6,
    title: "Embedded systems and operating systems",
    link: "bookingpagemovies.html",
    image: "/images/os.png",
  },
  

];

const Student = () => {
  return (
    <div>
           <div>
         <Header2
        dark={true}
        headerClassName="justify-content-center"
        className="Header"
      >
        
      </Header2>
           </div>
      <div className="courses" >
        <h1>Most Popular Courses</h1>
        carousel
        <div class="container">
          <div class="grid grid-cols-3 gap-4 " >
            {
              courses.map((item)=>( 
              <div className="courses-container" >
              <img
                className="card-img-top"
                id="1"
                src={
                  item.image
                }
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title" name="title">
                 {

                  item.title
                 }
               
                </h5>{" "}
                <br />
                {/* <a href={
                  `/course/${
                    item.id
                  }`
                } class="btn btn-dark">
                  Find out more
                </a> */}
                <Link to={`/course/${item.id}`}>
  <button className="rounded-sm bg-gray-800 mb-3 px-4 py-2 text-lg text-white">Go to course</button>
</Link>
              </div>
            </div>

              ))
            }
           
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Student;
