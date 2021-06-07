//create variables for node package 
const inquirer = require('inquirer');
const fs = require('fs');
// const html = require('./main Html/mainHtml');
const util = require('util');

//variables for employee classes 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const writeFileAsync = util.promisify(fs.writeFile);

//Manager array questions 
const empQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager: what is your name? ',
        },

        {
            type: 'input',
            name: 'id',
            message: 'Manager: what is your ID? ',
        },

        {
            type: 'input',
            name: 'email',
            message: 'Manager: what is your emal? ',
        },

        {
            type: 'input',
            name: 'OfficeNumber',
            message: 'Manager: what is your office number? '

        }
    ]);
};
//Get role array question for manager to decide what type of team member they would like to add to their team.
const getRoleQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'What type of team memeber would you like to add to your team? ',
        choices: ['Engineer', 'Intern', 'Exit'],
    }
];

//Enginner array questions
const engQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enginner: what is your name? ',
    },

    {
        type: 'input',
        name: 'id',
        message: 'Enginner: what is your ID? ',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Engineer: what is your emal? ',
    }, 

    {
        type: 'input',
        name: 'github',
        message: 'Enginner: what is their GitHub username? ',

    },
]

//intern array questions
const intQuestions = [
    {

        type: 'input',
        name: 'name',
        message: 'Intern: what is your name? ',
    },

    {
        type: 'input',
        name: 'id',
        message: 'Intern: what is your ID? ',
    },

    {
        type: 'input',
        name: 'email',
        message: 'Intern: what is your emal? ',
    }, 

    {
        type: 'input',
        name: 'school',
        message: 'Intern: what school are you they attending? ',

    },
];

const firstHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;



//Function to write README file
const init = () => {
    empQuestions()
      .then((answers) => writeFileAsync('index.html', firstHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
































































// Function call to initialize app
init();
// firstHTML();