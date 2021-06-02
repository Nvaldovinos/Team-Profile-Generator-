// Create a class that extends the employee class and it also gets github info 

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    //Create methods to get information about engineer 

    getRole(){
        return 'Engineer';
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;