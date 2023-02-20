const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    console.log("Server is up");
});

app.listen("3000",function(){
    console.log("Server is running in port 3000");
});