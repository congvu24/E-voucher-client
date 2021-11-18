import { Component, OnInit } from "@angular/core";
import { vouchers } from "../../../../assets/fakedata";

@Component({
  selector: "app-voucher-manage",
  templateUrl: "./voucher-manage.component.html",
  styleUrls: ["./voucher-manage.component.scss"],
})
export class VoucherManageComponent implements OnInit {
  dataSet: any;

  constructor() {
    this.dataSet = vouchers;
  }

  ngOnInit(): void {}
}
