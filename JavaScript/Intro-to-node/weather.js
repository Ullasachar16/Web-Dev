var request = require('request');
var apiKey = 'your-api-key';

var city = 'San Francisco';
var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    var weather = JSON.parse(body)
    var message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
