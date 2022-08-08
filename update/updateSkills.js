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
var newvalues = { $set: {skill1:req.body.skill1,skill2:req.body.skill2,skill3:req.body.skill3,skill4:req.body.skill4} };
                db.collection("Users").updateMany({Email_Id:req.body.Email_id},newvalues, (err, result)=> {
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