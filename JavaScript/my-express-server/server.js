const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact",function(req,res){
    res.send("contact me at: ullasachar16@gmail.com");
});

app.get("/about",function(req,res){
    res.send("im just a new beginner");
});

app.get("/hobbies",function(req,res){
   res.send("<ul><li>Cofee</li><li>Code</li><li>Beer</li></ul>"); 
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});