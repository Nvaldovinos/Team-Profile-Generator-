// Create a class that extends the employee class that includes the school 

const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, school){
        super(name, id, email);
        this.school = school;
    }

    // Method to get information aboy the intern 
    getRole(){
        return 'Intern';
    }
    
    getSchool(){
        return this.school;
    }
}


module.exports = Intern;