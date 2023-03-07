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


## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![30E457A1-BB8B-4F8B-9F16-495F1F334AED_1_201_a](https://user-images.githubusercontent.com/93196580/223346108-40e6e654-d801-424d-92b2-7d048cc2f2db.jpeg)


---

- A sample HTML file generated using your application.

- The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
