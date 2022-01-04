import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"],
})
export class InvoiceComponent implements OnInit {
  @Input() invoiceDetail: any;
  constructor(private _modal: NzModalRef, private _location: Location) {}

  destroyModal() {
    this._modal.destroy();
  }
  backToSelectPackage() {
    this._location.back();
  }
  ngOnInit(): void {
    console.log("incoivce", this.invoiceDetail);
  }
}
