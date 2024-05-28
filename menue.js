// import mongoose from "mongoose";
const mongoose =require("mongoose")


const menuSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    test:{
        type:String,
        required:true,
    },
   
   
})
// const Menu=mongoose.model("menu",menuSchema)
module.exports=mongoose.model("menu",menuSchema)
// export default Menu;