//import express module
let express=require("express");
//import body-parser module
let bodyparser=require("body-parser");
//create the rest obj
let app=express();
//enable the ports communication 
let cors = require("cors");
//set the JSON as mime type
app.use(bodyparser.json());
//read json
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
//use login module
app.use("/login",require("./login/login"));
app.use("/register",require("./register/register"));
app.use("/update",require("./update/update"));
app.use("/delete",require("./delete/delete"));

app.use("/fetch",require("./fetch/fetch"));
app.listen(3000);
console.log("server listening the port no.3000");