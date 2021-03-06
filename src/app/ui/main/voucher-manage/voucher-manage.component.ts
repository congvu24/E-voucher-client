import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Voucher } from "../../../core/interface/voucher";
import { Meta } from "../../../interface/api";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";
import { LoadingService } from "../../../shared/service/loading.service";

@Component({
  selector: "app-voucher-manage",
  templateUrl: "./voucher-manage.component.html",
  styleUrls: ["./voucher-manage.component.scss"],
  providers: [{ provide: IVoucherService, useClass: VoucherService }],
})
export class VoucherManageComponent implements OnInit {
  filter: FormGroup;
  data: any[] = [];
  meta: Meta;
  page = 1;

  // detail form
  detailVisible = false;
  detail: any;

  // UI controls
  loading = this._loadingService.loading;

  constructor(
    private _voucherService: IVoucherService,
    private _loadingService: LoadingService
  ) {
    this.filter = new FormGroup({
      citizenName: new FormControl(null),
    });
  }
  onFilter() {
    this._voucherService
      .getClaimedVouchers({ ...this.filter.value, page: this.page })
      .subscribe(({ data, meta }) => {
        this.data = data;
        this.meta = meta;
      });
  }
  resetForm() {
    this.filter.reset();
  }
  onPageIndexChange(page: number) {
    this.page = page;
    this._voucherService
      .getClaimedVouchers({ ...this.filter.value, page: this.page })
      .subscribe(({ data, meta }) => {
        this.data = data;
        this.meta = meta;
      });
  }

  closeDetail() {
    this.detailVisible = false;
  }
  openDetailForm(data: any) {
    this.detail = data;
    this.detailVisible = true;
  }
  ngOnInit(): void {
    this._voucherService
      .getClaimedVouchers({ page: this.page })
      .subscribe(({ data, meta }) => {
        this.data = data;
        this.meta = meta;
      });
  }
}
