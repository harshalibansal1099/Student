const mongoose= require("mongoose");

const studentSchema=mongoose.Schema(
    {
        user_id:{
          type  :mongoose.Schema.Types.ObjectId,
required:true,
ref:"User",
        },
    FirstName:{
        type:String,
        required:[true,"Please add the FirstName"],
 },
 LastName:{
    type:String,
    required:[true,"Please add the LastName"],
},
Gender:{
    type:String,
    required:[true,"Please add the Gender"],
},
Hobbies:{
    type:String,
    required:[true,"Please add the Hobbies"],
},
Education:{
    type:String,
    required:[true,"Please add the Education"],
},
Country:{
    type:String,
    required:[true,"Please add the Country"],
},
Email:{
    type:String,
    required:[true,"Please add the Email"],
},
Phone:{
    type:String,
    required:[true,"Please add the Phone"],
},
    },
{ timestamps:true,
}
);

module.exports=mongoose.model("Student",studentSchema);