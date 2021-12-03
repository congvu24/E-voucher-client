import { Component, OnInit } from "@angular/core";
import {
  Voucher,
  VoucherStatus,
  VoucherType,
} from "../../../core/interface/voucher";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";

@Component({
  selector: "app-voucher-created",
  templateUrl: "./voucher-created.component.html",
  styleUrls: ["./voucher-created.component.scss"],
  providers: [{ provide: IVoucherService, useExisting: VoucherService }],
})
export class VoucherCreatedComponent implements OnInit {
  //data
  vouchers: Voucher[];
  meta: any;

  //ui control
  filterVisible: boolean;
  type: string[];
  status: string[];
  selectedStatus: string[] = [];
  selectedType: string[] = [];

  constructor(private _voucher: IVoucherService) {
    this.type = Object.values(VoucherType).map((v) => v);
    this.status = Object.values(VoucherStatus).map((v) => v);
  }
  onFilterClick(visible: boolean) {
    this.filterVisible = visible;
  }
  handleStatusChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedStatus.push(tag);
    } else {
      this.selectedStatus = this.selectedStatus.filter((t) => t !== tag);
    }
    console.log("You are interested in: ", this.selectedStatus);
  }
  handleTypeChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedType.push(tag);
    } else {
      this.selectedType = this.selectedType.filter((t) => t !== tag);
    }
    console.log("You are interested in: ", this.selectedType);
  }
  onApplyFilter() {
    //call api
    console.log("s");
  }

  ngOnInit(): void {
    this._voucher.getVouchers().subscribe((res) => {
      this.vouchers = res.data;
      this.meta = res.meta;
    });
    this.filterVisible = false;
  }
}
