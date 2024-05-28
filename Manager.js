// import mongoose from "mongoose";
const mongoose =require("mongoose")

const connect=mongoose.connect("mongodb://localhost:27017/Hotel")
.then(()=>console.log("database connected"))
.catch((err)=>console.log("database is not connected",err))

const managerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unick: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  jendar: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  postion: {
    type: String,
    required: true,
  },
});


module.exports=mongoose.model("manager",managerSchema)
