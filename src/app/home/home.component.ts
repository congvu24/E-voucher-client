import { Component, OnInit } from "@angular/core";
import { HttpService } from "../core/services";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private _http: HttpService) {}
  ngOnInit(): void {}

  login() {
    this._http.patch("auth/user", { email: "duy", password: "213" });
  }
}
