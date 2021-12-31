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
export class QrScanComponent implements OnInit, AfterViewInit {
  result: any;
  isScanned = false;
  id: UUID; // package/service id
  //temp input
  voucherId: UUID;
  // temp modal
  viewing = false;
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

  async handleVideoResult(result: any) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const isOk = await confirm("Tiếp tục thanh toán?");
    if (isOk) {
      const { key, supplier_id, citizen_id, voucher_id } = JSON.parse(result);
      const formatedResult: QrResult = {
        key,
        supplierId: supplier_id,
        citizenId: citizen_id,
        voucherId: voucher_id,
      };

      const req = this._voucherService.claimVoucher({
        ...formatedResult,
        packageId: this.id,
      });
      req.subscribe((res) => {
        this._ui.showSuccess("Voucher claimed");

        // this.scaner.stop();
      });
    }
  }

  ngOnInit(): void {
    this._router.params.subscribe((params) => {
      this.id = params?.id;
    });
  }
  ngAfterViewInit(): void {
    const video = document.getElementById("video") as HTMLVideoElement;
    this.scaner = new QrScanner(video, (result) => {
      //save qr result
      this.result = result;

      //open voucher id modal:
      // process to claim voucher
      this.handleVideoResult(result);
    });

    this.scaner.start();
  }
  back() {
    this._location.back();
  }
}
// "key":"212bf8e6-71bf-4c16-bcd7-d3732fd6013a","supplier_id":"4db8bb43-cb7e-46a6-939b-13270bb0100c","citizen_id":"f2e2abd7-f952-44ab-994b-657c55222f04"}
