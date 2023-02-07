var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function newSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
}

newSequence();