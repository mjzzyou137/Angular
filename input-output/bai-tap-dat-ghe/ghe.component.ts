import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Chair } from "./bai-tap-dat-ghe.component";

@Component({
  selector: "app-ghe",
  template: `<button
    [ngClass]="{
      'bg-danger': chair.TrangThai,
      'bg-success': isSelectedChair
    }"
    [disabled]="chair.TrangThai"
    class="chair"
    (click)="handleSelect()"
  >
    {{ chair.SoGhe }}
  </button>`,
  styles: [
    `
      .chair {
        width: 65px;
        height: 65px;
        border-radius: 10px;
        margin-right: 7px;
        margin-bottom: 7px;
        border: none;
      }
    `,
  ],
})
export class GheComponent implements OnInit {
  @Input() chair!: Chair;
  @Output() selectChair = new EventEmitter<Chair>();

  isSelectedChair: boolean = false;

  constructor() {}

  ngOnInit() {}

  handleSelect() {
    this.isSelectedChair = !this.isSelectedChair;

    this.selectChair.emit(this.chair);
  }
}
