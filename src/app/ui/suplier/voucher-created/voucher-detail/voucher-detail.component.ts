import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-voucher-detail",
  templateUrl: "./voucher-detail.component.html",
  styleUrls: ["./voucher-detail.component.scss"],
})
export class VoucherDetailComponent implements OnInit {
  @Input() data: any;
  citizen: any;
  constructor() {}

  ngOnInit(): void {
    this.citizen = this.data?.citizen;
  }
}
