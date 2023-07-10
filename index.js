const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generatemarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter title of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of this project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter description of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions on how to install your application',
        default: 'npm install',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples of usage. If you are unsure, you can enter in N/A',
        default: 'node index.js',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter instructions on how to use the application.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to this challenge? And can any future contributors contribute to this repo',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter guidelines for future contribution.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests written for your application',
        default: 'npm run test',
        validate: testsInput => {
            if (testsInput) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: [
            'Apache License 2.0',
            'Boost Software License 1.0',
            'GNU AGPL v3',
            'GNU GPL v3',
            'GNU LGPL v3',
            'GNU FDLv 1.3',
            'ISC',
            'Mozilla Public License 2.0',
            'MIT License',
            'N/a'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email address.');
                return false;
            }
        }
    },
];

const writeToFile = (fileName, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

function init() {
    return inquirer.prompt(questions);
};

init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(generateMarkdown => {
        return writeToFile('./dist/README.md', generateMarkdown);
    })
    .catch(err => {
        console.log(err);
    });




//global variables
// const fs = require('fs');
// const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// // questions
// const questions = [
// inquirer
//   .prompt([
//     // name or full name
//     {
//       type: 'input',
//       message: 'Enter your name (Required)?',
//       name: 'username',
//       default: 'optional for full name',
//       validate: name => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('please enter your name!');
//           return false;
//         }
//       }
//     },

//    //Github username
//     {
//       type: 'input',
//       message: 'Enter in your github username (Required)?',
//       name: 'repository',
//       validate: githubInput => {
//         if (githubInput) {
//           return true;
//         } else {
//           console.log('please enter your github username!');
//           return false;
//         }
//       }
//     },

//     // Title of project
//     {
//       type: 'input',
//       message: 'What is the title of this project? (Required):',
//       name: 'Github',
//       validate: challengeInput => {
//         if (challengeInput) {
//           return true;
//         } else {
//           console.log('please enter the title of this project!');
//           return false;
//         }
//       }
//     },

//     // installation
//     {
//       type: 'input',
//       name: 'installation',
//       message: 'What command should be run to install dependencies (Required)?',
//       default: 'npm install',
//       validate: commandInput => {
//         if (commandInput) {
//           return true;
//         } else {
//           console.log('please enter the title of this project!');
//           return false;
//         }
//       }
//     },

//     // usage
//     {
//       type: 'input',
//       name: 'usage',
//       message: 'Enter your project instructions and examples (Required)',
//       validate: usageInput => {
//         if (usageInput) {
//           return true;
//         } else {
//           console.log('please enter the title of this project!');
//           return false;
//         }
//       }
//     },

//     // license
//     {
//       type: 'list',
//       name: 'license',
//       message: 'What license should your project have? (Required)',
//       choices: [
//         'MIT',
//         'Unlicense',
//         'Apache 2.0',
//         'GNU LGPLv3',
//         'GNU GPLv3',
//         'GNU AGPLv3',
//         'BSD 2-Clause (simplified)',
//         'BSD 3-Clause',
//         'Mozilla Public License 2.0',
//         'Boost Software License 1.0',
//         'none'
//       ]
//     },

//     // testing for project
//     {
//       type: 'input',
//       name: 'test',
//       message: 'Provide tests for project, and explain how to test (Required)',
//       default: 'npm run test',
//       validate: testInput => {
//         if (testInput) {
//           return true;
//         } else {
//           console.log('please enter command to run test!');
//           return false;
//         }
//       }
//     },

//     // contribution for projects
//     {
//       type: 'input',
//       name: 'contribute',
//       message: 'Please enter the contributors',
//       validate: contributorsInput => {
//         if (contributorsInput) {
//           return true;
//         } else {
//           console.log('please enter the title of this project!');
//           return false;
//         }
//       }
//     },

//     // questions about project
//     {
//       type: 'input',
//       name: 'email',
//       message: 'Enter your email address (Required)',
//       validate: emailInput => {
//         if (emailInput) {
//           return true;
//         } else {
//           console.log('Please enter your email address!');
//           return false;
//         }
//       }
//     }
//   ])
// ]

//   const writeToFile = (fileName, data) => {
//     return new Promise((resolve, reject) => {
//         fs.writeToFile(fileName, data, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true,
//                 message: 'File is created!'
//             });
//         });
//     });
// };

// function init () {
//  return inquirer.prompt(questions)
// }
//     init()
//     .then(data => {
//       return generateMarkdown(data);
//     })
//     .then (generateMarkdown => {
//       return writeToFile('./utils/README.md,generateMarkdown');
//     })
//     .catch(err => {
//       console.log(err);
//     })


