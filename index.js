// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// function to call inquirer and prompt user for input to be used to build the README
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
            message: 'Provide a description of the project:',
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
            name: 'demoConfirm',
            message: 'Do you want to include a link to a video demonstration?',
        },
        {
            type: 'input',
            name: 'videoLink',
            message: 'Please provide the link to your demonstration video:',
            when: ({demoConfirm}) => {
                if (demoConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use:',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select applicable license(s) for this project:',
            choices: ['MIT','Apache','GPL']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Provide instructions for how others can contribute to your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide input regarding any tests for this project:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username:',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address:',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
};

// Function to write README file
const writeToFile = (readMeData) => {
    fs.writeFile('./NewREADME.md', generateMarkdown(readMeData), function(err) {
        if (err) {
        return console.log(err)
        }
        console.log("A new README.md file has been created at root.");
    });
};

// Function call to initialize app
questionPrompts()
    .then(writeToFile)

