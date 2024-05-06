#! /usr/bin/env node                                    k
//a simple calculator using inquirer
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operators === "Addition") {
  console.log(`your value is :  ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operators === "Subtraction") {
  console.log(`your value is :  ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operators === "Multiplication") {
  console.log(`your value is :  ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operators === "Division") {
  console.log(`your value is :  ${answer.firstNumber / answer.secondNumber}`);
} else {
  console.log("please select the right operator");
}

console.log("Ended")