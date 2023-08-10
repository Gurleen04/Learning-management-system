import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faClock,faBook } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


const course =[ {
   id: 1,
   title: "Basics of UX design",
  about: "",


  courseStructure: [
    {
      title: "Basics of UX design",
      subtitle: "Here you will learn about ux design ",
      numberLectures: "3",
      duration: "3",
      price:"2000",
      courseContent:[
        {
          id: 1,
          title: "Welcome to the course",
          description: "Lorem ipsum dolor sit amet...",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "Basics",
          description: "Lorem ipsum dolor sit amet...",
          vimeoId: 76979871
        },
        {
          id: 3,
          title: "Basics",
          description: "Lorem ipsum dolor sit amet...",
          vimeoId: 76979871

        }
      ]


    },

  ],
  
  

},
{
  id:2,
  title: "Complete Python Bootcamp",
  about: "",


  courseStructure: [
    {
      title: "Complete Python Bootcamp",
      subtitle: "Here you will learn about Python ",
      numberLectures: "10",
      duration: "5",
      price:"2500",
      courseContent:[
        {
          id: 1,
          title: "Welcome to the course",
          description: "Lorem ipsum dolor sit amet...",
          vimeoId: 76979871
        },
        {
          id: 2,
          title: "Basics",
          description: "Lorem ipsum dolor sit amet...",
          vimeoId: 76979871
        },
        {
          id: 3,
          title: "Basics",
          description: "Lorem ipsum dolor sit amet...",
          vimeoId: 76979871

        },
        
      ]


    },

  ],
  


  
  
},
{
  id: 3,
  title: "Angular-The complete guide",
 about: "",


 courseStructure: [
   {
    title: "Angular-The complete guide",
   subtitle: "Here you will learn about ux design ",
     numberLectures: "3",
     duration: "3",
     price:"2000",
     courseContent:[
       {
         id: 1,
         title: "Welcome to the course",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 2,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 3,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871

       }
     ]


   },

 ],
 
 

},
{
  id: 4,
  title: "The complete cybersecurity course",
 about: "",


 courseStructure: [
   {
     title: "The complete cybersecurity course",
     subtitle: "Here you will learn about ux design ",
     numberLectures: "3",
     duration: "3",
     price:"2000",
     courseContent:[
       {
         id: 1,
         title: "Welcome to the course",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 2,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 3,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871

       }
     ]


   },

 ],
 
 

},
{
  id: 5,
  title: "Ethical hacking",
 about: "",


 courseStructure: [
   {
     title: "Ethical hacking",
     subtitle: "Here you will learn about ux design ",
     numberLectures: "3",
     duration: "3",
     price:"2000",
     courseContent:[
       {
         id: 1,
         title: "Welcome to the course",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 2,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 3,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871

       }
     ]


   },

 ],
 
 

},
{
  id: 6,
  title: "Embedded systems and operating systems",
 about: "",


 courseStructure: [
   {
     title: "Embedded systems and operating systems",
     subtitle: "Here you will learn about ux design ",
     numberLectures: "3",
     duration: "3",
     price:"2000",
     courseContent:[
       {
         id: 1,
         title: "Welcome to the course",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 2,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871
       },
       {
         id: 3,
         title: "Basics",
         description: "Lorem ipsum dolor sit amet...",
         vimeoId: 76979871

       }
     ]


   },

 ],
 
 

},
];


const CourseDetails = () => {
  
  const { id } = useParams();
  console.log("id:",id);
  // const specificCourse = course.find(c => c.id === parseInt(id));
  // const specificCourse = course.find(c => c.id.toString() === id);
  // const specificCourse = course.find(c => c.id === id);
  const specificCourse = course.find(c => c.id === Number(id));

  console.log(window.location.pathname);
  console.log(id,specificCourse);
  return (
    // <div className="bg-blue-200">

    // {
    //        window.location.pathname.split("/")[2]
    //   }

    //  </div>
    // <div>

    //     <div className="container">

    //         {
    //             course.map((item)=>(
    //                 <h5>{
    //                 item.courseStructure}
    //                 </h5>

    //             ))
    //         }
    //     </div>
    // </div>
    <div className=" bg-gray-200 ">
      {/* {course[0].courseStructure.map((item,index) =>  */}
      {specificCourse && specificCourse.courseStructure.map((item,index) => (
        <div key={index} className=" w-screen h-1/4 bg-gray-200 container">
          <p className="text-left text-5xl font-bold font-georgia -my-2">
            {item.title}
          </p>
          <br />

          <p className="text-left text-xl font-semibold font-georgia ">
            {" "}
            {item.subtitle}
          </p>
          <div class="flex items-center">
            <FontAwesomeIcon icon={faLanguage} className="text-xl text-left" />
            English&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faClock} className="text-xl text-left" />&nbsp;
            {item.duration}&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faBook} className="text-xl text-left" />&nbsp;
            {item.duration}


          </div>
          <div className="flex justify-end " >
          <div className="payment  bg-white w-1/3 shadow-xl	hover:shadow-2xl shadow-black">
            <h3 className="text-2xl  text-center  font-bold">
              Payment
            </h3>
            <p className="text-left ml-2 font-medium">Price of the course<br/>₹ {item.price}</p>
            <button className="rounded-sm  bg-orange-400 mb-3 mr-4 px-4 py-2">Add to cart&nbsp;</button>
            <Link to="/payment">
          <button  className="rounded-sm bg-orange-400 mb-3 px-4 py-2 text-lg text-black"  >Buy now </button>
          </Link>

            </div>
            </div><br/><br/>
          
      
          <p className="text-2xl  text-left font-semibold">Course content</p>
            {item.courseContent.map((content,i) => (
          <div>
          
            <div key={i} class="w-1/2 text-left shadow-xl	hover:shadow-2xl shadow-black bg-white ">
          
            <div className="text-lg font-semibold ">{content.id}. &nbsp; {content.title}</div>
            <div>{content.description}</div>
            <div>Vimeo ID: {content.vimeoId}</div><br/>

          </div>
          
    
          </div>

        ))}
                    {/* payment */}
        </div>
        
        
      ))}
    </div>
    //     <div>
    //     {window.location.pathname.split("/")[2]}
    //     <h5>
    //       {course.courseStructure.map((item) => (
    //         item.subtitle
    //       ))}
    //     </h5>
    //   </div>
  );
};
export default CourseDetails;
