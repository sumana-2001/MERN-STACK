let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let del  = require("express").Router().delete("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>
        {
            if(err)
                throw err;
            else{
                db.collection("register").deleteOne({Email_Id:req.body.Email_Id}, (err, result)=> {
                        if (err) 
                        throw err;
                        else
                        res.send({message:"1 document deleted"});
                        db.close();
                      });
                    }
                });
                });

module.exports = del;