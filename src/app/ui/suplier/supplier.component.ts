import { Component, OnInit } from "@angular/core";
import { UserRole } from "../../core/constant";

@Component({
  selector: "app-supplier",
  templateUrl: "./supplier.component.html",
  styleUrls: ["./supplier.component.scss"],
})
export class SupplierComponent implements OnInit {
  role: string;
  constructor() {
    this.role = UserRole.suppier;
  }

  ngOnInit(): void {}
}
