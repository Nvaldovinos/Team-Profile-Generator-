//create variables for node package 
const inquirer = require('inquirer');
const fs = require('fs');

//variables for employee classes 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// An empty array for team members 

const questions = [{
    
    type: 'input',
    name: 'name',
    message: 'What is your name? ',
},



]
