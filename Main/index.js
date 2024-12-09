//Packages included
import inquirer from 'inquirer'
import fs from 'fs'
import generateMarkdown from './generateMarkdown.js';
// TODO: Create an array of questions for user input

const questions = [
            {
                type: 'input',
                name: 'title',
                message: 'What is your project title?',
            },
            {
                type: 'input',
                name: 'motivation',
                message: 'What was your motivation?',
            },
            {
                type: 'input',
                name: 'why',
                message: 'Why did you create this project?',
            },
            {
                type: 'input',
                name: 'solve',
                message: 'What problem does this project solve?',
            },
            {
                type: 'input',
                name: 'learn',
                message: 'What did you learn while creating this project?',
            },
            {
                type: "input",
                name: "installation",
                message: "Provide a step by step description on what is required to install your project:",
            },
            {
                type: "input",
                name: "usage",
                message: "Instructions and examples for use?",
            },
            {
                type: "input",
                name: "credits",
                message: "List any collaborators, if any, or provide links of the followed tutorials if used:",
            },
            {
                type: "list",
                name: "license",
                message: "What license was used?",
                choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3', 'MPL-2.0', 'LGPL-3.0', 'ISC', 'Unlicense']
            },
            {
                type: "input",
                name: "features",
                message: "List your projects features:",
            },
            {
                type: "input",
                name: "tests",
                message: "What are tests for your application and how to run them?",
            },
            {
                type: "input",
                name: "username",
                message: "What is your gitHub username?",
            },
            {
                type: 'email',
                name: "email",
                message: "What is your email?",
            },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Successfully created a README file!')
)
}

// TODO: Create a function to initialize app
function init() {
    let i = 0
    const answers = {}

    function userInput() {
        console.clear()
        if (i>0) {
            console.log("Please write in complete sentences")
    }
        if (i === questions.length) {
            const generateReadme = generateMarkdown(answers);
            writeToFile('README.md', generateReadme)
            return
        }

            inquirer.prompt(questions[i]).then((question) => {
            answers[questions[i].name] = question[questions[i].name]
            i++
            userInput()
        })
    }
    userInput()
}

// Function call to initialize app
init();

