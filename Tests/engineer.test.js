const Engineer = require('../classes/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bill', 1, 'wmhhardgroveiv@gmail.com', 'WmHHardgrove');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Bill', 1, 'wmhhardgroveiv@gmail.com', 'WmHHardgrove');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Bill', 1, 'wmhhardgroveiv@gmail.com', 'WmHHardgrove');

    expect(engineer.getRole()).toEqual("Engineer");
});