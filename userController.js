const asyncHandler=require("express-async-handler");
const User=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
//@desc Register a user
//@route POST /api/uses/register
//@access public 
const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password)
    {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    const userAvailable=await User.findOne({email});
if(userAvailable){res.status(400);
throw new Error("user already exist");}

//hash passaword 
const hashedpassword =await bcrypt.hash(password,10);
console.log("Hashed password:", hashedpassword);
const user=await User.create({
    username,
    email,
    password:hashedpassword,
});


console.log('User Created ${user}');
if(user){
    res.status(201).json({_id:user.id,email:user.email});

}
else{
    res.status(400);
    throw new Error("USer Data is not valid");
}
    res.json({message:"Register the user"});
});

//@desclogin a use 
//@route POST /api/uses/register
//@access public 
const loginUser=asyncHandler(async(req,res)=>{
  const{email,password}=req.body;
  if(!email||!password){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user= await User.findOne({email});
if(user&&(await bcrypt.compare(password,user.password))){
   const accessToken= jwt.sign({
    user:{
        username:user.username,
        email:user.email,
        id:user.id,
    },
   },
   process.env.ACCESS_TOKEN_SECRET,
   {expiresIn:"4m"}
   );
    res.status(200).json({accessToken});
}
else{res.status(401);
throw new Error ("email pr password is not valid")}
    res.json({message:"login the user"});
});


//@desclogin a use 
//@route POST /api/uses/register
//@access private 
const currentUser=asyncHandler(async(req,res)=>{
    res.json({message:"Current user"});
});
module.exports={registerUser,
    loginUser,
    currentUser
}