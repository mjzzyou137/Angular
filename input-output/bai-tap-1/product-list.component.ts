import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { ProductComponent } from "./product.component";

@Component({
  selector: "app-product-list",
  template: `<div class="mt-5 w-50 mx-auto">
    <div class="row">
      <div class="col-12 my-3">
        <button class="btn btn-info" (click)="handleDiscount()">
          Discount
        </button>
      </div>
      <div class="col-4" *ngFor="let product of productList">
        <app-product
          (remove)="handleRemove($event)"
          [productItem]="product"
        ></app-product>
      </div>
    </div>
  </div>`,
})
export class ProductListComponent implements OnInit {
  @ViewChildren(ProductComponent)
  productComponents!: QueryList<ProductComponent>;

  productList: IProduct[] = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 50 },
    { id: 3, name: "Product C", price: 70 },
  ];

  constructor() {}

  ngOnInit() {}

  handleDiscount() {
    this.productComponents.forEach((productComponent: ProductComponent) => {
      productComponent.productItem.price -= 10;
    });
  }

  handleRemove(productItem: IProduct) {
    const idx = this.productList.findIndex((ele) => ele.id === productItem.id);

    if (idx !== -1) {
      this.productList.splice(idx, 1);
    }
  }
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
}
