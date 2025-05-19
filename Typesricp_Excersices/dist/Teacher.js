"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const User_1 = require("./User");
class Teacher extends User_1.User {
    givePermission() {
        return "Permission granted.";
    }
}
exports.Teacher = Teacher;
