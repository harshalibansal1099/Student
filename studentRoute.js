const express= require("express");
const validateToken = require("../controllers/middleware/validateTokenHandler");
const router=express.Router();
//const {getStudent}=require("../controller/studentcontroller");

module.exports={getStudents,
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent} =require("../controllers/studentcontroller");

router.use(validateToken);
router.route("/").get(getStudent).post(createStudent);
//router.route("/").post(createStudent);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);
//router.route("/:id").put(updateStudent);
//router.route("/:id").delete(deleteStudent);
/*
router.route("/").get((req,res)=>{
    res.status(200).json({message:"Get all Students"});
});


router.route("/").post((req,res)=>{
    res.status(200).json({message:"Create Student"});
});

router.route("/:id").get((req,res)=>{
    res.status(200).json({message:'Get contact for ${req.params.id}'});
});

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:'Update contact for ${req.params.id}'});
});

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:'Delete contact for ${req.params.id}'});
});


*/
module.exports=router;
