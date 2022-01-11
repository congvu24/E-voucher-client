import { Component, Input, OnInit } from "@angular/core";
import { UserRole } from "../../../core/constant";
import { AGENCY_ROUTES, DEALER_ROUTES, SUPPLIER_ROUTES } from "../../router";
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  @Input() role: string;
  routes: UserRoute[];
  constructor() {}

  ngOnInit(): void {
    if (this.role === UserRole.agency) {
      this.routes = AGENCY_ROUTES;
    } else if (this.role === UserRole.suppier) {
      this.routes = SUPPLIER_ROUTES;
    } else this.routes = DEALER_ROUTES;
  }
}
