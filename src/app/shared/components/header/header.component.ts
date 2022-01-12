import { Component, Input, OnInit } from "@angular/core";
import { RouterService, StorageService } from "../../../core/services";
import { AuthService } from "../../../service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() role: string;

  name: string;
  splitName: string;
  constructor(private _auth: AuthService, private _route: RouterService) {}

  logout() {
    this._auth.logout().subscribe(({ success }) => {
      if (success) {
        this._route.goto("login");
      }
    });
  }
  ngOnInit(): void {
    this.name = this._auth.name;
    this.splitName = this.name.charAt(0).toUpperCase();
  }
}
