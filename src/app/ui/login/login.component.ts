import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { RouterService } from "../../core/services";
import { AuthService } from "../../service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  constructor(
    private _auth: AuthService,
    private fb: FormBuilder,
    private _router: RouterService
  ) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const { password, userName } = this.validateForm.value;
      this._auth
        .login(userName, password)
        .pipe(mergeMap((role) => this._auth.saveCredential(role)))
        .subscribe((data) => this._router.goto("/supplier"));
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    // window.location.replace("/");
  }
  login() {
    this._auth.login("duy", "gmail").subscribe((d) => console.log(d));
  }
  ngOnInit(): void {}
}
