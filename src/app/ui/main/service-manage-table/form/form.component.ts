/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";

import { Observable, Observer, of } from "rxjs";
import { map } from "rxjs/operators";
import { Package } from "../../../../core/interface/package";
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
  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private _package: IPackageService) {}

  /**
   * validate and submit editservice form using service
   *
   * @returns true if submit success, false if not
   */
  submitForm(): Observable<Package> {
    const { id, ...updates } = this.validateForm.value;

    return this._package.updatePackage(this.package.id, updates);
  }

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.validateForm.controls.confirm.updateValueAndValidity()
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === "JasonWood") {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [
        this.package?.name,
        [Validators.required],
        [this.userNameAsyncValidator],
      ],
      description: [
        this.package?.description,
        [Validators.email, Validators.required],
      ],
      min: [this.package?.min, [Validators.required]],
      max: [this.package?.max, [this.confirmValidator]],
      isShow: [this.package?.isShow, [Validators.required]],
    });
  }
}
