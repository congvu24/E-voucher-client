/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { truncate } from "fs";

import { Observable, Observer, of } from "rxjs";
import { map } from "rxjs/operators";
import { Package } from "../../../../core/interface/package";
import { UiService } from "../../../../core/services";
import { IPackageService } from "../../../../interface/package-service";
import { PackageService } from "../../../../service/package/package.service";

@Component({
  selector: "service-edit-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  providers: [{ provide: IPackageService, useClass: PackageService }],
})
export class FormComponent implements OnInit {
  @Input() package: Package;
  packageForm: FormGroup;
  loading = true;
  constructor(
    private fb: FormBuilder,
    private _packageService: IPackageService
  ) {
    this.packageForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      minValue: new FormControl(null, [Validators.required, Validators.min(0)]),
      maxValue: new FormControl(null, [Validators.required, Validators.min(0)]),
      isShow: new FormControl(true),
    });
  }

  submitForm(): Observable<Package> {
    if (this.packageForm.valid) {
      const min = this.packageForm.get("minValue").value;
      const max = this.packageForm.get("maxValue").value;
      if (min >= max) {
        throw new Error("Min value must smaller than Max value");
      }
      const { id, ...updates } = this.packageForm.value;

      return this._packageService.updatePackage(this.package.id, updates);
    } else {
      Object.values(this.packageForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          throw new Error("invalid properties");
        }
      });
      return;
    }
  }

  ngOnInit(): void {
    this.packageForm.setValue({
      name: this.package.name,
      description: this.package.description,
      minValue: this.package.minValue,
      maxValue: this.package.maxValue,
      isShow: true,
    });
    this.loading = false;
  }
}
