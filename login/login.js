let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let login  = require("express").Router().post("/",(req,res)=>{
  console.log(req.body.formValues);
        talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>
        {
            if(err)
                throw err;
            else{     
              //console.log(req.body.formValues.email,"Email_id")           
                db.collection("Users").findOne({"Email_Id":req.body.formValues.email,"Password":req.body.formValues.password}, 
                //console.log(req.params.Email_Id)
                (err, result) => {
                        if (err) {
                           throw err;
                        }
                        else{
                        console.log(result,"result");
                        if(result == null){
                          console.log("invalid");
                          res.status(404).send("invalid");
                        }
                        else{
                        res.send(result)
                        }
                      }
                        //db.close();
                      });
                    }
                });
              });

module.exports = login;



