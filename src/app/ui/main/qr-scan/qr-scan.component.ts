import { Location } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import QrScanner from "qr-scanner";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";

@Component({
  selector: "app-qr-scan",
  templateUrl: "./qr-scan.component.html",
  styleUrls: ["./qr-scan.component.scss"],
  providers: [{ provide: IVoucherService, useExisting: VoucherService }],
})
export class QrScanComponent implements OnInit, AfterViewInit {
  result: string;
  isScanned = false;
  constructor(
    private _voucherService: IVoucherService,
    private _location: Location
  ) {
    // woker MUST in assert folder
    QrScanner.WORKER_PATH =
      "../../../../assets/qr-scan-worker/qr-scan-woker.min.js";
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    const video = document.getElementById("video") as HTMLVideoElement;
    const scanner = new QrScanner(video, (r) => {
      this.result = r;
    });
    scanner.start();
  }
  commitVoucher() {
    this._voucherService.commitVoucher(this.result);
  }
  back() {
    this._location.back();
  }
}
