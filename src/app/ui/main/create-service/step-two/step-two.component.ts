import { Component, Input, OnInit } from "@angular/core";
import { Package } from "../../../../core/interface/package";
import { CreatePackageService } from "../../../../service/package/create-package.service";

@Component({
  selector: "app-step-two",
  templateUrl: "./step-two.component.html",
  styleUrls: ["./step-two.component.scss"],
})
export class StepTwoComponent implements OnInit {
  package: Package;
  constructor(private _packageService: CreatePackageService) {
    this.package = this._packageService.package;
  }

  ngOnInit(): void {}
}
