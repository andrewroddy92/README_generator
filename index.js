// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'screenshotFilePath',
        message: 'Provide relative filepath to your screenshot.',
    },
    {
        type: 'confirm',
        name: 'credits',
        message: 'Was this project made with the help of any others?',
        default: false,
    },
    {
        type: 'input',
        name: 'collaberators',
        message: 'Name any fellow collaberators in this project\'s creation',
        when: (answers) => answers.credits
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which liecense did you use?',
        choices: ['MIT', 'GNU LV3', 'Apache License 2.0', 'ISC License'],
    },
    {
        type: 'input',
        name: 'githubUserName',
        message: 'Please link your Github User Name',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please provide testing Instructions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log('\nThis is everything:');
        console.log(JSON.stringify(answers, null, '  '));
    });
}

// Function call to initialize app
init();