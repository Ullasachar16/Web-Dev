const express = require("express");
const { write } = require("fs");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
        });

        app.post("/",function(req,res){
           console.log(req.body.cityName) ;
            
        });
        // const query = "London";
        // const apiKey = "9c745cac0b43efe3f115d94f1e518258";
        // const unit = "metric";
        // const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit+"";
        // https.get(url,function(response){
        //     console.log(response.statusCode);
        //     response.on("data",function(data){
        //         const weatherData = JSON.parse(data);
        //         console.log(weatherData);
        //         const temp = weatherData.main.temp;
        //         const weatherDescription = weatherData.weather[0].description;
        //         const icon = weatherData.weather[0].icon;
        //         const imageURL = "https://openweathermap.org/img/wn/" +icon+ "@2x.png";
        //         res.write("<p>The Weather is currently "+weatherDescription+"</p>");
        //         res.write("<h1>The Temperature in London is "+temp+" degree celcius.</h1>");
        //         res.write("<img src=" +imageURL+ ">");
        //         res.send();
//     });
// });

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});