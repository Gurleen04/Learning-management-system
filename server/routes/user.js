const {getLogin,getSignup,changePassword} =require( "../handler/user")

const express=require("express")
const userRoute=express.Router()
userRoute.post("/login",getLogin)
userRoute.post("/signup",getSignup)
userRoute.post("/changepassword",changePassword)
module.exports={userRoute}