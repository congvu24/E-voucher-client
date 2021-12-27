import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { ServiceType } from "../../../core/constant";
import { RequesetStatus } from "../../../core/interface/request";
import { IRequestService } from "../../../interface/request-service";
import { RequestService } from "../../../service/request/request.service";
import { Request } from "../../../core/interface/request";
import { NzModalService } from "ng-zorro-antd/modal";
import { cleanObject } from "../../../until";
import { VoucherStatus, VoucherType } from "../../../core/interface/voucher";
import { MessageType, UiService } from "../../../core/services";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
import { FormBuilder, FormGroup } from "@angular/forms";

import { VoucherService } from "../../../service/voucher/voucher.service";
import { IVoucherService } from "../../../interface/voucher-service.";
@Component({
  selector: "app-voucher-request",
  templateUrl: "./voucher-request.component.html",
  styleUrls: ["./voucher-request.component.scss"],
  providers: [
    { provide: IRequestService, useExisting: RequestService },
    { provide: IVoucherService, useExisting: VoucherService },
  ],
})
export class VoucherRequestComponent implements OnInit {
  request: Request[]; // fake data
  types = ServiceType;

  //ui control
  filterVisible = false;
  filter: FormGroup;
  meta: any;
  id: string;
  page = 1;
  type = VoucherType; //voucher type
  status = RequesetStatus; //request status

  constructor(
    private _requestService: IRequestService,
    private _voucherService: IVoucherService,
    private _modal: NzModalService,
    private _ui: UiService,
    private _fb: FormBuilder
  ) {
    this.filter = _fb.group({ type: [null], status: [null] });
  }

  onFilter() {
    //call service to update view
    this._requestService
      .getRequests({ ...this.filter.value, page: this.page })
      .subscribe(({ data, meta }) => {
        this.request = data;
        this.meta = meta;
      });
  }
  rejectRequest(id: UUID) {
    const item = this.request.find((i) => i.id === id);

    if (item.status !== RequesetStatus.rejected) {
      this._modal.warning({
        nzTitle: "Reject request",
        nzContent: `Reject <strong>#${id}</strong>, action canot be revert!!`,
        nzOkText: "OK",
        nzCancelText: "Cancel",
        nzOnOk: () =>
          this._requestService.rejectRequest(item.id).subscribe((res) => {
            this.request = this.request.filter((rq) => rq.id !== item.id);
            this._ui.showSuccess("Reject success");
          }),
      });
    } else {
      this._ui.showMessage(MessageType.error, "Request already rejected");
    }
  }

  acceptRequest(id: UUID) {
    const item = this.request.find((i) => i.id === id);

    if (item.status !== RequesetStatus.accepted) {
      this._modal.warning({
        nzTitle: "Reject request",
        nzContent: `Accept <strong>#${id}</strong>, action canot be revert!!`,
        nzOkText: "OK",
        nzCancelText: "Cancel",
        nzOnOk: () => {
          this._voucherService
            .createVoucher(item.id, item.type)
            .subscribe((res) => {
              this.request = this.request.filter((rq) => rq.id !== item.id);
              this._ui.showSuccess("Accept success, voucher is ready to use");
            });
        },
      });
    } else {
      this._ui.showMessage(MessageType.error, "Request already accepted");
    }
  }

  resetForm() {
    this.filter = this._fb.group({ type: [null], status: [null] });
  }
  onPageIndexChange(page: number) {
    this.page = page;
    this._requestService
      .getRequests({ ...this.filter.value, page: this.page })
      .subscribe(({ data, meta }) => {
        this.request = data;
        this.meta = meta;
      });
  }
  ngOnInit(): void {
    this._requestService
      .getRequests({ page: this.page })
      .subscribe(({ data, meta }) => {
        this.request = data;
        this.meta = meta;
      });
  }
}
