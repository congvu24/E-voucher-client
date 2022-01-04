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
import { throwIfEmpty } from "rxjs/operators";
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
  filter: FormGroup;
  meta: any;
  id: string;
  page = 1;
  type = VoucherType; //voucher type
  status = RequesetStatus; //request status
  loading = false;
  userInfoVisible = false;
  requestInfo: any;

  okText: "accept" | "reject" = "reject";
  handleOk: () => void;

  constructor(
    private _requestService: IRequestService,
    private _voucherService: IVoucherService,
    private _ui: UiService,
    private _fb: FormBuilder
  ) {
    this.filter = _fb.group({ type: [null], status: [RequesetStatus.pending] });
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
  acceptRequest(requestInfo: any): void {
    this.loading = true;
    this._voucherService
      .createVoucher(requestInfo.id, requestInfo.type)
      .subscribe((res) => {
        this.request = this.request.filter((rq) => rq.id !== requestInfo.id);
        this._ui.showSuccess("Accept success, voucher is ready to use");
        this.userInfoVisible = false;
        this.loading = false;
      });
  }

  rejectRequest(requestInfo: any): void {
    this.loading = true;
    this._requestService.rejectRequest(requestInfo.id).subscribe((res) => {
      this.request = this.request.filter((rq) => rq.id !== requestInfo.id);
      this._ui.showSuccess("Reject success");
      this.userInfoVisible = false;
      this.loading = false;
    });
  }

  handleAction(id: UUID, actionname: "accept" | "reject") {
    this.requestInfo = this.request.find((i) => i.id === id);
    if (this.requestInfo.status !== RequesetStatus.pending) {
      this._ui.showMessage(
        MessageType.error,
        `Request already ${this.requestInfo.status.toLowerCase()} `
      );
    } else {
      this.okText = actionname;
      if (actionname === "accept") {
        this.handleOk = () => this.acceptRequest(this.requestInfo);
      } else {
        this.handleOk = () => this.rejectRequest(this.requestInfo);
      }
      this.userInfoVisible = true;
    }
  }

  resetForm() {
    this.filter = this._fb.group({ type: [null], status: [null] });
  }

  closeInfo() {
    this.userInfoVisible = false;
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
      .getRequests({ page: this.page, ...this.filter.value })
      .subscribe(({ data, meta }) => {
        this.request = data;
        this.meta = meta;
      });
  }
}
