// Create a class that extends the employee and include their office number 

const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, office){
        super(name, id, email)
        this.office = office;
    }

    // A method to get information about the manager 
    getRole(){
        return 'Manager';
    }

    getOffice(){
        return this.office;
    }
}

module.exports = Manager; 