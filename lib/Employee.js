// Create a class for employees that has a constructor function inside the class, get name, id and email of employee 

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //create methods to get employee imformation 
    getName(){
        return this.name;
    }
}

module.exports = Employee;