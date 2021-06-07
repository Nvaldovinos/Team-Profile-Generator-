const Employee = require('../lib/Employee');

describe('Employee class', () => {
    it('Can get name with getName', () =>{
        expect(new Employee('naomi').toString()).toBe('naomi')
    });

    it('Can get instantiate Employee', () =>{
        const emp = new Employee()
        expect(typeof(emp)).toBe('object')
    });
});
    
