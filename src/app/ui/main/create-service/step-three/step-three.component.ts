import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterService } from "../../../../core/services/router/router.service";

@Component({
  selector: "app-step-three",
  templateUrl: "./step-three.component.html",
  styleUrls: ["./step-three.component.scss"],
})
export class StepThreeComponent implements OnInit {
  @Input() status: string;
  title = "There is an error when creating your service";
  description = "Try again or contact administrator for help";
  constructor(private _router: Router) {}
  done() {
    this._router.navigate(["/dealer/services"]);
  }
  again() {
    window.location.reload();
  }

  ngOnInit(): void {
    if (this.status === "success") {
      this.title = "Service Created Successfully";
      this.description = "Press Go Console to view your service.";
    }
  }
}
