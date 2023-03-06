# Module 12 Object-Oriented Programming: Team Profile Generator

## Goal

This week I wrote a JavaScript program that prompts the user to input information about a development team (a team manager, engineers, and interns) using the Inquirer package. The program defines three functions, askManagerQuestions, askEngineerQuestions, and askInternQuestions, that prompt the user for specific information about each type of team member. The responses to these prompts are then used to create new instances of the Manager, Engineer, and Intern classes, respectively. The program also uses the generateHTML function to generate an HTML file containing the information about the team members and writes this file to the ./dist/index.html directory.

The program uses a switch statement to allow the user to choose which type of team member to add, and continues prompting the user for information until the user chooses to finish adding team members. Once the user is finished, the program generates the HTML file and writes it to disk.

## User Story

As a manager a user want to generate a webpage that displays my team's basic info so that a user have quick access to their emails and GitHub profiles.

## Instruction

I wrote the main code in `index.js` using inquirer to gather information about the development team members and to create objects for each team member using the correct classes as blueprints.
_ When a user starts the application then they are prompted to enter the **team manager**’s:
_ Name
_ Employee ID
_ Email address
_ Office number
_ When a user enters those requirements then the user is presented with a menu with the option to:
_ Add an engineer
_ Add an intern
_ Finish building the team
_ When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
_ Engineer's Name
_ ID
_ Email
_ GitHub username
_ When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
_ Intern’s name
_ ID
_ Email
_ School
_ When a user decides to finish building their team then they exit the application, and the HTML is generated.

- Call the `render` function (provided for you) and pass in an array containing all employee objects;
  - The `render` function will generate and return a block of HTML including templated divs for each employee!
- Create an HTML file using the HTML returned from the `render` function.
  - Write it to a file named `team.html` in the `output` folder.
  - You can use the provided variable `outputPath` to target this location.

---

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/14-object-oriented-programming-challenge-demo.png)

The styling in the image is just an example, so feel free to add your own.

---

## Getting Started

This Challenge will combine many of the skills we've covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help get started.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

---

## Hints

- You will want to make your methods as pure as possible. This means try to make your methods simple so that they are easier to test.

- The different employee types should all inherit some methods and properties from a base class of `Employee`.

- Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!
- You may need to check if the `output` folder exists and create it if it does not.

---

## Grading Requirements

This Challenge is graded based on the following criteria:

### Deliverables: 25%

- A sample HTML file generated using the application must be submitted.

- Your GitHub repository containing your application code.

### Technical Acceptance Criteria: 50%

- Satisfies all of the preceding acceptance criteria plus the following:

  - Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

  - All tests pass using the [Jest package](https://www.npmjs.com/package/jest).

  - The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.

### Repository Quality: 25%

- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains a high-quality readme with description.

---

## Review

You are required to submit the following for review:

- A sample HTML file generated using your application.

- The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
