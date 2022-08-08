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
var newvalues = { $set: {inst1:req.body.inst1,pos1:req.body.pos1,dur1:req.body.dur1,desc1:req.body.desc1,inst2:req.body.inst2,pos2:req.body.pos2,dur2:req.body.dur2,desc2:req.body.desc2,inst3:req.body.inst3,pos3:req.body.pos3,dur3:req.body.dur3,desc3:req.body.desc3} };
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