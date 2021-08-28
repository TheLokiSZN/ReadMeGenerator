// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n [License](#license) \n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `
    License
    This product was made with ${license} license`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Github
  this project was made by: ${data.github}
  ${renderLicenseSection(data.license)}

  ## Table of Contents:
  
  ### Languages
  This project uses the following languages: ${data.languages}

  ### Description
  This project is a generator that will ask the user specific questions on what they would like to be put into their README file.
  This was made for ease of use for individuals who have a hard time writing effective README files.

  ### Installation
  npm i inquirer

  This application is invoked by using the following command:
  node index.js
`;
}

module.exports = generateMarkdown;
