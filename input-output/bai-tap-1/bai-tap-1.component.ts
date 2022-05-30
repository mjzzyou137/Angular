// a-component-inline
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { IProduct, ProductListComponent } from "./product-list.component";

@Component({
  selector: "app-bai-tap-1",
  template: `<div class="w-50 mt-5 container">
      <div class="form-group">
        <label for="">Name</label>
        <input class="form-control" type="text" [(ngModel)]="name" />
      </div>
      <div class="form-group">
        <label for="">Price</label>
        <input class="form-control" type="text" [(ngModel)]="price" />
      </div>
      <button (click)="handleSave()" #buttonTmp class="btn btn-success w-100">
        Save
      </button>
    </div>
    <app-product-list #productListTmp></app-product-list>`,
})
export class BaiTap1Component implements OnInit {
  @ViewChild("buttonTmp") buttonTemplate!: ElementRef<HTMLButtonElement>;
  @ViewChild("productListTmp") productListTemplate!: ProductListComponent;

  name: string = "";
  price: number = 0;

  constructor() {}

  ngOnInit() {}

  handleSave() {
    this.buttonTemplate.nativeElement.innerHTML = "Submit";

    const newProduct: IProduct = {
        id: Date.now(),
        name: this.name,
        price: this.price
    }

    this.productListTemplate.productList.push(newProduct);
  }
}

// js: document.getElementById
// reactjs: useRef()
// angular: ViewChild
