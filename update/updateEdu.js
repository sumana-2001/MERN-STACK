let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let update  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>
        {
            console.log(req.body.Email_id.email_id);
            if(err){
                throw err;
            }
            else{                
var newvalues = { $set: {sname:req.body.sname,SYOF:req.body.SYOF,Squalification:req.body.Squalification,Smarks:req.body.Smarks,cname:req.body.cname,CYOF:req.body.CYOF,Cqualification:req.body.Cqualification,Cmarks:req.body.Cmarks,uname:req.body.uname,UYOF:req.body.UYOF,Uqualification:req.body.Uqualification,Umarks:req.body.Umarks,pname:req.body.pname,PYOF:req.body.PYOF,Pqualification:req.body.Pqualification,Pmarks:req.body.Pmarks} };
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