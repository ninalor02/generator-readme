//global variables
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// questions
const questions = [
inquirer
  .prompt([
    // name or full name
    {
      type: 'input',
      message: 'Enter your name (Required)?',
      name: 'username',
      default: 'optional for full name',
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log('please enter your name!');
          return false;
        }
      }
    },

   //Github username
    {
      type: 'input',
      message: 'Enter in your github username (Required)?',
      name: 'repository',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('please enter your github username!');
          return false;
        }
      }
    },

    // Title of project
    {
      type: 'input',
      message: 'What is the title of this project? (Required):',
      name: 'Github',
      validate: challenge => {
        if (challenge) {
          return true;
        } else {
          console.log('please enter the title of this project!');
          return false;
        }
      }
    },

    // installation
    {
      type: 'input',
      name: 'installation',
      message: 'What command should be run to install dependencies (Required)?',
      default: 'npm install'
    },

    // usage
    {
      type: 'input',
      name: 'usage',
      message: 'Enter your project instructions and examples (Required)',
    },

    // license
    {
      type: 'list',
      name: 'license',
      message: 'What license should your project have? (Required)',
      choices: [
        'MIT',
        'Unlicense',
        'Apache 2.0',
        'GNU LGPLv3',
        'GNU GPLv3',
        'GNU AGPLv3',
        'BSD 2-Clause (simplified)',
        'BSD 3-Clause',
        'Mozilla Public License 2.0',
        'Boost Software License 1.0',
        'none'
      ]
    },

    // testing for project
    {
      type: 'input',
      name: 'test',
      message: 'Provide tests for project, and explain how to test (Required)',
      default: 'npm run test',
      validate: test => {
        if (test) {
          return true;
        } else {
          console.log('please enter command to run test!');
          return false;
        }
      }
    },

    // contribution for projects
    {
      type: 'input',
      name: 'contribute',
      message: 'Please enter the contributors'
    },

    // questions about project
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    }
  ])
]

  const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
            });
        });
    });
};

function init () {
  inquirer.prompt(questions)
  .then(function(answer){
    console.log(answer);

    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
  }
    )};

    init();
    module.exports = questions;


