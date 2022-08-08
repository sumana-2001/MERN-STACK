const { Router } = require('express');
const { GridFSBucket, ReplSet } = require('mongodb');
const mongoose = require('mongoose'); 
Router.route('/GridFs/uploads').get((req,res,next)=> {
  GridFSBucket.find().toArray((err,files)=>{
    if(!files || files.length === 0){
      return res.status(200).json({
        success: false,
        message:"No files available"
      });
    }
    files.map(file =>{
      if(file.contentType === 'application/pdf'){
        fileIspdf = true 
      }
      else{
        filesIspdf = false
      }
    });
    res.status(200).json({
      success : true,
      files
    })
  })
})










/*const path = require('path');
const crypto = require('crypto')
const mongoose = require('mongoose');
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage') 
const Grid = require('gridfs-stream');
const { appendFile } = require('fs');



//mongo url
const mongoURI = "mongodb://localhost:27017/project" 
//set ceonnection 
const conn = mongoose.createConnection(mongoURI);
//init gfs 
console.log("conn : ",conn)

let gfs;

conn.once('open',()=>{
    gfs = Grid(conn.db,mongoose.mongo)
    gfs.collection('appfiles');
})

console.log("gfs : ",gfs);
//creating bucket
let bucket;
mongoose.connection.on("connected",()=>{
  var client = mongoose.connections[0].client;
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db,{
    bucketName: "new bucket"
  });
  console.log(bucket);
})

//create storage engine 

const storage = new GridFsStorage({
  url:mongoURI,
  file:(req,file)=>{
    return new Promise((resolve,reject)=>{
      const filename = file.originalname;
      const fileInfo = {
        filename:filename,
        bucketName: "newBucket"
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({storage});
console.log(upload)
//app.post("/upload",upload.single("file"),(req,res)=>{
  //res.status(200).send("uploaded")
//})
/*const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'appfiles'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });
  app.post("/upload",upload.single("file"),(req,res) => {
    res.status(200).send("file uploaded successfully")
  })
  /*app.get('/', (req, res) => {
    gfs.files.find().toArray((err, files) => {
      // Check if files
      if (!files || files.length === 0) {
        res.render('index', { files: false });
      } else {
        files.map(file => {
          if (
            file.contentType === 'application/pdf'
          ) {
            file.isPdf = true;
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res);
          } else {
            file.isPdf = false;
            res.status(404).json()({
                err:'Not a Pdf'
            });
          }
        });
        res.render('index', { files: files });
      }
    });
  });


  app.get('/files/:filename', (req, res) => {
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
      // Check if file
      if(err){
          throw err
      }
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }
      // File exists
      return res.json(file);
    });
  }); */
  



