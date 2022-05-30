import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss'],
})
export class OneWayBindingComponent implements OnInit {
  username: string = 'Cybersoft';

  constructor() {}

  ngOnInit(): void {}

  populateUsername(): string {
    return `Hello ${this.username}`;
  }

  changeUsername(value: string) {
    this.username = value;
  }

  onKeyup(usernameInput: HTMLInputElement) {
    this.username = usernameInput.value;
  }
}
