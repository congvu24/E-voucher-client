import { Component, Input, OnInit } from "@angular/core";
import { RouterService } from "../../../core/services";
import { AuthService } from "../../../service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() role: string;
  constructor(private _auth: AuthService, private _route: RouterService) {}

  logout() {
    this._auth.logout().subscribe(({ success }) => {
      console.log(success);

      if (success) {
        this._route.goto("login");
      }
    });
  }
  ngOnInit(): void {}
}
