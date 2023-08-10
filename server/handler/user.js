
// const { USER } =require( "../db/user")

const { User } = require("../db/user")




const getLogin=async(req,res)=>{
    const{
        email,password
    }=req.body
    const check=await User.findOne({
        email:email
    

    })  

       
    if(check)
    {
        //jwt token
        if(check.password==password)
        {
            return res.status(200).send({
                msg:"a valid user",user:check
            })
        }
        else{
            return res.status(400).send({
                msg:"wrong password"
            })

        }

    }
    else{
        return res.status(400).send({

            msg:"not a valid user"
        })
    }



}

const getSignup=async(req,res)=>{
    const{
        name,email,password,role
    }=req.body
    const check=await User.findOne({
        email:email    
    

    })
    
       
    if(check)
    {
        //jwt token
      return res.status(400).send({
        msg:"email has been already used"
      })

    }
    if(password.length<8)
    {
        return res.status(400).send({
            msg:"invalid password"
        })
    }
    if(role=="Admin"||"Student"||"Instructor")
    {
        let newUser=await User({
            name,email,password,role

        })
        await newUser.save()
        return res.status(200).send({
            msg:"User created"
        })
    }
    else{
        return res.status(400).send({
            msg:"role not valid"
        })
    }

    
}
const changePassword=async(req,res)=>{
    const{
        email,password,newPassword
    }=req.body
    const check=await User.findOne({
        email:email
    

    })  

    if(newPassword?.length<8)
    {
        return res.status(400).send({
            msg:"password's length should me more than 8"
        })
    }

       
    if(check)
    {
        //jwt token

        if(check.password==password)
        {
            await User.findOneAndUpdate({
                email:email
            },
            {
                password:req.body.newPassword
            }

            )
            let newUser=await User.findOne({
                email:email
            })
            return res.status(200).send({
                msg:"Password changed successfully",user:newUser
            })
        }
        else{
            return res.status(400).send({
                msg:"wrong password"
            })

        }

    }
    else{
        return res.status(400).send({

            msg:"not a valid user"
        })
    }



}
module.exports={getLogin,getSignup,changePassword}