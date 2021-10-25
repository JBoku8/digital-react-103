export class User {
  constructor(fn, ln, age = 0) {
    this.firstName = fn;
    this.lastName = ln;
    this.bio = 'Default bio text';
    this.age = age;
  }

  getName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }
}
