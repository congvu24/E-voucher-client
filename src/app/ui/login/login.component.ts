import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(private _auth: AuthService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log("submit", this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  login() {
    this._auth.login("duy", "gmail").subscribe((d) => console.log(d));
  }
  ngOnInit(): void {}
}
