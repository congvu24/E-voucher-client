import { Component, OnInit } from "@angular/core";
import { UserRole } from "../../core/constant";
import { AGENCY_ROUTES } from "../../shared/router";

@Component({
  selector: "app-agency",
  templateUrl: "./agency.component.html",
  styleUrls: ["./agency.component.scss"],
})
export class AgencyComponent implements OnInit {
  role: string;
  routes: UserRoute[] = AGENCY_ROUTES;
  constructor() {
    this.role = UserRole.agency;
  }

  ngOnInit(): void {}
}
