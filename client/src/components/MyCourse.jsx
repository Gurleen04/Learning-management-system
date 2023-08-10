import React from "react";
import Header3 from "./Header3";


const courseEnrolled=[ {
  id: 1,
  title: "Basics of UX design",
 about: "",


 courseStructure: [
   {
    id:1,
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
      id:2,
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
    id:3,
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

]

const MyCourse=()=>{
 

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
         <div class="grid m-auto w-1/2 h-1/2 my-4 items-center">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>YOUR COURSES</h3>
          </div>
          {/* <div className="course1">
            <p>
              How to play the piano
            </p>
            <p className="certificate">
              Certificate &nbsp;&nbsp;&nbsp;&nbsp; 
              Status
            </p>
            <p className="pro"> Course Progress Overview</p>
            
            <div>


          </div></div> */}
{/* 

          {
            courseEnrolled[0].courseStructure.map((item,index)=>(
              <div  key={index}>
                <h5>
                  {item.title}
                </h5>
           
          </div>
            ))
          } */}
          {/* {courseEnrolled.map((course, courseIndex) => 
    course.courseStructure.map((item, itemIndex) => (
      <div key={`course-${courseIndex}-item-${itemIndex}`}>
        <h5>
          {item.title}
        </h5>
      </div>
    ))
)} */}
{
  courseEnrolled.map((course, courseIndex) => {
    return course.courseStructure.map((item, itemIndex) => (
      <div key={`course-${courseIndex}-item-${itemIndex}`}>
        <div className="flex justify-start items-start">
        <div className="items-left font-bold text-xl"> 
        <p className=" justify-left">
        {item.id}.
          {item.title}
        </p>
        </div>
        </div>
        <ul>
                  {item.courseContent.map((lecture) => (
                    <li key={lecture.id}>
                      <p className="font-semibold">{lecture.id}.{lecture.title}</p>
                     {/* <p>{lecture.title}</p> */}
                      <p>{lecture.description}</p>
                      {/* Add video or other content here if needed */}
                    </li>
                  ))}
                </ul>
      </div>
    ))
  })
}

       </div></div></div>
    );
};
export default MyCourse;