import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { fakeservice } from "../../../../assets/fakedata";
import { ServiceType } from "../../../core/constant";
import { FormComponent } from "./form/form.component";

@Component({
  selector: "app-service-manage",
  templateUrl: "./service-manage-table.component.html",
  styleUrls: ["./service-manage.component.scss"],
})
export class ServiceManageTableComponent implements OnInit {
  @ViewChild(FormComponent) editForm: FormComponent;

  service: any; // fake data
  types = ServiceType;
  filterVisible = false;
  editData: number; // fake edit form data, it should be Package instead of number
  editing: boolean;

  selected: { label: string; value: ServiceType; checked: boolean }[];
  constructor(private _modal: NzModalService) {
    this.service = fakeservice;
    this.selected = Object.keys(ServiceType).map((type) => ({
      label: ServiceType[type].toString(),
      value: type as ServiceType,
      checked: false,
    }));
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
  loadEditForm(index: any) {
    //index of data in fake array, it should be Package
    // set form data
    this.editData = index;
    // open form

    this.editing = true;
  }
  endEdit = () => {
    this.editForm.submitForm();
    this.editing = false;
  };

  showDeleteConfirm(): void {
    this._modal.confirm({
      nzTitle: "<i>Do you want to delete these items?</i>",
      nzContent: "<b>Some descriptions</b>",
      nzOkText: "OK",
      nzCancelText: "Canel",
      nzOnOk: () => console.log("OK"),
    });
  }
  ngOnInit(): void {}
}
