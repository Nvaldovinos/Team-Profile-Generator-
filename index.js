//create variables for node package 
const inquirer = require('inquirer');
const fs = require('fs');

//variables for employee classes 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Manager array questions 
const empQuestions = [
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
];

//Get role array question for manager to decide what type of team member they would like to add to their team.
const getRoleQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'What type of team memeber would you like to add to your team? ',
        choices: ['Engineer', 'Intern'],
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

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err){
            return console.log(err);
        }
    });
}


// A function to initialize app for manager questions 
function init() {
    inquirer.prompt(empQuestions).then((responses) => {
        console.log(responses, 'responses')
        writeToFile('Team-Profile', html(responses))
    })
}

// function init() {
//     inquirer.prompt(engQuestions).then((responses) => {
//         console.log(responses, 'responses')
//         writeToFile('Team-Profile', html(responses))
//     })
// }

// function init() {
//     inquirer.prompt(intQuestions).then((responses) => {
//         console.log(responses, 'responses')
//         writeToFile('Team-Profile', html(responses))
//     })
// }






























































// Function call to initialize app
init();
// firstHTML();