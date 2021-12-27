import { Component, Input, OnInit } from "@angular/core";
import { VoucherType } from "../../../core/interface/voucher";

@Component({
  selector: "app-v-type-tag",
  templateUrl: "./v-type-tag.component.html",
  styleUrls: ["./v-type-tag.component.scss"],
})
export class VTypeTagComponent implements OnInit {
  @Input() type: VoucherType;
  color = "green";
  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
      case VoucherType.support:
        this.color = "yellow";
        break;
      case VoucherType.urgent:
        this.color = "red";
        break;
    }
  }
}
