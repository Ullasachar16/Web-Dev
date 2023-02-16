const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req,res){
    const url = "";
    https.get(url,function(response){
        console.log(response);
    });
    res.send();
});






app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});