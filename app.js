const readlineSync = require("readline-sync");

// Ask for the user's name
let userName = readlineSync.question("What is your name? ");

console.log("Hello, " + userName + "! Welcome to the JavaScript quiz.");

// Ask 5 questions
let answer1 = readlineSync.question(
  "1. What data type is 100? "
);

let answer2 = readlineSync.question(
  "2. What data type is the value null? "
);

let answer3 = readlineSync.questionInt(
  "3. What is 8 * 4? "
);

let answer4 = readlineSync.question(
  "4. Which function converts a value into a string? "
);

let answer5 = readlineSync.question(
  "5. What keyword is used to declare a variable that cannot be reassigned? "
);

// Print answers back to the user
console.log("\nYour Answers:");
console.log("1. " + answer1);
console.log("2. " + answer2);
console.log("3. " + answer3);
console.log("4. " + answer4);
console.log("5. " + answer5);