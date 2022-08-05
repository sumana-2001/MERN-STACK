//the file acting as module(fetch)
//login module accepts the from angular
//login module fetch from "mongodb" database
var express=require('express');
var bodyParser=require('body-parser');
let mongodb=require("mongodb");
let talentsprint=mongodb.MongoClient;
let fetch =express.Router().get("/",(req,res)=>{
    talentsprint.connect("mongodb://localhost:27017/project",(err,db)=>{
        if(err){
            throw err;

        }
        else{
            db.collection("register").find({}).toArray((err,array)=>{
                if(err){
                    throw err;
                }
                else{
                    if(array.length>0){
                        res.send(array);
                    }
                    else{
                        res.send({message:"record not found..."});
                    }
                }
            });
        }
    });
});
module.exports=fetch;