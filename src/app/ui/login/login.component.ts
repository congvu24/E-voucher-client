import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { UserRole } from "../../core/constant";
import { RouterService } from "../../core/services";
import { AuthService } from "../../service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  //ui control
  passwordVisible = false;
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
      const request = this._auth
        .login(userName, password)
        .pipe(
          switchMap((res: any) =>
            this._auth.saveCredential(res.user, res.token)
          )
        );

      request.subscribe((res) => {
        if (res.success) {
          this._router.goto(res.role.toLowerCase());
        }
      });
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
