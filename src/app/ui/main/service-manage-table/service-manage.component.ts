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
import { ServiceType } from "../../../core/constant";
import { Package } from "../../../core/interface/package";
import { UiService } from "../../../core/services";
import { Meta } from "../../../interface/api";
import { IPackageService } from "../../../interface/package-service";
import { PackageService } from "../../../service/package/package.service";
import { LoadingService } from "../../../shared/service/loading.service";
import { FormComponent } from "./form/form.component";

@Component({
  selector: "app-service-manage",
  templateUrl: "./service-manage-table.component.html",
  styleUrls: ["./service-manage.component.scss"],
  providers: [{ provide: IPackageService, useClass: PackageService }],
})
export class ServiceManageTableComponent implements OnInit {
  @ViewChild(FormComponent) editForm: FormComponent;

  filter: FormGroup;
  packages: Package[];
  meta: Meta;
  page = 1;

  // render elements
  types = ServiceType;
  editData: Package;

  // UI controls
  editing = false;
  loading = this._loading.loading;

  constructor(
    private _modal: NzModalService,
    private _fb: FormBuilder,
    private _package: IPackageService,
    private _ui: UiService,
    private _loading: LoadingService
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
    try {
      this.editForm.submitForm().subscribe((update: Package) => {
        //update UI
        const item = this.packages.find((p) => p.id === update.id);
        Object.assign(item, update);
        this.editing = false;
        this._ui.showSuccess("Package updated");
      });
    } catch (error: any) {
      this._ui.showError(error.message);
    }
  }

  downloadReport() {
    this._package.downloadReport().subscribe((response) => {
      const filename = `Packagelist ${Date.parse(new Date().toString())}.csv`; // random suffix
      const binaryData = [];
      binaryData.push(response);
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(
        new Blob(binaryData, { type: "text/csv" })
      );
      downloadLink.setAttribute("download", filename);
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }
  deletePackage(id: UUID) {
    this._package.deletePackage(id).subscribe((res) => {
      this.packages = this.packages.filter((p) => p.id !== id);
      this._ui.showSuccess("Service deleted");
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
