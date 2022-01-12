import { AfterContentChecked, Component, Input, OnInit } from "@angular/core";
import { VoucherStatus } from "../../../core/interface/voucher";

@Component({
  selector: "app-v-status-tag",
  templateUrl: "./v-status-tag.component.html",
  styleUrls: ["./v-status-tag.component.scss"],
})
export class VStatusTagComponent implements AfterContentChecked {
  @Input() status: VoucherStatus;
  color = "default";
  constructor() {}

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    switch (this.status) {
      case VoucherStatus.unuse: {
        this.color = "processing";
        break;
      }
      case VoucherStatus.deleted: {
        this.color = "error";
        break;
      }
      case VoucherStatus.used: {
        this.color = "success";
        break;
      }
    }
  }
}
