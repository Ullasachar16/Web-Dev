const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.post("/",function(req,res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/39bb03bbf4";
    const options = {
        method: "POST",
        auth: "ullas:2d400f09d4e0fe39c0c7a9e336a96193-us21"
    }
    https.request(url,options,function(response){

    });
});



app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.listen(3000,function(){
    console.log("Server is running in port 3000");
});

// 2d400f09d4e0fe39c0c7a9e336a96193-us21

//39bb03bbf4