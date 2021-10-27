// function that returns a license badge
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == '') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license == 'MIT') {
   return `https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt`;
 }
 if (license == 'Apache') {
   return `https://www.apache.org/licenses/LICENSE-2.0`;
 }
 if(license == 'GPL') {
   return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
 }
 if (license == ''){
   return '';
 }
};

// function that returns the populated license section of the README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == '') {
      return '';
    }
    if (license == 'MIT') {
      return `This project is covered under the ${license} license. 
      For details, visit: ${renderLicenseLink(license)}`;
    }
    if (license == 'Apache') {
    return `This project is covered undered the ${license} license. 
    For details, visit: ${renderLicenseLink(license)}`;
    }
    if (license == 'GPL') {
    return `This project is covered undered the ${license} license. 
    For details, visit: ${renderLicenseLink(license)}`;
    }
}

// function to generate markdown for README file
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ***************************************************************
  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
***************************************************************
## Installation
${data.install}
  
## Usage
  ${data.usage}
  
## License
  ${renderLicenseSection(data.license)}
  
## Contributing
  ${data.contribute}

## Tests
  ${data.tests}

## Questions
  For any questions regarding this project, please contact me via email (${data.email}).

  Check out my other project repositories on Github at: [${data.github}](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;
