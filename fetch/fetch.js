//the file acting as module(fetch)
//login module accepts the from angular
//login module fetch from "mongodb" database
var express=require('express');
var bodyParser=require('body-parser');
let mongodb=require("mongodb");
let talentsprint=mongodb.MongoClient;
console.log('fetch started...')
let fetch=express.Router().post("/",(req,res)=>{
    talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>{
        //console.log('Inside fetch',req.body.primarykey)
        if(err){
            throw err;

        }
        else{
            //console.log(db.collection("Users").findOne({Email_Id:req.body.primarykey}));
            db.collection("Users").findOne({Email_Id:req.body.primarykey},(err,array)=>{
                //console.log("the array and error is : ",array);
                if(err){
                    throw err;
                }
                else{
                    if(Object.keys(array).length>0){
                        res.send({data: array});
                    }
                    else{
                        res.send({message:"record not found..."});
                    }
                }
            });
        }
    });
});
module.exports = fetch;
