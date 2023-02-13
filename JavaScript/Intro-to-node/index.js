
var supervillains = require("SuperVillains");
var superheroes = require("Superheroes");
var mySuperVillainName = supervillains.random();
var mySuperHeroName = superheroes.random();
var allSuperHeroesNames = superheroes.all;
var allSuperVillainsName = supervillains.all;
console.log(mySuperHeroName);
console.log(mySuperVillainName);
console.log(allSuperHeroesNames);
console.log(allSuperVillainsName);