import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { UserRole } from "../../core/constant";
import { RouterService } from "../../core/services";
import { IAuthService } from "../../interface/auth-service";
import { AuthService } from "../../service";
import { LoadingService } from "../../shared/service/loading.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [{ provide: IAuthService, useClass: AuthService }],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  mockUser = [
    {
      name: "Garnet Wisam",
      identify: "3118529148",
      job: "Paralegal",
      address: "9 Montana Lane",
      email: "gwisam0@sogou.com",
      password: "6b1c50990f28b41db77803636cf10101",
    },
    {
      name: "Koren Westall",
      identify: "8129519445",
      job: "Software Consultant",
      address: "4 Stoughton Hill",
      email: "kwestall1@globo.com",
      password: "02c04f946635fe29be617212fbfa93ea",
    },
    {
      name: "Bernie Margaritelli",
      identify: "4870151286",
      job: "Software Test Engineer II",
      address: "880 Stang Parkway",
      email: "bmargaritelli2@engadget.com",
      password: "6ae220d213537263c259e6ba88c012d1",
    },
    {
      name: "Stephi Kolinsky",
      identify: "1032809876",
      job: "Software Engineer III",
      address: "40377 Alpine Crossing",
      email: "skolinsky3@utexas.edu",
      password: "f6edbfb6603210e9520033f5d2f54a07",
    },
    {
      name: "Meredith Pantin",
      identify: "4491813051",
      job: "Assistant Professor",
      address: "00 Blue Bill Park Point",
      email: "mpantin4@sogou.com",
      password: "53e4c159ca3c43ff5beb8724ec92ac9d",
    },
    {
      name: "Udall Ambler",
      identify: "4423133717",
      job: "Account Executive",
      address: "1813 Crescent Oaks Way",
      email: "uambler5@yellowbook.com",
      password: "c6e57c4b4b0d4c3649bdb5d51cbb3eab",
    },
    {
      name: "Joly MacCard",
      identify: "5724903091",
      job: "Cost Accountant",
      address: "929 Lerdahl Street",
      email: "jmaccard6@ed.gov",
      password: "32d24424abc83c0fae5defe1fa4cd29b",
    },
    {
      name: "Hymie Shurmore",
      identify: "0293590249",
      job: "Tax Accountant",
      address: "5588 Wayridge Trail",
      email: "hshurmore7@hud.gov",
      password: "aa6ce49c74f51b4c7cf14e30b0d70006",
    },
    {
      name: "Dalis Offiler",
      identify: "5332195036",
      job: "Automation Specialist IV",
      address: "135 Di Loreto Point",
      email: "doffiler8@google.ru",
      password: "cd676d03a4a054c12bf6d27d31e04695",
    },
    {
      name: "Artemus Harrison",
      identify: "1127839608",
      job: "Senior Cost Accountant",
      address: "40520 Continental Park",
      email: "aharrison9@google.fr",
      password: "bebcc0ea74e38aeaa9cba31589690a58",
    },
    {
      name: "Madelyn Wapple",
      identify: "0630180601",
      job: "GIS Technical Architect",
      address: "2636 Buell Park",
      email: "mwapplea@pen.io",
      password: "68c2e1e86c5b0d5a5927e31290c5a1e5",
    },
    {
      name: "Jacklin Poles",
      identify: "6496893500",
      job: "Statistician III",
      address: "9 Eastwood Crossing",
      email: "jpolesb@friendfeed.com",
      password: "4c0d03799f1f3534152b264e373bfa96",
    },
    {
      name: "Thibaud Wimbridge",
      identify: "6480158962",
      job: "Structural Analysis Engineer",
      address: "4656 Anzinger Point",
      email: "twimbridgec@webmd.com",
      password: "26dd02676d79e76b830dd4ebe6c80883",
    },
    {
      name: "Evan Weale",
      identify: "2419540409",
      job: "Geologist III",
      address: "7 Lake View Crossing",
      email: "ewealed@ucoz.com",
      password: "94e34b2c291030fbb6a8f570cac503c2",
    },
    {
      name: "Marylinda English",
      identify: "3441953320",
      job: "Quality Engineer",
      address: "2 Logan Center",
      email: "menglishe@infoseek.co.jp",
      password: "e92b170bb28ea543728962e0854bbaa6",
    },
    {
      name: "Irvin Sainthill",
      identify: "5215107173",
      job: "Recruiting Manager",
      address: "53013 Porter Crossing",
      email: "isainthillf@yahoo.com",
      password: "5717c31e204d5594a93bb967bc0cabaa",
    },
    {
      name: "Inger Rigler",
      identify: "4505595919",
      job: "Clinical Specialist",
      address: "7 Fisk Place",
      email: "iriglerg@blogspot.com",
      password: "de5bb5da67f83f84e9210c685ef1d333",
    },
    {
      name: "Davida Annandale",
      identify: "2787091954",
      job: "Senior Editor",
      address: "3404 Tony Hill",
      email: "dannandaleh@loc.gov",
      password: "82d11ce6f73d7a4146ea82cf16eaaed1",
    },
    {
      name: "Tatiania Liggett",
      identify: "4920278071",
      job: "Sales Representative",
      address: "555 7th Road",
      email: "tliggetti@census.gov",
      password: "6e2cbb0ddb5b9011ca29ebeccf85c3aa",
    },
    {
      name: "Shayne Corradi",
      identify: "1288603487",
      job: "Assistant Professor",
      address: "7175 Veith Lane",
      email: "scorradij@nymag.com",
      password: "a50ceee60fbbc1724c1fb0f38a017841",
    },
  ];

  //ui control
  passwordVisible = false;
  loading = this._loading.loading;
  loginStatus = "Loading...";
  constructor(
    private _auth: IAuthService,
    private fb: FormBuilder,
    private _router: RouterService,
    private _loading: LoadingService
  ) {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true],
    });
  }

  login(): void {
    if (this.validateForm.valid) {
      this.loginStatus = "Logging you in";
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
  navigateExternal(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit(): void {
    if (this._auth.isLoggedIn()) {
      this._loading.setLoading(true, location.pathname);
      this.loginStatus = "Logging you in";
      setTimeout(() => {
        this._loading.setLoading(false, location.pathname);
        this._router.goto(this._auth.getRole().toLowerCase());
      }, 1000);
    }
  }
}
