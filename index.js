// Import required packages and classes
const inquirer = require("inquirer");

const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeamHTML = require("./src/page-template");

// Define function to ask questions about the team manager
function askManagerQuestions() {
  const questions = [
    {
      type: "input",
      message: "What is the name of the team manager?",
      name: "name",
      validate: (input) => (input ? true : "Please enter a name."),
    },
    {
      type: "input",
      message: "What is the ID of the team manager?",
      name: "id",
      validate: (input) => (input ? true : "Please enter an ID."),
    },
    {
      type: "input",
      message: "What is the email address of the team manager?",
      name: "email",
      validate: (input) => (input ? true : "Please enter an email address."),
    },
    {
      type: "input",
      message: "What is the office number of the team manager?",
      name: "officeNumber",
      validate: (input) => (input ? true : "Please enter an office number."),
    },
  ];

  return inquirer.prompt(questions);
}

// Define function to ask questions about an engineer
function askEngineerQuestions() {
  const questions = [
    {
      type: "input",
      message: "What is the name of the engineer?",
      name: "name",
      validate: (input) => (input ? true : "Please enter a name."),
    },
    {
      type: "input",
      message: "What is the ID of the engineer?",
      name: "id",
      validate: (input) => (input ? true : "Please enter an ID."),
    },
    {
      type: "input",
      message: "What is the email address of the engineer?",
      name: "email",
      validate: (input) => (input ? true : "Please enter an email address."),
    },
    {
      type: "input",
      message: "What is the GitHub username of the engineer?",
      name: "github",
      validate: (input) => (input ? true : "Please enter a GitHub username."),
    },
  ];

  return inquirer.prompt(questions);
}

// Define function to ask questions about an intern
function askInternQuestions() {
  const questions = [
    {
      type: "input",
      message: "What is the name of the intern?",
      name: "name",
      validate: (input) => (input ? true : "Please enter a name."),
    },
    {
      type: "input",
      message: "What is the ID of the intern?",
      name: "id",
      validate: (input) => (input ? true : "Please enter an ID."),
    },
    {
      type: "input",
      message: "What is the email address of the intern?",
      name: "email",
      validate: (input) => (input ? true : "Please enter an email address."),
    },
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "school",
      validate: (input) => (input ? true : "Please enter a school name."), // Validate if input is not empty
    },
  ];

  return inquirer.prompt(questions);
}

// Define function to ask what type of team member to add
function askTeamMemberType() {
  const question = {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "teamMemberType",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  };

  return inquirer.prompt(question);
}

// Define async function to run the application
async function runApp() {
  // Ask questions about the team manager
  const managerAnswers = await askManagerQuestions();
  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.id,
    managerAnswers.email,
    managerAnswers.officeNumber
  );

  // Create empty array to store team members
  const teamMembers = [manager];

  // Ask what type of team member to add
  let addTeamMember = true;
  while (addTeamMember) {
    const teamMemberTypeAnswer = await askTeamMemberType();
    const teamMemberType = teamMemberTypeAnswer.teamMemberType;

    switch (teamMemberType) {
      case "Engineer":
        // Ask questions about an engineer
        const engineerAnswers = await askEngineerQuestions();
        const engineer = new Engineer(
          engineerAnswers.name,
          engineerAnswers.id,
          engineerAnswers.email,
          engineerAnswers.github
        );
        teamMembers.push(engineer);
        break;

      case "Intern":
        // Ask questions about an intern
        const internAnswers = await askInternQuestions();
        const intern = new Intern(
          internAnswers.name,
          internAnswers.id,
          internAnswers.email,
          internAnswers.school
        );
        teamMembers.push(intern);
        break;

      default:
        addTeamMember = false;
        break;
    }
  }

  // Generate HTML file with the team information
  const teamHTML = generateTeamHTML(teamMembers);
  fs.writeFileSync("./dist/team.html", teamHTML);

  console.log("Team HTML file has been generated!");

  // Call the function to run the application
  runApp();
}

runApp();
