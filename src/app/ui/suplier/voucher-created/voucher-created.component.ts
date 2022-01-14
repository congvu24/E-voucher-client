import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NzModalService } from "ng-zorro-antd/modal";
import {
  Voucher,
  VoucherStatus,
  VoucherType,
} from "../../../core/interface/voucher";
import { MessageType, UiService } from "../../../core/services";
import { IVoucherService } from "../../../interface/voucher-service.";

import { VoucherService } from "../../../service/voucher/voucher.service";
import { LoadingService } from "../../../shared/service/loading.service";
import { VoucherDetailComponent } from "./voucher-detail/voucher-detail.component";

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
  loading = this._loadingService.loading;

  constructor(
    private _voucher: IVoucherService,
    private _fb: FormBuilder,
    private _modalService: NzModalService,
    private _uiSerive: UiService,
    private _vcr: ViewContainerRef,
    private _loadingService: LoadingService
  ) {
    this.filter = _fb.group({
      citizenName: [null],
      type: [null],
      status: [null],
    });
  }

  downloadReport() {
    this._voucher.downloadReport().subscribe((response) => {
      const filename = `Voucher created ${Date.parse(
        new Date().toString()
      )}.csv`; // random suffix
      const binaryData = [];
      binaryData.push(response);
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(
        new Blob(binaryData, { type: "text/csv" })
      );
      downloadLink.setAttribute("download", filename);
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }

  deleteVoucher(id: UUID) {
    const voucher = this.vouchers.find((v) => v.id === id);
    if (
      voucher.status !== VoucherStatus.deleted &&
      voucher.status !== VoucherStatus.used
    ) {
      this._voucher.deleteVoucher(id).subscribe((res) => {
        const modal = this._modalService.success({
          nzTitle: "Voucher deleted",
          nzContent:
            "Voucher id:  21321312 is deleted, press Detail for more information",
          nzOkText: "Detail",
          nzCancelText: "Close",
          nzOnOk: () => {
            modal.destroy();
            this.viewVoucherDetail(id);
          },
        });
        //update
        console.log(Object.assign(voucher, res));
      });
    } else {
      this._uiSerive.showMessage(
        MessageType.error,
        `Can't do that, voucher is ${voucher.status.toLowerCase()}  `
      );
    }
  }
  /**
   * create a modal to display voucher information
   * @param id voucher Id
   */
  viewVoucherDetail(id: UUID): void {
    const voucher = this.vouchers.find((v) => v.id === id);
    const modal = this._modalService.create({
      nzTitle: "Voucher detail",
      nzContent: VoucherDetailComponent,
      nzViewContainerRef: this._vcr,
      nzComponentParams: {
        data: voucher,
      },
      nzWidth: 800,
      nzCancelText: null,
    });
  }

  onFilter() {
    this._voucher
      .getVouchers({ ...this.filter.value, page: this.page })
      .subscribe((res) => {
        this.vouchers = res.data;
        this.meta = res.meta;
      });
  }

  onPageIndexChange(page: number) {
    this.page = page;
    this._voucher
      .getVouchers({ ...this.filter.value, page: this.page })
      .subscribe(({ data, meta }) => {
        this.vouchers = data;
        this.meta = meta;
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
      console.log(this.vouchers);
    });
  }
}
