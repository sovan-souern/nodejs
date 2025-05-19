import { User } from './User';

export class Admin extends User {
  privileges: string[];

  constructor(name: string, privileges: string[]) {
    super(name);
    this.privileges = privileges;
  }

  manageUsers(): void {
    console.log(this.name + " is managing users with privileges: " + this.privileges.join(', '));
  }
}
