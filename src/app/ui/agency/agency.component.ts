import { Component, OnInit } from "@angular/core";
import { UserRole } from "../../core/constant";

@Component({
  selector: "app-agency",
  templateUrl: "./agency.component.html",
  styleUrls: ["./agency.component.scss"],
})
export class AgencyComponent implements OnInit {
  role: string;
  constructor() {
    this.role = UserRole.agency;
  }

  ngOnInit(): void {}
}
