// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'MIT': 'https://img.shields.io/badge/License-MIT-blue.svg',
    'Apache-2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPL-3.0': 'https://img.shields.io/badge/License-GPL%203.0-blue.svg',
    'BSD-3': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
    'MPL-2.0': 'https://img.shields.io/badge/License-MPL%202.0-blue.svg',
    'LGPL-3.0': 'https://img.shields.io/badge/License-LGPL%203.0-blue.svg',
    'ISC': 'https://img.shields.io/badge/License-ISC-blue.svg',
    'Unlicense': 'https://img.shields.io/badge/License-Unlicense-blue.svg'
  }
  return licenseLink[license]

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.motivation}
  ${data.why}
  ${data.solve}
  ${data.learn}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}
  
  ## License

  ![License](${renderLicenseLink(data.license)})
  This project is licensed under the ${data.license} license.

  ## Features

  ${data.features}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions, contact me at:
  * GitHub: https://github.com/${data.username}/
  * Email: ${data.email}
`;
}

export default generateMarkdown;
