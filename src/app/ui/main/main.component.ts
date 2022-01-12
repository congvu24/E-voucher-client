import { Component, OnInit } from "@angular/core";
import { UserRole } from "../../core/constant";
import { StorageService } from "../../core/services";
import { AuthService } from "../../service";
import { DEALER_ROUTES } from "../../shared/router";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  role: string;
  routes: UserRoute[] = DEALER_ROUTES;
  constructor(private _storage: StorageService) {
    // this.role = this._storage.getToken("role");
    this.role = UserRole.dealer;
  }

  ngOnInit(): void {}
}
