#! /usr/bin/env node
// _______CLI_NUMBER _GUESSING_GAME_____
import inquirer from "inquirer";
//1) Computer Will Generate a random number;
//2) user input for Guessing Number;
//3) Compare user input with computer generated number and show result;
const randomNumber = Math.floor(Math.random() * 9 + 1);
let answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-9:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! you guessed a right number");
}
else {
    console.log("you guessed a wrong number");
}
;
