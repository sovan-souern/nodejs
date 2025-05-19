export class User {
  constructor(public name: string) {}

  login(): void {
    console.log(this.name + " logged in.");
  }
}
