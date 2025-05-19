export class UserInterface {
  displayLogin(): void {
    console.log("=== Login Screen ===");
  }

  displayRegister(): void {
    console.log("=== Register Screen ===");
  }

  displayMenu(): void {
    console.log("=== Main Menu ===");
    console.log("1. Login");
    console.log("2. Register");
    console.log("3. Request Permission");
  }

  collectPermissionDetails(): {
    reason: string;
    startDate: string;
    endDate: string;
  } {
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
