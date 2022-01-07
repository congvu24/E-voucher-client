/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { APP_CONFIG } from "../../../../../environments/environment";
import { Package } from "../../../../core/interface/package";
@Component({
  selector: "service-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  // @Input() service: Package;
  @Input() service: Package;
  @Input() openView: (_: Package) => void;
  @Input() endView: () => void;
  @Input() openEdit: () => void;
  imgHost = APP_CONFIG.apiUrl;
  constructor() {}

  openChildView() {
    this.openView(this.service);
  }
  endChildView() {
    this.endView();
  }

  ngOnInit(): void {}
}
