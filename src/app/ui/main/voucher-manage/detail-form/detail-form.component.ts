import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Package } from "../../../../core/interface/package";

@Component({
  selector: "app-detail-form",
  templateUrl: "./detail-form.component.html",
  styleUrls: ["./detail-form.component.scss"],
})
export class DetailFormComponent implements OnInit {
  @Input() data: any;
  service?: Package;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);

    this.service = this.data?.servicePackage;
  }
}
