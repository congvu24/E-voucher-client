import { Location } from "@angular/common";
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NzTreeHigherOrderServiceToken } from "ng-zorro-antd/core/tree";
import { NzModalRef, NzModalService } from "ng-zorro-antd/modal";
import QrScanner from "qr-scanner";
import { Observable } from "rxjs";
import { Package } from "../../../core/interface/package";
import { UiService } from "../../../core/services";
import { QrResult } from "../../../interface/common";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";
import { InvoiceComponent } from "./invoice/invoice.component";

@Component({
  selector: "app-qr-scan",
  templateUrl: "./qr-scan.component.html",
  styleUrls: ["./qr-scan.component.scss"],
  providers: [{ provide: IVoucherService, useExisting: VoucherService }],
})
export class QrScanComponent implements OnInit, AfterViewInit, OnDestroy {
  result: any | undefined;
  package: Package;
  //temp input
  claimed = true;
  loading = true;
  private scaner: QrScanner;

  constructor(
    private _voucherService: IVoucherService,
    private _location: Location,
    private _modal: NzModalService,
    private _ui: UiService,
    private _vcr: ViewContainerRef
  ) {
    // woker MUST in assert folder
    QrScanner.WORKER_PATH =
      "../../../../assets/qr-scan-worker/qr-scan-woker.min.js";
  }
  ngOnDestroy(): void {
    this.scaner.destroy();
    this.scaner = null;
  }
  backPreviousPage() {
    this._location.back();
  }
  claimVoucher() {
    this._ui.showInfo("Processing..");

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { key, supplier_id, citizen_id, voucher_id } = this.result;

    const formatedResult: QrResult = {
      key,
      supplierId: supplier_id,
      citizenId: citizen_id,
      voucherId: voucher_id,
    };

    const req = this._voucherService.claimVoucher({
      ...formatedResult,
      packageId: this.package.id,
    });

    req.subscribe((res) => {
      this.result = null;
      const modal: NzModalRef = this._modal.create({
        nzTitle: null,
        nzContent: InvoiceComponent,
        nzViewContainerRef: this._vcr,
        nzComponentParams: {
          invoiceDetail: res,
        },
        nzWidth: 900,
        nzMaskClosable: false,
        nzFooter: null,
        nzClosable: false,
      });
    });
  }
  ngOnInit(): void {
    this.package = history.state;
  }
  ngAfterViewInit(): void {
    const video = document.getElementById("video") as HTMLVideoElement;
    this.scaner = new QrScanner(video, (result) => {
      if (!this.result) {
        //save result & open confirm modal
        this.result = Object.assign(JSON.parse(result), this.package);

        //open voucher id modal:
        // process to claim voucher
        // this.scaner.pause();
      }
    });

    this.scaner
      .start()
      .then((_) => (this.loading = false))
      .catch((_) => alert("Error occured"));
  }
  back() {
    // this._location.back();
    this.result = null;
    this.scaner
      .start()
      .then((_) => (this.loading = false))
      .catch((_) => alert("Error occured"));
  }
  handleOk() {}
}
