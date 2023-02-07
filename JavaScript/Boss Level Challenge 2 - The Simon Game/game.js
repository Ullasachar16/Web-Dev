var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function newSequence(){
    var randomNumber = Math.floor(Math.random()*3)+1;
    var randomChosenColor = Math.random(buttonColors);
    var gamePattern = gamePattern.push(randomChosenColor);
}

newSequence();