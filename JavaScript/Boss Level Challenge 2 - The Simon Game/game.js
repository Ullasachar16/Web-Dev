var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

$("btn").on("click",function(){
    
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
});

function newSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

}

$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

