// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
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

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

// const Manager = require("../lib/Manager");

// describe("Manager", () => {
//   it('should return an object containing a name, id, email, and office number when called with the "new" keyword', () => {
//     const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", "100");
//     // Again, used Jest's expect function to test that the Manager class returns an object containing the correct properties when called with the new keyword, that the getRole() method returns the correct string, and that the getGithub() method returns the correct github username.
//     expect(manager).toEqual(expect.any(Object));
//     expect(manager.name).toEqual(expect.any(String));
//     expect(manager.id).toEqual(expect.any(Number));
//     expect(manager.email).toEqual(expect.any(String));
//     expect(manager.officeNumber).toEqual(expect.any(String));
//   });

//   it('should return "Manager" when getRole() is called', () => {
//     const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", "100");

//     expect(manager.getRole()).toBe("Manager");
//   });

//   it("should return the office number when getOfficeNumber() is called", () => {
//     const manager = new Manager("Jane Doe", 1, "janedoe@gmail.com", "100");

//     expect(manager.getOfficeNumber()).toBe("100");
//   });
// });
