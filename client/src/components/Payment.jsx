import React from "react";

const Payment=()=>
{
    return(
        <div>


         <div className="main bg-gray-200">
            <div className="flex flex-col bg-white w-1/2 h-1/2 ">
                <div className="submain grid grid-cols-2 gap-4 mx-2">
                    <p className="text-left">
                        <h2>Billing Address
                    </h2><br/>
          
                    <div class="">

                <h5>Full Name:</h5><input className="rounded-none shadow-none border bg-slate-200	" type="text" placeholder="john deo"></input>
                </div>
                <div class="">
                <h5>Email:</h5>
                    <input type="email" className="rounded-none shadow-none border bg-slate-200	" placeholder="example@example.com"></input>
                </div>
                <div class="">
                <h5>Address:</h5>
                    <input type="text" className="rounded-none shadow-none border bg-slate-200	" placeholder="room - street - locality"></input>
                </div>
                <div class="">
                <h5>State</h5>
                    <input type="text" className="rounded-none shadow-none border bg-slate-200	" placeholder="Tamil Nadu"></input>
                </div>
                <div class="">
                <h5>City</h5>
                    <input type="text" className="rounded-none shadow-none border bg-slate-200	" placeholder="chennai"></input>
                </div>
                <div class="">
                <h5>Pin code</h5>
                    <input type="text" className="rounded-none shadow-none border bg-slate-200	 " maxLength={6} placeholder="112233"></input>
                </div>                       
                  </p>
                   <p className="text-left">
                    <h3 >
                        Payment

                    </h3><br/>
                    <div class="">
                   <h5>Name on the card:</h5><input className="rounded-none shadow-none border bg-slate-200	" type="text" placeholder="john deo"></input>
                </div>
                <div class="">
                   <h5>Credit card number:</h5><input className="rounded-none shadow-none border bg-slate-200	" type="number" maxLength={19} placeholder="1111-2222-3333-4444"></input>
                </div>
                <div class="">
                   <h5>Expiry Month:</h5><input className="rounded-none shadow-none border bg-slate-200	" type="text" placeholder="January"></input>
                </div>
                <div class="">
                   <h5>Expiry year:</h5><input className="rounded-none shadow-none border bg-slate-200	" type="number" placeholder="2023"></input>
                </div>
                <div class="">
                   <h5>CVV:</h5><input className="rounded-none shadow-none border bg-slate-200	" type="password" maxLength={3} ></input>
                </div>
      
                    </p>
                

                </div>
               
              <div className="flex justify-center">
                <button type="submit" value="proceed to checkout" className=" items-center text-center justify-center submit-btn items-center bg-gray-900 text-white "><a className ="text-white text-lg"href='/Coursebooking'>Proceed To Checkout</a></button>
            </div>
            </div>
            
            
           
        </div>         
        </div>
    )
};
export default Payment