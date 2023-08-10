import React,{useState} from "react";
import './Form.css';




const Form=() =>{
    const [email, setEmail] = useState() // this is used to define/set a state variable
    const [name, setName] = useState()


    return (  
      
        <div className="main">
        <div className="sub-main">
          <div>
                     
              <h1>Raise a query</h1>
              <div>
               
                <input type="text" placeholder="Email" className="email" onChange={(e)=>{ 
                  setEmail(e.target.value)
                  
                }}/>
              </div>
              <div className="second-input">
              
                <input type="name" placeholder="Name" className="name"
                onChange={(e)=>{ 
                  setName(e.target.value)}}/>
              </div><br/><br/>
              <div className="third-input">
              
              <textarea id="txtid" className="bg-gray-200" name="txtname" rows="4" cols="50" maxlength="200">

            </textarea>
              </div>
             <div className="login-button"><button className="rounded-full bg-slate-800 text-white">Send Query</button>
             </div>
              
              
              
    
            
          </div>
          
   
        </div>
       </div>
     );
}
export default Form