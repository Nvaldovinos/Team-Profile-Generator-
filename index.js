//create variables for node package 
const inquirer = require('inquirer');
const fs = require('fs');

//variables for employee classes 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Manager array questions 
const Empquestions = [
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
        type: 'Manager: what is your office number? ',
        name: 'github',
        message: 'Enginner: what is your GitHub username? ',
    
    },
]