import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputOutputComponent } from "./input-output.component";
import { CardComponent } from "./card/card.component";
import { BaiTap1Component } from "./bai-tap-1/bai-tap-1.component";
import { ProductListComponent } from "./bai-tap-1/product-list.component";
import { ProductComponent } from "./bai-tap-1/product.component";
import { FormsModule } from "@angular/forms";
import { BaiTapDatGheComponent } from "./bai-tap-dat-ghe/bai-tap-dat-ghe.component";
import { GheComponent } from "./bai-tap-dat-ghe/ghe.component";

@NgModule({
  declarations: [
    InputOutputComponent,
    CardComponent,
    BaiTap1Component,
    ProductListComponent,
    ProductComponent,
    BaiTapDatGheComponent,
    GheComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [InputOutputComponent],
})
export class InputOutputModule {}
