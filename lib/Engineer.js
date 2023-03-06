// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
export default class Intern {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
