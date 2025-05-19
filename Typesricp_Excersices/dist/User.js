"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    login() {
        console.log(this.name + " logged in.");
    }
}
exports.User = User;
