const express = require("express");

const app = express();

app.get("/",function(req,res){
    console.log("Server is up");
});

app.listen("3000",function(){
    console.log("Server is running in port 3000");
});