const asyncHandler= require("express-async-handler");
const Student=require("../models/studentModel");


//Get all Students
// @Route GET /api/contacts
//@access private

/*const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(contacts);
}); */
const getStudents=asyncHandler (async(req,res)=>{
  
    const students=Student.find();
  res.status(200).json(students);
  // res.status(200).json({message:"Get all Students"});
});


//@desc Create New  Students
// @route POST /api/students
//@access private
const createStudent= asyncHandler(async(req,res)=>{
    console.log("The Request Body is: ",req.body);
    const{FirstName,LastName,Gender,Hobbies,Education,Country,Email,Phone}=req.body;
    if(!FirstName||!LastName||!Gender||!Hobbies||!Education||!Country||!Email||!Phone)
    {
        res.status(400);
        throw new Error("All Fields Are Mandatory");
    }
    const students=await  Student.create({
        FirstName,
        LastName,
        Gender,
        Hobbies,
        Education,
        Country,
        Email,
        Phone
    });
res.status(201).json(students);

    // res.status(201).json({message:"Create Student"});
});

//@desc Get Student 
// @route GET /api/students/:id
//@access private
const getStudent=asyncHandler(async(req,res)=>{
    const student=await Student.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("Student Not Found ");
    }
    res.status(200).json({message:'Get contact for ${req.params.id}'});
});

//@desc Update Student 
// @route GET /api/students/:id
//@access private
const updateStudent=asyncHandler(async(req,res)=>{
    const student=await Student.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("Student Not Found ");
    }
    const updatedStrudent=await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json({message:'Update contact for ${req.params.id}'});
});

//@desc Update Student 
// @route GET /api/students/:id
//@access private
const deleteStudent= asyncHandler(async(req,res)=>{
   
    const student=await Student.findById(req.params.id);
    if(!student){
        res.status(404);
        throw new Error("Student Not Found ");
    }
    await Student.remove();
    
    res.status(200).json({message:'Delete contact for ${req.params.id}'});
});


module.exports={getStudents,createStudent,getStudent,updateStudent,deleteStudent};