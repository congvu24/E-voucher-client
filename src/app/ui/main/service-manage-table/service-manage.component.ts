import { TitleCasePipe } from "@angular/common";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NzModalService } from "ng-zorro-antd/modal";
import { fakeservice } from "../../../../assets/fakedata";
import { ServiceType } from "../../../core/constant";
import { Package } from "../../../core/interface/package";
import { Meta } from "../../../interface/api";
import { IPackageService } from "../../../interface/package-service";
import { PackageService } from "../../../service/package/package.service";
import { FormComponent } from "./form/form.component";

@Component({
  selector: "app-service-manage",
  templateUrl: "./service-manage-table.component.html",
  styleUrls: ["./service-manage.component.scss"],
  providers: [{ provide: IPackageService, useClass: PackageService }],
})
export class ServiceManageTableComponent implements OnInit {
  @ViewChild(FormComponent) editForm: FormComponent;

  packages: Package[]; // fake data
  types = ServiceType;
  meta: Meta;

  filter: FormGroup;
  editData: Package; // fake edit form data, it should be Package instead of number
  editing = false;
  page = 1;

  constructor(
    private _modal: NzModalService,
    private _fb: FormBuilder,
    private _package: IPackageService
  ) {
    this.filter = _fb.group({
      name: [null],
      value: [null],
    });
  }
  onFilter() {
    this._package
      .getPackages({ ...this.filter.value, page: this.meta.page })
      .subscribe((res) => {
        this.meta = res.meta;
        this.packages = res.data;
      });
  }
  resetForm() {
    this.filter = this._fb.group({
      name: [null],
      value: [null],
    });
  }

  loadEditForm(packageData: Package) {
    // set form data
    this.editData = packageData;
    // open form
    this.editing = true;
  }
  endEdit() {
    this.editing = false;
  }
  /**
   * save edit result
   */
  saveResult() {
    this.editForm.submitForm().subscribe((update: Package) => {
      //update UI
      const item = this.packages.find((p) => p.id === update.id);
      Object.assign(item, update);
      this.editing = false;
    });
  }

  deletePackage(id: UUID) {
    this._package.deletePackage(id).subscribe((res) => {
      const index = this.packages.findIndex((p) => p.id === id);
      this.packages = this.packages.splice(index, 1);
    });
  }
  showDeleteConfirm(id: UUID, name: string): void {
    const titleCasePipe = new TitleCasePipe();
    this._modal.confirm({
      nzTitle: `Do you want to delete ${titleCasePipe.transform(name)}?`,
      nzContent: "Action can't revert",
      nzOkText: "OK",
      nzCancelText: "Canel",
      nzOnOk: () => this.deletePackage(id),
    });
  }

  onPageIndexChange(page: number) {
    this._package
      .getPackages({ ...this.filter.value, page })
      .subscribe((res) => {
        this.meta = res.meta;
        this.packages = res.data;
      });
  }
  ngOnInit(): void {
    this._package.getPackages({ ...this.filter.value }).subscribe((res) => {
      this.meta = res.meta;
      this.packages = res.data;
    });
  }
}
