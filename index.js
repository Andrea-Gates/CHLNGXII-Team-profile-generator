// Import required packages (classes)
import inquirer from "inquirer";
import fs from "fs";
import generateHTML from "./src/generateHTML.js";
import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";

// Function to prompt user for manager's information
async function main() {
  try {
    // Ask for team manager information
    const managerQuestions = [
      {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the team manager's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the team manager's office number?",
        name: "officeNumber",
      },
    ];

    const { name, id, email, officeNumber } = await inquirer.prompt(
      managerQuestions
    );
    const teamManager = new Manager(name, id, email, officeNumber);

    // Ask for team member information until user chooses to finish
    const teamMembers = [];
    let addMoreMembers = true;

    while (addMoreMembers) {
      const memberQuestions = [
        {
          type: "list",
          message: "Which type of team member do you want to add?",
          name: "memberType",
          choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members",
          ],
        },
      ];

      const { memberType } = await inquirer.prompt(memberQuestions);

      switch (memberType) {
        case "Engineer":
          const engineerQuestions = [
            {
              type: "input",
              message: "What is the engineer's name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is the engineer's ID?",
              name: "id",
            },
            {
              type: "input",
              message: "What is the engineer's email address?",
              name: "email",
            },
            {
              type: "input",
              message: "What is the engineer's GitHub username?",
              name: "github",
            },
          ];

          const {
            name: engineerName,
            id: engineerId,
            email: engineerEmail,
            github,
          } = await inquirer.prompt(engineerQuestions);
          const engineer = new Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            github
          );
          teamMembers.push(engineer);
          break;

        case "Intern":
          const internQuestions = [
            {
              type: "input",
              message: "What is the intern's name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is the intern's ID?",
              name: "id",
            },
            {
              type: "input",
              message: "What is the intern's email address?",
              name: "email",
            },
            {
              type: "input",
              message: "What school does the intern attend?",
              name: "school",
            },
          ];

          const {
            name: internName,
            id: internId,
            email: internEmail,
            school,
          } = await inquirer.prompt(internQuestions);
          const intern = new Intern(internName, internId, internEmail, school);
          teamMembers.push(intern);
          break;

        default:
          // If user chooses to finish adding team, generate HTML and write to file

          addMoreMembers = false;
          const html = generateHTML(teamManager, teamMembers);
          fs.writeFile("./dist/index.html", html, (err) => {
            if (err) throw err;
            console.log("HTML file generated successfully!");
          });
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// Call main function to start program
main();
