import { Component, Input, OnInit } from "@angular/core";
import { DEALER_ROUTES, SUPPLIER_ROUTES } from "../../router";
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
    console.log("role", this.role);
    if (this.role === "dealer") {
      this.routes = DEALER_ROUTES;
    } else {
      this.routes = SUPPLIER_ROUTES;
    }
  }
}
