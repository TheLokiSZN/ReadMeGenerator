// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdownLink = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github username',
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages does this project use?',
        choices: ['Node.js', 'Javascript', 'CSS', 'HTML', 'React', 'Java', 'C++', 'C', 'Python']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('readMe', markdownLink({...answers}))
    })
}

// Function call to initialize app
init();
