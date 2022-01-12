import { Component, OnInit } from "@angular/core";
import { UserRole } from "../../core/constant";
import { SUPPLIER_ROUTES } from "../../shared/router";

@Component({
  selector: "app-supplier",
  templateUrl: "./supplier.component.html",
  styleUrls: ["./supplier.component.scss"],
})
export class SupplierComponent implements OnInit {
  role: string;
  routes: UserRoute[] = SUPPLIER_ROUTES;
  constructor() {
    this.role = UserRole.suppier;
  }

  ngOnInit(): void {}
}
