//global variables
const fs = require('fs');
const inquirer = require('inquirer');


// questions

const questions = []
inquirer
  .prompt([
    {
      //Github username
      type: 'input',
      message: 'Enter your Github username?',
      name: 'username',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('please enter your github username!');
          return false;
        }
      }
    },

    {
      //Github Repository
      type: 'input',
      message: 'Enter in your github repository name ?',
      name: 'repository',
      validate: repository => {
        if (repository) {
          return true;
        } else {
          console.log('please enter your github repository name!');
          return false;
        }
      }
    },

    {
      // Title of project
      type: 'input',
      message: 'What is the title of this project?:',
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
      message: 'What command should be run to install dependencies?',
      default: 'npm install'
    },
    // usage
    {
      type: 'input',
      name: 'usage',
      message: 'Enter your project instructions and examples'
    },

    // license

    {
      type: 'list',
      name: 'license',
      message: 'What license should your project have?',
      choices: [
        'MIT',
        'Unlicense',
        'Apache 2.0',
        'GNU LGPLv3',
        'GNU GPLv3',
        'GNU AGPLv3',
        'BSD 3-Clause',
        'Mozilla Public License 2.0',
        'Boost Software License 1.0'
      ]
    },
    // testing for project
    {
      type: 'input',
      name: 'test',
      message: 'Provide tests for project, and explain how to test',
      default: 'npm run test'
    },

    // contribution for projects

    {
      type: 'input',
      name: 'contribute',
      message: 'Explain how users can contribute to your project'
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

// add function to prompt user inputs
const promptUser = () => {
  return inquirer.prompt(questions);
}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const fs = require('fs');

function writeToFile(fileName, data) {}
fs.writeFile('log.txt', process.argv[2], (err) =>
   err ? console.error(err) : console.log('Success!')
 );

function init() {}


init();



