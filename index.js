const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const fs = require('fs')


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
        name: 'collaborators',
        message: 'Name any fellow collaborators in this project\'s creation',
        when: (answers) => answers.credits
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license did you use?',
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



function writeToFile(fileName, answers) {
    var licenseBadge = ' ';
    switch (answers.license){
        case 'MIT':
             licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        case 'GNU LV3':
             licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
        case 'Apache License 2.0':
             licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        case 'ISC License':
             licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    var markdownString = '# ' + answers.projectTitle + '\n\n' 
    + licenseBadge + '\n\n' 
    + '## Description' + '\n' + answers.projectDescription + '\n\n'
    + '## Instillation' + '\n' + answers.projectInstallation + '\n\n'
    + '## Usage' + '\n' + answers.projectUsage + '\n\n' 
    + '!' + '[' + answers.altText + ']' + '(' + answers.screenshotFilePath + ')' + '\n\n'
    + '## Credits' + '\n' + answers.collaborators + '\n\n'
    + '## License' + '\n' + answers.license + '\n\n' 
    + '##Find me on Github' + 'https://github.com/' + answers.githubUserName + '\n\n' 
    + '## Contribution Guidelines' + '\n' + answers.contributing + '\n\n'
    + '## Testing Instructions' + '\n' + answers.testInstructions + '\n\n'

    fs.writeFile(fileName, markdownString, function (err) {
        if (err) return console.log(err);
      })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
        // console.log('\nThis is everything:');
        // console.log(JSON.stringify(answers, null, '  '));
    });
}

// Function call to initialize app
init();