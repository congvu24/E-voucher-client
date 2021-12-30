import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { Observable, Observer } from "rxjs";
import { Package } from "../../../../core/interface/package";
import { CreatePackageService } from "../../../../service/package/create-package.service";

@Component({
  selector: "app-step-one",
  templateUrl: "./step-one.component.html",
  styleUrls: ["./step-one.component.scss"],
})
export class StepOneComponent {
  packageForm: FormGroup;
  avatarUrl?: string;
  loading = false; // upload loading

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private _packageService: CreatePackageService
  ) {
    this.packageForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      description: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
      ]),
      min: new FormControl(null, [Validators.required, Validators.min(0)]),
      max: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }

  submitForm() {
    if (this.packageForm.valid) {
      this._packageService.package = this._packageService.build(
        this.packageForm.value
      );
      if (this._packageService.package.validateMinAndMax()) {
      } else {
        const min = this.packageForm.get("min");
        const max = this.packageForm.get("max");
        throw new Error("Min value must smaller than Max value");
      }
    } else {
      Object.values(this.packageForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          throw new Error("invalid properties");
        }
      });
    }
  }

  beforeUpload = (
    file: NzUploadFile,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.msg.error("You can only upload JPG file!");
        observer.complete();
        return;
      }
      const isLt2M = file?.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error("Image must smaller than 2MB!");
        observer.complete();
        return;
      }
      // observer.next(isJpgOrPng && isLt2M); validate complete, upload file
      let base64: string;
      this.getBase64(file.originFileObj, (img: string) => {
        base64 = img;
      });
      this._packageService.package.setImage(base64);
      observer.next(false);
      observer.complete();
    });

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case "uploading":
        this.loading = true;
        break;
      case "done":
        // Get this url from response in real world.
        this.getBase64(info.file?.originFileObj, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case "error":
        this.msg.error("Network error");
        this.loading = false;
        break;
    }
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result?.toString()));
    reader.readAsDataURL(img);
  }
}
