// Create a class that extends the employee and include their office number 

const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum){
        super(name, id, email)
        this.office = office;
    }

    // A method to get information about the manager 
    getRole(){
        return 'Manager';
    }

    getOfficeNum(){
        return this.officeNum;
    }
}

module.exports = Manager; 