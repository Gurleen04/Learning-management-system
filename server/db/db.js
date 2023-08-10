const mongoose=require('mongoose');

//add ur password in bracket
const password = encodeURIComponent("password");

const connectMongo= () =>{

//add ur username in the bracket
mongoose.connect(`mongodb+srv://():${password}@cluster0.ci8siug.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log(`connect`);
})
.catch((error)=>{
    console.log(error);
})
}
module.exports={connectMongo}