const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;

/*
router.post("/register",(req,res)=>{
    res.json({message:"REgister the user"});
});

router.post("/login",(req,res)=>{
    res.json({message:"login the user"});
});

router.get("/login",(req,res)=>{
    res.json({message:"Current User information "});
});
*/
module.exports=router;