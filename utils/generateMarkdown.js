// version 1

const renderLicenseBadge = license => {
    if (license === 'Apache License 2.0') {
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    } else if (license === 'Boost Software License 1.0') {
        return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
    } else if (license === 'GNU AGPL v3') {
        return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
    } else if (license === 'GNU FDLv 1.3') {
        return 'https://img.shields.io/badge/License-FDL%20v1.3-blue.svg';
    } else if (license === 'GNU GPL v3') {
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    } else if (license === 'GNU LGPL v3') {
        return 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg';
    } else if (license === 'ISC') {
        return 'https://img.shields.io/badge/License-ISC-blue.svg';
    } else if (license === 'Mozilla Public License 2.0') {
        return 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
    } else if (license === 'MIT License') {
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    } else {
        return '';
    }
};
const renderLicenseLink = license => {
    if (license === 'Apache License 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'Boost Software License 1.0') {
        return 'https://www.boost.org/LICENSE_1_0.txt';
    } else if (license === 'GNU AGPL v3') {
        return 'https://www.gnu.org/licenses/agpl-3.0';
    } else if (license === 'GNU FDLv 1.3') {
        return 'https://www.gnu.org/licenses/fdl-1.3';
    } else if (license === 'GNU GPL v3') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'GNU LGPL v3') {
        return 'https://www.gnu.org/licenses/lgpl-3.0';
    } else if (license === 'ISC') {
        return 'https://opensource.org/licenses/ISC';
    } else if (license === 'Mozilla Public License 2.0') {
        return 'https://opensource.org/licenses/MPL-2.0'; 
    } else if (license === 'MIT License') {
        return 'https://opensource.org/licenses/MIT';
    } else {
        return '';
    }
};

const createBadge = license => {
    if (license === 'N/a') {
        return '';
    }
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

function renderLicenseSection(license) {
    if (license === 'N/a') {
        return '';
    }
    return `${license}`;
};

module.exports = data => {
    const {license} = data;
    console.log(data);
    console.log(license);

    return `
# ${data.title}
${createBadge(license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

Contact me at: <br/>
[GitHub](https://github.com/${data.username})
<${data.email}>
`;
}



// version 2


// const generateMarkdown = data => {
//     data.licenseBadge = licenseBadgeLinks[data.license];

//     return `
// # ${data.title}
// ${data.licenseBadge}
// [![Badge for GitHub](https://img.shields.io/github/languages/top/${data.username}/${data.repository}?style=flat&logo=appveyor)](https://${data.username}.github.io/${data.repository})


// ## Description
// ${data.description}

// ## Table of Contents

// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Tests](#tests)
// * [Website](#website)
// * [Contribution](#contribution)
// * [Questions](#questions)
    
// ## Installation

// ${data.installation}

// ## Usage

// ${data.usage}

// ## License

// This repository is licensed under the ${data.license} license.

// ## Tests

// To run tests, run the following:
// \
// ${data.test}
// \

// ## Website

// https://${data.username}.github.io/${data.repository}

// ## Contribution

// ${data.contribute}

// ## Questions

// Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}).  (https://ninalor02.github.io/generator-readme/)
// View more of my work in GitHub at [@${data.username}](https://github.com/${data.username}) (https://github.com/ninalor02)
// `; 
// };

// module.exports = generateMarkdown;