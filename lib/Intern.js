// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Code to define and export the Intern class.
const Intern = require("../lib/Intern");

describe("Intern", () => {
  it('should return an object containing a name, id, email, and school when called with the "new" keyword', () => {
    const intern = new Intern(
      "Jane Doe",
      1,
      "janedoe@gmail.com",
      "University of Washington"
    );
    // Again, used Jest's expect function to test that the Intern class returns an object containing the correct properties when called with the new keyword, that the getRole() method returns the correct string, and that the getGithub() method returns the correct github username.
    expect(intern).toEqual(expect.any(Object));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });

  it('should return "Intern" when getRole() is called', () => {
    const intern = new Intern(
      "Jane Doe",
      1,
      "janedoe@gmail.com",
      "University of Washington"
    );

    expect(intern.getRole()).toBe("Intern");
  });

  it("should return the school when getSchool() is called", () => {
    const intern = new Intern(
      "Jane Doe",
      1,
      "janedoe@gmail.com",
      "University of Washington"
    );

    expect(intern.getSchool()).toBe("University of Washington");
  });
});
