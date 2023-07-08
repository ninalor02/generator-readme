//global variables
const fs = require('fs');
const inquirer = require('inquirer');

// questions
const questions = []
inquirer
  .prompt([
    //Github username
    {
      type: 'input',
      message: 'Enter your name (Required)?',
      name: 'username',
      default: 'optional for full name',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('please enter your name!');
          return false;
        }
      }
    },

    //Github Repository
    {
      type: 'input',
      message: 'Enter in your github username (Required)?',
      name: 'repository',
      validate: repository => {
        if (repository) {
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
      message: 'Enter your project instructions and examples (Required)'
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
      default: 'npm run test'
    },

    // contribution for projects
    {
      type: 'input',
      name: 'contribute',
      message: 'Explain how users can contribute to your project (Required)'
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
