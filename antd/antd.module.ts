import { NgModule } from "@angular/core";
import { NzTableModule } from "ng-zorro-antd/table";
import { NzDividerModule } from "ng-zorro-antd/divider";

@NgModule({
  imports: [NzTableModule, NzDividerModule],
  exports: [NzTableModule, NzDividerModule],
})
export class AntdModule {}
