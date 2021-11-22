/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from "@angular/core";
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

  constructor(private _modal: NzModalService) {}

  openChildView() {
    this.openView();
  }
  endChildView() {
    this.endView();
  }
  openChildEdit() {
    this.openEdit();
  }
  endChildEdit() {
    this.endEdit();
  }
  showDeleteConfirm(): void {
    this._modal.confirm({
      nzTitle: "<i>Do you Want to delete these items?</i>",
      nzContent: "<b>Some descriptions</b>",
      nzOkText: "OK",
      nzCancelText: "Canel",
      nzOnOk: () => console.log("OK"),
    });
  }

  ngOnInit(): void {}
}
