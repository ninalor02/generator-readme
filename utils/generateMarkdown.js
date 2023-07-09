
const licenseBadgeLinks = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "Apache 2.0": "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU LGPLv3": "[![License: GNU LGPLv3](https://img.shields.io/badge/license-lgplv3-blueviolet.svg)](https://choosealicense.com/licenses/lgpl-3.0)",
    "GNU GPLv3": "[![License: GNU GPLv3](https://img.shields.io/badge/license-gplv3-red.svg)](https://choosealicense.com/licenses/gpl-3.0)",
    "GNU AGPLv3": "[![License: GNU AGPLv3](https://img.shields.io/badge/license-agplv3-green.svg)](https://choosealicense.com/licenses/agpl-3.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Boost Software License 1.0": "[![License: BSL 1.0](https://img.shields.io/badge/license-BSL%201.0-orange.svg)](https://choosealicense.com/licenses/bsl-1.0)"
}

const generateMarkdown = data => {
    data.licenseBadge = licenseBadgeLinks[data.license];

    return `
# ${data.title}
${data.licenseBadge}
[![Badge for GitHub](https://img.shields.io/github/languages/top/${data.username}/${data.repository}?style=flat&logo=appveyor)](https://${data.username}.github.io/${data.repository})


## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Website](#website)
* [Contribution](#contribution)
* [Questions](#questions)
    
## Installation

${data.installation}

## Usage

${data.usage}

## License

This repository is licensed under the ${data.license} license.

## Tests

To run tests, run the following:
\
${data.test}
\

## Website

https://${data.username}.github.io/${data.repository}

## Contribution

${data.contribute}

## Questions

Questions about this repository? Please contact me at [${data.email}](mailto:${data.email}). 
View more of my work in GitHub at [@${data.username}](https://github.com/${data.username})
`; 
};

module.exports = generateMarkdown;