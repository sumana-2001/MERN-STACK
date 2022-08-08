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
var newvalues = { $set: {title1:req.body.title1,link1:req.body.link1,description1:req.body.description1,title2:req.body.title2,link2:req.body.link2,description2:req.body.description2,title3:req.body.title3,link3:req.body.link3,description3:req.body.description3} };
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