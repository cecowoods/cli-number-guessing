#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        message: "guess number betweem 1 to 3",
        type: "number",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("you guessed the right number");
}
else {
    console.log("Try Again");
}
