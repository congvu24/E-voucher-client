import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { ServiceType } from "../../../core/constant";
import { RequesetStatus } from "../../../core/interface/request";
import { IRequestService } from "../../../interface/request-service";
import { RequestService } from "../../../service/request/request.service";
import { Request } from "../../../core/interface/request";
import { NzModalService } from "ng-zorro-antd/modal";
@Component({
  selector: "app-voucher-request",
  templateUrl: "./voucher-request.component.html",
  styleUrls: ["./voucher-request.component.scss"],
  providers: [{ provide: IRequestService, useExisting: RequestService }],
})
export class VoucherRequestComponent implements OnInit {
  request: Request[]; // fake data
  types = ServiceType;
  filterVisible = false;

  selected: { label: string; value: ServiceType; checked: boolean }[];

  constructor(
    private _requestService: IRequestService,
    private _modal: NzModalService
  ) {
    // this.service = [1, 3, 5, 7, 22, 41, 64];
    this.request = this._requestService.getRequests();
    this.selected = Object.keys(ServiceType).map((type) => ({
      label: ServiceType[type].toString(),
      value: type as ServiceType,
      checked: false,
    }));
  }
  onApplyFilter() {
    //call service to update view
    alert(
      `call api with ${this.getSelectedFilterNumbers()} selected filter, selected`
    );
  }
  onClearFilter() {
    this.selected = this.selected.map((f) => ({ ...f, checked: false }));
  }
  getSelectedFilterNumbers(): number {
    return this.selected.filter((f) => f.checked === true).length;
  }
  rejectRequest(id: UUID) {
    // this._requestService.updateRequest(id, { status: RequesetStatus.rejected });
    this.showConfirm("ds");
  }
  showConfirm(id: UUID) {
    this._modal.warning({
      nzTitle: "Reject request",
      nzContent: `Reject <strong>#${id}</strong>, action canot be revert!!`,
      nzOkText: "OK",
      nzCancelText: "Cancel",
    });
  }
  ngOnInit(): void {}
}
