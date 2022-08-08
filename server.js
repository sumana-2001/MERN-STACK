//import express module
let express=require("express");
//import body-parser module
let bodyparser=require("body-parser");
//create the rest obj
let app=express();
//enable the ports communication 
let cors = require("cors");
//const mongoose = require('mongoose'); 
//const methodOverride = require('method-override');
//const MONGO_URL = "mongodb://localhost:27017/project"
//set the JSON as mime type
app.use(express.json())
app.use(bodyparser.json());
require('dotenv/config')

//app.use(methodOverride('_method')) 
//read json
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

//mongoose.connect(process.env,MONGO_URL,
  //{ useNewUrlParser:true,useUnifiedTopology:true},err =>{ console.log("connected")
//});


//let multer = require('multer');
//const { default: mongoose } = require("mongoose");
//let storage = multer.diskStorage({
  //destination: './GridFs/uploads',
  //filename : function(req,file,db){
  //db(null,file.originalname);
  //}
//})

//const upload = multer({storage:storage})
//use login module
app.use("/login",require("./login/login"));
//use register module
app.use("/register",require("./register/register"));
//use update module 
  //for personal details
app.use("/update",require("./update/update"));
  //for educational details
app.use("/updateEdu",require("./update/updateEdu"));
//for project details
app.use("/updateProj",require("./update/updateProj"));
//for skills details
app.use("/updateSkills",require("./update/updateSkills"));
//for experiences details
app.use("/updateExp",require("./update/updateExp"));

//app.use("/delete",require("./delete/delete"));

app.use("/fetch",require("./fetch/fetch"));

app.use("/GridFs/uploads",express.static("uploads"));
//app.use("/appfiles",require("./GridFs/Upload_pdf"));
//app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({ file: req.file });
  //res.redirect('/profilepage');
//});
//app.use("/appfiles",require("./GridFs/Upload_pdf"))
//app.post('/appfiles',upload.single('file'),(req,res)=>{
  //{}
//})
app.listen(3000);
console.log("server listening the port no.3000");
