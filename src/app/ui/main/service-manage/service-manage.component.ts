import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { service } from "../../../../assets/fakedata";
import { ServiceType } from "../../../core/constant";

@Component({
  selector: "app-service-manage",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./service-manage.component.html",
  styleUrls: ["./service-manage.component.scss"],
})
export class ServiceManageComponent implements OnInit {
  service: any; // fake data
  types = ServiceType;
  filterVisible = false;

  selected: { label: string; value: ServiceType; checked: boolean }[];

  constructor() {
    this.service = service;
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
  ngOnInit(): void {}
}
