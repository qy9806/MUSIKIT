const express=require("express")
const bodyparser=require("body-parser");
const request =require("request");
const https=require("https");


const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")})






  app.listen(process.env.PORT||3000,function(){
    console.log("server is running...")
  })
