// importing the inquirer and chalks from packages....
import inquirer from "inquirer";

import chalk from "chalk";
// display a colorful Welcome message.... 
console.log(chalk.bgBlueBright.bold("\n \t\t code with Areesha - word counter \n "));
console.log("=".repeat(60));

// prompt the user to emter a sentence....
let answers = await inquirer.prompt([{
    name:"sentence",
    list:"input",
    message:"Enter a sentence",
}]);

// Triming the sentence and spliting into words based on "spaces"....

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence...
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(` \n - word counter: ${chalk.bgMagenta(words.length)}`))
console.log("=".repeat(60));

