// import mongoose from "mongoose";
const mongoose =require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    tableNumber:{
        type:String,
        required:true,
    }
})
// const User=mongoose.model("user",userSchema);
module.exports=mongoose.model("user",userSchema)
// export default User;