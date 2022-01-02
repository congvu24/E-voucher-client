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
  thumbnail: NzUploadFile; // package thumbnail
  thumbnailString: string | undefined = ""; // package thumbnail converted to base64
  loading = false; // upload loading

  constructor(
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
    if (!this.thumbnailString) {
      throw new Error("Thumbnail is missing");
    }
    if (this.packageForm.valid) {
      this._packageService.package = this._packageService.build(
        this.packageForm.value
      );
      if (this._packageService.package.validateMinAndMax()) {
      } else {
        const min = this.packageForm.get("min").value;
        const max = this.packageForm.get("max").value;
        if (min >= max) {
          throw new Error("Min value must smaller than Max value");
        }
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
      const convert: unknown = file as unknown;
      this._packageService.thumbnail = file;
      this.loading = true;
      this.getBase64(convert as File, (img: string) => {
        this.loading = false;
        this.thumbnailString = img;
      });
      observer.next(false);

      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result?.toString()));
    reader.readAsDataURL(img);
  }
}
