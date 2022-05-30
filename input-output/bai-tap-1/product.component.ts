import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IProduct } from "./product-list.component";

@Component({
  selector: "app-product",
  template: `
    <div class="card" (click)="handleRemove()">
      <div class="card-body">
        <h4 class="card-title">{{ productItem.name }}</h4>
        <p class="card-text">{{ productItem.price }}$</p>
      </div>
    </div>
  `,
})
export class ProductComponent implements OnInit {
  @Input() productItem!: IProduct;
  @Output() remove = new EventEmitter<IProduct>();

  constructor() {}

  ngOnInit() {}

  handleRemove() {
    this.remove.emit(this.productItem);
  }
}
