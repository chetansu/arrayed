const arrayed = require("./arrayed");

console.log("The largest number is " +arrayed.max([22,15,16,19,21,22]));
console.log("The smallest number is " +arrayed.min([22,15,16,19,21,22]));
console.log("The largest 2 numbers are " +arrayed.maxX([22,15,16,19,21,22], 2));
console.log("The smallest 3 numbers are " +arrayed.minX([22,15,16,19,21,22], 3));
console.log("The smallest 2nd number is " +arrayed.minByRank([22,15,16,19,21,22], 2));
console.log("The largest 3rd number is " +arrayed.maxByRank([22,15,16,19,21,22], 3));
console.log("On duplicate removal the array is " +arrayed.getUnique([22,15,16,19,21,22]));
console.log("On duplicate removal & sorting the array is " +arrayed.getUniqueSorted([22,15,16,19,21,22]));
console.log("On duplicate removal & sorting the array is " +arrayed.getUniqueSorted([22,15,16,19,21,22], false));
console.log("Sort Number array in decreasing order " +arrayed.sortArray([22,15,16,19,21,22], false));
console.log("Sort Number array in Increasing order " +arrayed.sortArray([22,15,16,19,21,22]));
console.log("get Count " +arrayed.getCount([22,15,16,19,21,22], 27));