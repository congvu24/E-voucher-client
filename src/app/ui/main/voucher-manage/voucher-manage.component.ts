import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { vouchers } from "../../../../assets/fakedata";
import { ServiceType } from "../../../core/constant";

@Component({
  selector: "app-voucher-manage",
  templateUrl: "./voucher-manage.component.html",
  styleUrls: ["./voucher-manage.component.scss"],
})
export class VoucherManageComponent implements OnInit {
  dataSet: any;
  filter: FormGroup;

  serviceType: { label: string; value: string }[];

  constructor(private _fb: FormBuilder) {
    this.dataSet = vouchers;
    this.filter = _fb.group({
      name: [null],
      value: [null],
      type: [null],
      supplierName: [null],
    });
    this.serviceType = Object.keys(ServiceType).map((key) => ({
      label: key,
      value: ServiceType[key],
    }));
  }
  onFilter() {
    console.log(this.filter.value);
    return true;
  }
  resetForm() {
    this.filter = this._fb.group({
      name: [null],
      value: [null],
      type: [null],
      supplierName: [null],
    });
  }

  ngOnInit(): void {}
}

interface ServiceFilter {
  name: string;
  value: string;
  type: ServiceType;
  supplierName: string;
}
