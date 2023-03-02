const path = require("path");
const fs = require("fs");

// Define renderManager, renderEngineer, and renderIntern. Each function to take an employee object as an argument and return an HTML template string that is specific to the employee's role. Use fs module to read in the HTML template and replace placeholders with employee info see line 83
const templatesDir = path.resolve(__dirname, "../templates");

// Function takes an array of employee objects as an argument and uses the filter method to separate the employees by their roles. It then maps each employee to their corresponding template string using the appropriate rendering function.
const render = (employees) => {
  const html = [];

  html.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  html.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMain(html.join(""));
};

const renderManager = (manager) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );
  return template;
};

const renderEngineer = (engineer) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = (intern) => {
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

// These resulting HTML strings are combined and passed to this function, which inserts the HTML into a main template and returns the HTML string
const renderMain = (html) => {
  const template = fs.readFileSync(
    path.resolve(templatesDir, "main.html"),
    "utf8"
  );
  return replacePlaceholders(template, "team", html);
};

// This function takes a template string, a placeholder string, and a value. The expression  replaces in the html template any and all possible vavlues within the placeholder string
const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

// exports the render function for use in the other JavaScript files
module.exports = render;
