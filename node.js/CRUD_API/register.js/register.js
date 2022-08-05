let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let register  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>
        {
            if(err)
                throw err;
            else{
                db.collection("register").insertOne({"First_Name":req.body.First_Name,"Last_Name":req.body.Last_Name,"Email_ID":req.body.Email_ID,"MobileNo":req.body.MobileNo,"Password":req.body.Password,"Confirm_Password":req.body.Confirm_Password},
                (err, result)=> {
                    if (err) throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
                  });
                }
            });

            });
module.exports = register;