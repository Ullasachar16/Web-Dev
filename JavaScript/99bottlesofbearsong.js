var numberOfBottles = 99;
while (numberOfBottles > 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    console.log("*****************************************");
}
if (numberOfBottles === 0) {
console.log("No more bottles of beer on the wall,");
console.log("no more bottles of beer.")
console.log("Go to store and buy some more,");
console.log("99 bottles of beer on the wall.")
}