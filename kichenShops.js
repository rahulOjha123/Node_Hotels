// import mongoose from "mongoose";
const mongoose=require("mongoose")


const kichenSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,

    },
    jendar:{
        type:String,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
   
})


module.exports=mongoose.model("kichenShops",kichenSchema)
