console.log("i am in express project");
const express= require("express");
const errorHandler = require("./controllers/middleware/errorhandler");
const connectDb = require("./config/dbconnnection");
const dotenv=require("dotenv").config();

connectDb();

const app=express();
const port= process.env.PORT||5000;
app.use(express.json());
app.use("/api/students",require("./routes/studentRoute"));
app.use(errorHandler);
/*app.get('/',(req,res)=>{
    //res.send("Get all students")
    res.status(200).json({message:"Get all students"});
})*/
app.listen(port,()=>{
    console.log('Server running on port ${port}');
});
