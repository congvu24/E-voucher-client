import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-agency",
  templateUrl: "./agency.component.html",
  styleUrls: ["./agency.component.scss"],
})
export class AgencyComponent implements OnInit {
  role: string;
  constructor() {
    this.role = "dealer";
  }

  ngOnInit(): void {}
}
