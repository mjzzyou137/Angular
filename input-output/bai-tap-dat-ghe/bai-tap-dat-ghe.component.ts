// a-component-inline
import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { GheComponent } from "./ghe.component";

@Component({
  selector: "app-bai-tap-dat-ghe",
  template: `<div class="w-50 mt-5 mx-auto">
    <h1 class="text-warning text-center py-3">BÀI TẬP ĐẶT GHẾ</h1>
    <div class="row">
      <div class="col-6">
        <h5 class="py-2 bg-dark text-center text-white">TÀI XẾ</h5>
        <div class="d-flex flex-wrap">
          <app-ghe
            *ngFor="let chair of chairList"
            [chair]="chair"
            (selectChair)="handleSelectChair($event)"
          >
          </app-ghe>
        </div>
      </div>
      <div class="col-6">
        <h5 class="text-warning">
          Danh sách ghế đã đặt ({{ selectedChairList.length }})
        </h5>
        <div>
          <p *ngFor="let chair of selectedChairList">
            Ghế: {{ chair.TenGhe }} {{ chair.Gia }}$
            <span class="text-danger" (click)="handleRemove(chair)">[HỦY]</span>
          </p>
        </div>
      </div>
    </div>
  </div>`,
})
export class BaiTapDatGheComponent implements OnInit {
  @ViewChildren(GheComponent) gheComponents!: QueryList<GheComponent>;

  chairList: Chair[] = [
    { SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
    { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
    { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 8", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },
  ];

  selectedChairList: Chair[] = [];

  constructor() {}

  ngOnInit() {}

  handleSelectChair(chair: Chair) {
    const idx = this.findChairIndex(chair);

    if (idx !== -1) {
      this.selectedChairList.splice(idx, 1);
    } else {
      this.selectedChairList.push(chair);
    }
  }

  handleRemove(chair: Chair) {
    const idx = this.findChairIndex(chair);

    this.selectedChairList.splice(idx, 1);

    this.gheComponents.forEach((gheComponent: GheComponent) => {
      if (gheComponent.chair.SoGhe === chair.SoGhe) {
        gheComponent.isSelectedChair = false;
      }
    });
  }

  findChairIndex(chair: Chair) {
    return this.selectedChairList.findIndex((ele) => ele.SoGhe === chair.SoGhe);
  }
}

export interface Chair {
  SoGhe: number;
  TenGhe: string;
  Gia: number;
  TrangThai: boolean;
}
