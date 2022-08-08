let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let update  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>
        {
            console.log(req.body);
            if(err){
                throw err;
            }
            else{                
//var newvalues = { $set: {name:req.body.name, salary:req.body.salary} };
                db.collection("Users").updateMany({Email_Id:req.body.email_id},{$set:{LinkedIn:req.body.linkedin,Github:req.body.github}}, (err, result)=> {
                        if (err) 
                        throw err;
                        else
                        res.send({message:"1 document updated"});
                        db.close();
                      });
                    }
                });
              });

module.exports = update;