const express = require("express");
const app = express();
const https = require("https");

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=9c745cac0b43efe3f115d94f1e518258&units=metric";
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            console.log(temp);
            console.log(weatherDescription);
        });
    });
    res.send("Server is up and running");
});

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});