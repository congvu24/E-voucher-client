/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { NzCascaderOption } from "ng-zorro-antd/cascader";

@Component({
  selector: "app-filter-voucher",
  templateUrl: "./filter-voucher.component.html",
  styleUrls: ["./filter-voucher.component.scss"],
})
export class FilterVoucherComponent implements OnInit {
  @Output() onFilterSelect = new EventEmitter<string[]>();

  visible = false;

  constructor() {}

  close() {
    this.visible = false;
  }
  open() {
    this.visible = true;
  }
  ngOnInit(): void {}
}
