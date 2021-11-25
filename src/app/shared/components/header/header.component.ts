import { Component, Input, OnInit } from "@angular/core";
import { AuthService } from "../../../service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() role: string;
  constructor(private _auth: AuthService) {}

  logout() {
    this._auth.logout().subscribe((s) => window.location.reload());
  }
  ngOnInit(): void {}
}
