"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInterface = void 0;
class UserInterface {
    displayLogin() {
        console.log("=== Login Screen ===");
    }
    displayRegister() {
        console.log("=== Register Screen ===");
    }
    displayMenu() {
        console.log("=== Main Menu ===");
        console.log("1. Login");
        console.log("2. Register");
        console.log("3. Request Permission");
    }
    collectPermissionDetails() {
        const reason = "Medical leave";
        const startDate = "2025-05-20";
        const endDate = "2025-05-22";
        console.log("Collecting permission details...");
        console.log("Reason: " + reason);
        console.log("Start Date: " + startDate);
        console.log("End Date: " + endDate);
        return { reason: reason, startDate: startDate, endDate: endDate };
    }
}
exports.UserInterface = UserInterface;
