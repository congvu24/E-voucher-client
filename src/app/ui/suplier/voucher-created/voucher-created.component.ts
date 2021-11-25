import { Component, OnInit } from "@angular/core";
import { Voucher, VoucherType } from "../../../core/interface/voucher";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";

@Component({
  selector: "app-voucher-created",
  templateUrl: "./voucher-created.component.html",
  styleUrls: ["./voucher-created.component.scss"],
  providers: [{ provide: IVoucherService, useExisting: VoucherService }],
})
export class VoucherCreatedComponent implements OnInit {
  vouchers: Voucher[];
  filterVisible: boolean;
  selected: { label: string; value: VoucherType; checked: boolean }[];

  constructor(private _voucher: IVoucherService) {
    this.vouchers = this._voucher.getVouchers();
    this.filterVisible = false;
    this.selected = Object.keys(VoucherType).map((type) => ({
      label: VoucherType[type].toString(),
      value: type as VoucherType,
      checked: false,
    }));
  }

  onApplyFilter() {
    //call service to update view
    alert(`call api with ${2} selected filter, selected`);
  }
  onClearFilter() {
    this.selected = this.selected.map((f) => ({ ...f, checked: false }));
  }
  ngOnInit(): void {}
}
