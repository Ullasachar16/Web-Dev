
var supervillains = require("SuperVillains");
var superheroes = require("Superheroes");
var mySuperVillainName = supervillains.random();
var mySuperHeroName = superheroes.random();
var allSuperHeroesNames = superheroes.all();
console.log(mySuperHeroName);
console.log(mySuperVillainName);
console.log(allSuperHeroesNames);
