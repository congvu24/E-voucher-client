import { Component, OnInit } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { fakeservice } from "../../../../assets/fakedata";
import { ServiceType } from "../../../core/constant";
@Component({
  selector: "app-service-manage",
  templateUrl: "./service-manage.component.html",
  styleUrls: ["./service-manage.component.scss"],
})
export class ServiceManageComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 12, 3, 3, 3, 4];
  service: any; // fake data
  types = ServiceType;
  filterVisible = false;
  selected: { label: string; value: ServiceType; checked: boolean }[];
  viewing: boolean;
  editing: boolean;

  constructor(private _modal: NzModalService) {
    this.service = fakeservice;
    this.selected = Object.keys(ServiceType).map((type) => ({
      label: ServiceType[type].toString(),
      value: type as ServiceType,
      checked: false,
    }));
    this.viewing = false;
    this.editing = false;
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
  endView = () => {
    this.viewing = false;
  };
  openView = () => {
    this.viewing = true;
  };
  endEdit = () => {
    this.editing = false;
  };
  openEdit = () => {
    this.editing = true;
  };

  ngOnInit(): void {}
}
