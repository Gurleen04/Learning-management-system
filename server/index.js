
const express=require('express');
const cors=require('cors');
const app=express();
const {userRoute}=require('./routes/user');
const { connectMongo } = require('./db/db');

//const hbs = require("hbs")
app.use(cors())
app.use(express.json())


let port=8080;

app.use(userRoute)
connectMongo()


app.listen(port,()=>{
    console.log(`listening to port ${port}`); 
})