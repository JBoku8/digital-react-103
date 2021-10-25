import { User } from '../models/user.model';

export const formatUser = user =>
  `${user.firstName} ${user.lastName}, my age is ${user.age}`;
export const currentUser = new User('John', 'Doe');

currentUser.bio =
  'Dependabot pulls down your dependency files and looks for any outdated or insecure requirements.';
currentUser.age = 3;

export const dummyData = [
  new User('John', 'Doe', 10),
  new User('James', 'Bond', 13),
  new User('John', 'Smith', 23),
  new User('John', 'Doe', 27),
];
