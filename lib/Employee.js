// TODO: Write code to define and export the Employee class
// Code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
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

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// const Employee = require("../lib/Employee");

// describe("Employee", () => {
//   it('should return an object containing a name, id, and email when called with the "new" keyword', () => {
//     const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");
//     // Here, use Jest's expect function to test that the Employee class returns an object containing the correct properties when called with the new keyword, that the getRole() method returns the correct string, and that the getGithub() method returns the correct github username.
//     expect(employee).toEqual(expect.any(Object));
//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
//   });

//   it('should return "Employee" when getRole() is called', () => {
//     const employee = new Employee("Jane Doe", 1, "janedoe@gmail.com");

//     expect(employee.getRole()).toBe("Employee");
//   });
// });
