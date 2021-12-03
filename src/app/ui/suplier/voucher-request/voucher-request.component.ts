import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { ServiceType } from "../../../core/constant";
import { RequesetStatus } from "../../../core/interface/request";
import { IRequestService } from "../../../interface/request-service";
import { RequestService } from "../../../service/request/request.service";
import { Request } from "../../../core/interface/request";
import { NzModalService } from "ng-zorro-antd/modal";
import { cleanObject } from "../../../until";
import { VoucherType } from "../../../core/interface/voucher";
import { MessageType, UiService } from "../../../core/services";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
@Component({
  selector: "app-voucher-request",
  templateUrl: "./voucher-request.component.html",
  styleUrls: ["./voucher-request.component.scss"],
  providers: [{ provide: IRequestService, useExisting: RequestService }],
})
export class VoucherRequestComponent implements OnInit {
  request: Request[]; // fake data
  types = ServiceType;

  //ui control
  filterVisible = false;
  status = "";
  meta: any;
  id: string;
  page = 1;

  constructor(
    private _requestService: IRequestService,
    private _modal: NzModalService,
    private _ui: UiService
  ) {}
  onApplyFilter() {
    //call service to update view
    this._requestService
      .getRequests(cleanObject({ status: this.status, id: this.id }))
      .subscribe(({ data, meta }) => {
        this.request = data;
        this.meta = meta;
      });
  }
  rejectRequest(id: UUID) {
    // this._requestService.updateRequest(id, { status: RequesetStatus.rejected });
    this.showConfirm("ds");
  }
  showConfirm(id: UUID) {
    const item = this.request.find((i) => i.id === id);
    console.log(item, RequesetStatus.accepted);

    if (item.status !== RequesetStatus.accepted) {
      this._modal.warning({
        nzTitle: "Reject request",
        nzContent: `Reject <strong>#${id}</strong>, action canot be revert!!`,
        nzOkText: "OK",
        nzCancelText: "Cancel",
      });
    } else {
      this._ui.showMessage(MessageType.error, "Request already accepted");
    }
  }
  onFilterClick() {
    this.filterVisible = !this.filterVisible;
  }
  reset() {
    this.status = "";
    this.page = 1;
    this._requestService
      .getRequests(
        cleanObject({ status: this.status, id: this.id, page: this.page })
      )
      .subscribe(({ data, meta }) => {
        this.request = data;
        this.meta = meta;
      });
  }
  onPageIndexChange(page: number) {
    this._requestService
      .getRequests(cleanObject({ status: this.status, id: this.id, page }))
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
