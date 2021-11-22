/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
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
import { Package } from "../../../../core/interface/package";

@Component({
  selector: "service-edit-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input() service: number[]; // fake service, it should in type of Package
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  ngOnInit(): void {}
}
