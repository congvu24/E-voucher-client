import { Location } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzTreeHigherOrderServiceToken } from "ng-zorro-antd/core/tree";
import QrScanner from "qr-scanner";
import { Observable } from "rxjs";
import { UiService } from "../../../core/services";
import { QrResult } from "../../../interface/common";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";

@Component({
  selector: "app-qr-scan",
  templateUrl: "./qr-scan.component.html",
  styleUrls: ["./qr-scan.component.scss"],
  providers: [{ provide: IVoucherService, useExisting: VoucherService }],
})
export class QrScanComponent implements OnInit, AfterViewInit, OnDestroy {
  result: any | undefined = "";
  packageId: UUID; // package/service id
  //temp input
  claimed = true;
  loading = true;
  private scaner: QrScanner;

  constructor(
    private _voucherService: IVoucherService,
    private _location: Location,
    private _router: ActivatedRoute,
    private _ui: UiService
  ) {
    // woker MUST in assert folder
    QrScanner.WORKER_PATH =
      "../../../../assets/qr-scan-worker/qr-scan-woker.min.js";
  }
  ngOnDestroy(): void {
    this.scaner.destroy();
    this.scaner = null;
  }

  handleVideoResult(result: any) {
    console.log(result);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { key, supplier_id, citizen_id, voucher_id } = JSON.parse(result);
    const formatedResult: QrResult = {
      key,
      supplierId: supplier_id,
      citizenId: citizen_id,
      voucherId: voucher_id,
    };

    const req = this._voucherService.claimVoucher({
      ...formatedResult,
      packageId: this.packageId,
    });
    req.subscribe((res) => {
      this._ui.showSuccess("Voucher claimed");

      // this.scaner.stop();
    });
  }

  refresh() {
    this.result = "";
  }
  ngOnInit(): void {
    this._router.params.subscribe((params) => {
      this.packageId = params?.id;
    });
  }
  ngAfterViewInit(): void {
    const video = document.getElementById("video") as HTMLVideoElement;
    this.scaner = new QrScanner(video, (result) => {
      if (!this.result) {
        //save qr result
        this.result = result;
        console.log("scanedd");

        //open voucher id modal:
        // process to claim voucher
        this.handleVideoResult(result);
      }
    });

    this.scaner
      .start()
      .then((_) => (this.loading = false))
      .catch((_) => alert("Error occured"));
  }
  back() {
    this._location.back();
  }
}
