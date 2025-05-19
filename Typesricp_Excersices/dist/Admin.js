"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin extends User_1.User {
    constructor(name, privileges) {
        super(name);
        this.privileges = privileges;
    }
    manageUsers() {
        console.log(this.name + " is managing users with privileges: " + this.privileges.join(', '));
    }
}
exports.Admin = Admin;
