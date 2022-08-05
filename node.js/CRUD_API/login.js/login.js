let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let login  = require("express").Router().get("/:Username/:Password",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>
        {
            if(err)
                throw err;
            else{                
                db.collection("login").findOne({"Username":req.params.Username,"Password":req.params.Password}, 
                (err, result) => {
                        if (err) {
                           throw err;
                        }
                        else{
                        res.send(result);
                        }
                        //db.close();
                      });
                    }
                });
              });

module.exports = login;