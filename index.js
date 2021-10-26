// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questionPrompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project.',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tocConfim',
            message: 'Do you want to add a table of contents?',
            default: false
        }
    ])
};

// TODO: Create a function to write README file
const writeToFile = (readMeData) => {
    fs.writeFile('./utils/README.md', generateMarkdown(readMeData), function(err) {
        if (err) {
        return console.log(err)
        }
        console.log("file created?!");
    });
};

// Function call to initialize app
questionPrompts()
    .then(writeToFile)

