/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";

import { Package } from "../../../../core/interface/package";
@Component({
  selector: "service-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  // @Input() service: Package;
  @Input() service: number;
  @Input() openView: () => void;
  @Input() endView: () => void;
  @Input() openEdit: () => void;
  @Input() endEdit: () => void;

  constructor() {}

  openChildView() {
    this.openView();
  }
  endChildView() {
    this.endView();
  }
  endChildEdit() {
    this.endEdit();
  }
  ngOnInit(): void {}
}
