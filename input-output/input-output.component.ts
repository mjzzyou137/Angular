import { Component, OnInit } from "@angular/core";

interface User {
  name: string;
  age: number;
}

@Component({
  selector: "app-input-output",
  templateUrl: "./input-output.component.html",
  styleUrls: ["./input-output.component.scss"],
})
export class InputOutputComponent implements OnInit {
  users: User[] = [
    { name: "Cybersoft", age: 5 },
    { name: "Khai", age: 15 },
    { name: "Tran", age: 25 },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleRemove(user: User) {
    const index = this.users.findIndex(
      (currentUser) => currentUser.name === user.name
    );

    this.users.splice(index, 1);
  }
}
