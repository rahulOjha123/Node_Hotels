const express = require("express");
const KichenShops = require("../Hotels/Modell/kichenShops.js");
const Manager = require("../Hotels/Modell/Manager.js");
const Menu = require("./Modell/menue.js");
const User = require("./Modell/user.js");
const Worker = require("./Modell/worker.js");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("hello rahul")
})
// manager post menthod

app.post("/manager", async (req, res) => {
    try {
      const data = req.body;
      const newperson = new Manager(data);
      const savedata = await newperson.save();
      res.status(200).json(savedata);
    } catch (err) {
      console.log("data is not sucessfullu save", err);
      res.status(500).json({ error: "Internal server Error" });
    }
  });
  app.get("/manager", async (req, res) => {
    try {
      const alldata = await Manager.find();
      res.status(200).json(alldata);
    } catch (err) {
      console.log("some error in get data");
      res.status(500).json({ error: "canot find data" });
    }
  });
  app.put("/manager/:id", async (req, res) => {
    try {
      const manager_id = req.params.id;
      const updateManager = req.body;
      const response = await Manager.findByIdAndUpdate(
        manager_id,
        updateManager,
        {
          new: true,
          runValidators: true,
        }
      );
  
      if (!response) {
        res.status(404).json({ error: " Invalid data" });
      }
  
      res.status(200).json(response);
    } catch (err) {
      console.log("internal server error", err);
      res.status(500).json({ error: "Internal error in code" });
    }
  });
  app.delete("/manager/:id", async (req, res) => {
    try {
      // const managerId=req.params.id;
      const deletemanager = await Manager.deleteOne({ _id: req.params.id });
      res.status(200).json(deletemanager);
    } catch (err) {
      console.log("internal error");
      res.status(500).json({ error: "Internal Error" });
    }
  });

// KichenShops get method post method delete mothod and put method

app.post("/kichenshops", async (req, res) => {
    try {
      const data = req.body;
      const newperson = new KichenShops(data);
      const savedata = await newperson.save();
      res.status(200).json(savedata);
    } catch (err) {
      console.log("Internal Server Error", err);
      res.status(500).json({ error: "internal Server Error" });
    }
  });
  app.get("/kichenshops", async (req, res) => {
    try {
      const kichendata = await KichenShops.find();
  
      if (!kichendata) {
        res.status(404).json({ error: "Data is not avlebal" });
      }
      res.status(200).json(kichendata);
    } catch (err) {
      console.log("Internal server error", err);
      res.status(500).json({ erro: "Internal server error" });
    }
  });
  
  app.put("/kichenshops/:id", async (req, res) => {
    try {
      const shop_Id = req.params.id;
      const updateShop = req.body;
      const updateshop = await KichenShops.findByIdAndUpdate(
        shop_Id,
        updateShop,
        {
          new: true,
          runValidators: true,
        }
      );
  
      if (!updateshop) {
        res.status(404).json({ erro: "Invalid data" });
      }
      res.status(200).json(updateshop);
    } catch (err) {
      res.status(500).json({ erro: "Internal server error" });
    }
  });
  
  app.delete("/kichenshops/:id", async (req, res) => {
    try {
      // const kichenid=req.params.id;
      const deletshops = await KichenShops.deleteOne({ _id: req.params.id });
      res.status(200).json(deletshops);
    } catch (err) {
      res.status(500).json({ erro: "Internal server error" });
    }
  });
  
  // operation on the Menu producs
  
  app.post("/menu", async (req, res) => {
    try {
      const data = req.body;
      const newmenu = new Menu(data);
      const savedata = await newmenu.save();
      res.status(200).json(savedata);
    } catch (err) {
      console.log("data is not sucessfullu save", err);
      res.status(500).json({ error: "data not save of Manager" });
    }
  });
  app.get("/menu", async (req, res) => {
    try {
      const menudata = await Menu.find();
  
      if (!menudata) {
        res.status(404).json({ error: "Data is not avlebal" });
      }
      res.status(200).json(menudata);
    } catch (err) {
      console.log("Internal server error", err);
      res.status(500).json({ erro: "Internal server error" });
    }
  });
  app.put("/menu/:id", async (req, res) => {
    try {
      const menu_Id = req.params.id;
      const updateMenu = req.body;
      const updatemenu = await Menu.findByIdAndUpdate(menu_Id, updateMenu, {
        new: true,
        runValidators: true,
      });
  
      if (!updatemenu) {
        res.status(404).json({ erro: "Invalid data" });
      }
      res.status(200).json(updatemenu);
    } catch (err) {
      res.status(500).json({ erro: "Internal server error" });
    }
  });
  app.delete("/menu/:id", async (req, res) => {
    try {
      // const kichenid=req.params.id;
      const deletmenu = await Menu.deleteOne({ _id: req.params.id });
      res.status(200).json(deletmenu);
    } catch (err) {
      console.log("Internal error",err)
      res.status(500).json({ erro: "Internal server error" });
    }
  });
  
  // operation on User CROUD
  
  app.post("/user", async (req, res) => {
    try {
      const user = req.body;
      const response = new User(user);
      const newuser = await response.save();
      res.status(200).json(newuser);
    } catch (err) {
      console.log("Internl Server Error", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  app.get("/user", async (req, res) => {
    const data = await User.find();
    res.status(200).json(data);
  });
  
  app.put("/user/:id", async (req, res) => {
    try {
      const userId=req.params.id;
      const updateUser=req.body;
      const response=await User.findByIdAndUpdate(userId,updateUser,{
        new: true,
        runValidators: true,
      })
      if(!response){
        res.status(404).json({error:"Data not found"})
      }
      res.status(200).json(response);
    } catch (err) {
      console.log("Inernal Server Error",err);
      res.status(500).json({error:"Inernal Server Error"})
    }
  });
  app.delete("/user/:id",async(req,res)=>{
    try{
          const deleteUser= await User.deleteOne({_id:req.params.id});
          res.status(200).json(deleteUser);
  
  
    }catch(err){
      console.log("Inernal Server Error",err);
      res.status(500).json({error:"Internal Server Errro"})
    }
  })
  
  // worker croud operation by rahul ojha
  
  app.post("/worker",async(req,res)=>{
    try{
        const worker=req.body;
        const newWorker=new Worker(worker)
        const data=await newWorker.save()
        res.status(200).json(data)
    }catch(err){
        console.log("internal server error");
        res.status(500).json({error:"Internal Server Error"})
    }
  })
  
  app.get("/worker",async(req,res)=>{
    try{
      const worker=await Worker.find();
      res.status(200).json(worker);
    }catch(err){
      console.log("Internal server Error");
      res.status(500).json({error:"Internal Server Error"})
    }
  })
  app.put("/worker/:id",async(req,res)=>{
    try{
      const workerId=req.params.id;
      const updateWorker=req.body;
      const newData=await Worker.findByIdAndUpdate(workerId,updateWorker,{
        new:true,
        required:true,
      })
      if(!newData){
        res.status(404).json({error:"Data not found"})
      }
      res.status(200).json(newData);
    }catch(err){
      console.log("internal server Error");
      res.status(500).json({eror:"Internal Server"})
    }
  })
  
  app.delete("/worker/:id",async(req,res)=>{
    try{
      const deleteWorker=await Worker.deleteOne({_id:req.params.id});
      res.status(200).json(deleteWorker);
    }catch(err){
      console.log("internal server error");
      res.status(500).json({eror:"Internal Server Error"})
    }
  })


// heki
app.listen(5000, () => {
  console.log("server is running at port number 5000");
});
