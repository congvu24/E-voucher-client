import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-step-one",
  templateUrl: "./step-one.component.html",
  styleUrls: ["./step-one.component.scss"],
})
export class StepOneComponent {
  validateForm: FormGroup;
  avatarUrl?: string;
  loading = false; // upload loading

  constructor(private fb: FormBuilder, private msg: NzMessageService) {
    this.validateForm = this.fb.group({
      name: ["", [Validators.required], [this.userNameAsyncValidator]],
      description: ["", [Validators.email, Validators.required]],
      min: ["", [Validators.required]],
      max: ["", [this.confirmValidator]],
      isShow: ["", [Validators.required]],
    });
  }
  submitForm(): void {
    console.log("submit", this.validateForm.value);
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
      observer.next(isJpgOrPng && isLt2M);
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
