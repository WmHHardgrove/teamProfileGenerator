const createManager = function (manager) {
    return `
    <div class="col-3 m-5 p-5 card text-center">
        <div>
            <div>
                <h2 class = "card-title"><u>${manager.name}</u></h2>
                <h3>Manager</h3>
            </div>
            <div class = "card-text">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
    <div class="col-3 m-5 p-5 card text-center">
        <div>
            <div>
                <h2 class = "card-title"><u>${engineer.name}</u></h2>
                <h3>Engineer</h3>
            </div>
            <div class = "card-text">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

const createIntern = function (intern) {
    return `
    <div class="col-3 m-5 p-5 card text-center">
        <div>
            <div>
                <h2 class = "card-title"><u>${intern.name}</u></h2>
                <h3>Intern</h3>
            </div>
            <div class = "card-text">
                <p>ID: ${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
};

generateHTML = (data) => {
    page = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager') {
            const managerCard = createManager(employee);

            page.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);

            page.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = createIntern(employee);

            page.push(internCard);
        }
    }

    const employeeCards = page.join('')
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header> 
          <nav>
            <h1 class ="text-center font-weight-bold">Team Profile</h1>
          </nav>
      </header>
      <main> 
        <div class="row justify-content-center">
                 ${employeeCards}
        </div>
      </main>
      
  </body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </html> `
}

module.exports = generateHTML; 