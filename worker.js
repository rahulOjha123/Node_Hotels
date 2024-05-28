// import mongoose from "mongoose";
const mongoose=require("mongoose")

const workerSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    }
})


module.exports=mongoose.model("worker",workerSchema)
