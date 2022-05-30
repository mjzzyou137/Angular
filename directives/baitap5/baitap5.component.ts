import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap5",
  templateUrl: "./baitap5.component.html",
  styleUrls: ["./baitap5.component.scss"],
})
export class Baitap5Component implements OnInit {
  username: string = "";
  password: string = "";
  isLogin: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleLogin() {
    if (this.username === "cybersoft" && this.password === "cybersoft") {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
}
