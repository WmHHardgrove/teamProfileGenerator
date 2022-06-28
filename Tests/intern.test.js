const Intern = require('../classes/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Bill', 1, 'Wmhhardgroveiv@gmail.com', 'WSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Bill', 1, 'Wmhhardgroveiv@gmail.com', 'WSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Bill', 1, 'Wmhhardgroveiv@gmail.com.com', 'WSU');

    expect(intern.getRole()).toEqual("Intern");
}); 