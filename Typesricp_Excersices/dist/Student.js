"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const User_1 = require("./User");
class Student extends User_1.User {
    askPermission(teacher, ui) {
        console.log(this.name + " is preparing a permission request...");
        const details = ui.collectPermissionDetails();
        console.log(this.name + " asks for permission.");
        console.log("Reason: " + details.reason);
        console.log("From: " + details.startDate + " To: " + details.endDate);
        const response = teacher.givePermission();
        console.log("Teacher says: " + response);
    }
}
exports.Student = Student;
