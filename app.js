const readlineSync = require("readline-sync");

let text = readlineSync.question("Enter a word or phrase: ");

let index = readlineSync.question("Enter an index number: ");

console.log("The character at index " + index + " is: " + text[index]);