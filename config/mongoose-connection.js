const mongoose=require('mongoose');



mongoose.connect("mongodb://127.0.0.1:27017/scatch") // connect to database
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})


module.exports=mongoose.connection; // export the connection object