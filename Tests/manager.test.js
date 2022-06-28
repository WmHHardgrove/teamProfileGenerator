const Manager = require('../classes/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Bill', 1, 'Wmhhardgroveiv@gmail.com', 10);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Bill', 1, 'Wmhhardgroveiv@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 