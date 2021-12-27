import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
  filter: FormGroup;
  status = VoucherStatus;
  type = VoucherType;
  page = 1;

  constructor(private _voucher: IVoucherService, private _fb: FormBuilder) {
    this.filter = _fb.group({ name: [null], type: [null], status: [null] });
  }

  onFilter() {
    this._voucher
      .getVouchers({ ...this.filter.value, page: this.page })
      .subscribe((res) => {
        this.vouchers = res.data;
        this.meta = res.meta;
      });
  }

  resetForm() {
    this.filter = this._fb.group({
      name: [null],
      type: [null],
      status: [null],
    });
  }
  ngOnInit(): void {
    this._voucher.getVouchers({ page: this.page }).subscribe((res) => {
      this.vouchers = res.data;
      this.meta = res.meta;
    });
  }
}
