import { User } from './User';

export class Teacher extends User {
  givePermission(): string {
    return "Permission granted.";
  }
}
