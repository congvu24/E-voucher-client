import { Component, OnInit, Type, ViewChild } from "@angular/core";

import { NzModalService } from "ng-zorro-antd/modal";
import { ServiceType } from "../../../core/constant";
import { Package } from "../../../core/interface/package";
import { Meta } from "../../../interface/api";
import { IPackageService } from "../../../interface/package-service";
import { PackageService } from "../../../service/package/package.service";
import { ServiceFormDirective } from "../../../shared/directives/dealer/service-form.directive";
import { FormComponent } from "../service-manage-table/form/form.component";
@Component({
  selector: "app-service-manage",
  templateUrl: "./service-manage.component.html",
  styleUrls: ["./service-manage.component.scss"],
  providers: [{ provide: IPackageService, useClass: PackageService }],
})
export class ServiceManageComponent implements OnInit {
  // load dynamic form
  @ViewChild(ServiceFormDirective, { static: true })
  serviceForm!: ServiceFormDirective;

  items = [1, 2, 3, 4, 5, 6, 12, 3, 3, 3, 4];
  types = ServiceType;
  filterVisible = false;
  viewing = false;
  editing = false;
  meta: Meta;
  packages: Package[];
  viewingPackage: Package;

  constructor(
    private _modal: NzModalService,
    private _packageService: IPackageService
  ) {}

  endView = () => {
    this.viewing = false;
  };
  openView = (service: Package) => {
    this.viewingPackage = service;
    this.viewing = true;
  };

  ngOnInit(): void {
    this._packageService.getPackages().subscribe(({ meta, data }) => {
      this.packages = data;
      this.meta = meta;
    });
  }
}
