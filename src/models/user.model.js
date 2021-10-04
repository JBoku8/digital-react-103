export class User {
  constructor(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
    this.bio = "";
    this.age = 0;
  }

  getName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}
