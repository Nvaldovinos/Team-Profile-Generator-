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
const { publicDecrypt } = require('crypto');

const writeFileAsync = util.promisify(fs.writeFile);

//create an empty array to store employees 
let teamMember = [];

//Manager array questions 
const mangQuestions = () => {
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



  //Get role array question for manager to decide what type of team member they would like to add to their team.
  // const getRoleQuestions = [
  //     {
  //         type: 'list',
  //         name: 'role',
  //         message: 'What type of team memeber would you like to add to your team? ',
  //         choices: ['Engineer', 'Intern', 'Exit'],
  //     }
  // ];

  // //Enginner array questions
  // const engQuestions = [
  //     {
  //         type: 'input',
  //         name: 'name',
  //         message: 'Enginner: what is your name? ',
  //     },

  //     {
  //         type: 'input',
  //         name: 'id',
  //         message: 'Enginner: what is your ID? ',
  //     },

  //     {
  //         type: 'input',
  //         name: 'email',
  //         message: 'Engineer: what is your emal? ',
  //     }, 

  //     {
  //         type: 'input',
  //         name: 'github',
  //         message: 'Enginner: what is their GitHub username? ',

  //     },
  // ]

  // //intern array questions
  // const intQuestions = [
  //     {

  //         type: 'input',
  //         name: 'name',
  //         message: 'Intern: what is your name? ',
  //     },

  //     {
  //         type: 'input',
  //         name: 'id',
  //         message: 'Intern: what is your ID? ',
  //     },

  //     {
  //         type: 'input',
  //         name: 'email',
  //         message: 'Intern: what is your emal? ',
  //     }, 

  //     {
  //         type: 'input',
  //         name: 'school',
  //         message: 'Intern: what school are you they attending? ',

  //     },
  // ];
};

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
    <h1 class="display-4 text-center">Meet our Team!</h1>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${answers.name}</h5>
    <p class="card-text">${answers.role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answers.id}</li>
    <li class="list-group-item">Office Number: ${answers.OfficeNumber}</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">${answers.email}</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  </div>
</div>
</body>
</html>`;

const engQuestion = () => {
  inquirer.prompt([
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
  ]) .then((answers) => {
    var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamMember.push(engineer);
    teamQuestion();
   console.log(teamMember)
  })
};

const intQuestion = () =>{

}

const createTeam = () =>{
  //
}

const teamQuestion = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What type of team memeber would you like to add to your team? ',
      choices: ['Engineer', 'Intern', 'Exit'],
    }
  ]).then((answer) => {
    switch (answer.role) {
      case 'Engineer':
        engQuestion();
        break;

      case 'Intern':
        intQuestion();
        break;

      case 'Exit':
        createTeam();
        break;
    }
  })
};



//Function to write file
const init = () => {
  mangQuestions()
    .then((answers) => {
      var manager = new Manager(answers.name, answers.id, answers.email, answers.OfficeNumber);
      teamMember.push(manager);
      teamQuestion();
    })

    





};




// const init = () => {
//     mangQuestions()
//         .then((answers) => writeFileAsync('index.html', firstHTML(answers)))
//         .then((answers) => writeFileAsync('index.html', firstHTML(answers)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));
// };



// Function call to initialize app
init();
// firstHTML();