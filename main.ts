#! /usr/bin/env node

// importing inquirer and chalk modules
import inquirer from "inquirer";
import chalk from "chalk";

// welcome message
console.log(chalk.bold.blue("\n\t welcome to muheeb word counter"));
console.log("=".repeat(60));

// user input a sentence
let answers = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "enter a sentence",
  },
]);

let words = answers.sentence.trim().split(" ");

console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${words.length}`));
