#! /usr/bin/env node
import inquirer from "inquirer";
let toDos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you want to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like to add more in your todos?",
            default: "true"
        }
    ]);
    toDos.push(todoQuestions.firstQuestion);
    console.log(toDos);
    condition = todoQuestions.secondQuestion;
}
;
