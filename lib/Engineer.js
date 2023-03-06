// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
  constructor(name, id, email, github) {
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

module.exports = Engineer;

// const Engineer = require("../lib/Engineer");

// describe("Engineer", () => {
//   it('should return an object containing a name, id, email, and github username when called with the "new" keyword', () => {
//     const engineer = new Engineer(
//       "Jane Doe",
//       1,
//       "janedoe@gmail.com",
//       "janedoe"
//     );
//     // Used Jest's expect function to test that the Engineer class returns an object containing the correct properties when called with the new keyword, that the getRole() method returns the correct string, and that the getGithub() method returns the correct github username.
//     expect(engineer).toEqual(expect.any(Object));
//     expect(engineer.name).toEqual(expect.any(String));
//     expect(engineer.id).toEqual(expect.any(Number));
//     expect(engineer.email).toEqual(expect.any(String));
//     expect(engineer.github).toEqual(expect.any(String));
//   });

//   it('should return "Engineer" when getRole() is called', () => {
//     const engineer = new Engineer(
//       "Jane Doe",
//       1,
//       "janedoe@gmail.com",
//       "janedoe"
//     );

//     expect(engineer.getRole()).toBe("Engineer");
//   });

//   it("should return the github username when getGithub() is called", () => {
//     const engineer = new Engineer(
//       "Jane Doe",
//       1,
//       "janedoe@gmail.com",
//       "janedoe"
//     );

//     expect(engineer.getGithub()).toBe("janedoe");
//   });
// });jest
