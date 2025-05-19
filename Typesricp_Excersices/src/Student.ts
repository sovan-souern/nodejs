import { User } from './User';
import { Teacher } from './Teacher';
import { UserInterface } from './UserInterface';

export class Student extends User {
  askPermission(teacher: Teacher, ui: UserInterface): void {
    console.log(this.name + " is preparing a permission request...");

    const details = ui.collectPermissionDetails();

    console.log(this.name + " asks for permission.");
    console.log("Reason: " + details.reason);
    console.log("From: " + details.startDate + " To: " + details.endDate);
    
    const response = teacher.givePermission();
    console.log("Teacher says: " + response);
  }
}
