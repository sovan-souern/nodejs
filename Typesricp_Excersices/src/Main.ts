import { Teacher } from './Teacher';
import { Student } from './Student';
import { Admin } from './Admin';
import { UserInterface } from './UserInterface';

const ui = new UserInterface();
ui.displayLogin();

const teacher = new Teacher("Mr. Chan");
const student = new Student("Sokha");
const admin = new Admin("Admin1", ["add", "delete", "update"]);

student.login();
teacher.login();
admin.login();

ui.displayMenu();
student.askPermission(teacher, ui);
admin.manageUsers();
