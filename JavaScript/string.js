var name=prompt("What is ur name?");
var firstchar = name.slice(0,1);
var upperCaseFirstChar = firstchar.toUpperCase();

var restChar = name.slice(1,name.length);
restChar=restChar.toLowerCase();

var greetName=upperCaseFirstChar+restChar;

alert("Hello, "+greetName);
