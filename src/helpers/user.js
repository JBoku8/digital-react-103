import { User } from "../models/user.model";

export const formatUser = (user) => `${user.firstName} ${user.lastName}`;
export const currentUser = new User("John", "Doe");

currentUser.bio =
  "Dependabot pulls down your dependency files and looks for any outdated or insecure requirements.";
currentUser.age = 3;
