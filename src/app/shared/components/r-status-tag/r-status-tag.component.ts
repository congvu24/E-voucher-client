import { Component, Input, OnInit } from "@angular/core";
import { RequesetStatus } from "../../../core/interface/request";

@Component({
  selector: "app-r-status-tag",
  templateUrl: "./r-status-tag.component.html",
  styleUrls: ["./r-status-tag.component.scss"],
})
export class RStatusTagComponent implements OnInit {
  @Input() status: RequesetStatus;
  color = "processing";
  constructor() {}

  ngOnInit(): void {
    switch (this.status) {
      case RequesetStatus.accepted:
        this.color = "success";
        break;
      case RequesetStatus.rejected:
        this.color = "error";
        break;
    }
  }
}
