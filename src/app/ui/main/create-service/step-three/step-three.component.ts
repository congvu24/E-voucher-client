import { Component, OnInit } from "@angular/core";
import { RouterService } from "../../../../core/services/router/router.service";

@Component({
  selector: "app-step-three",
  templateUrl: "./step-three.component.html",
  styleUrls: ["./step-three.component.scss"],
})
export class StepThreeComponent implements OnInit {
  constructor(private _router: RouterService) {}
  done() {
    this._router.goto("/main/services");
  }
  again() {
    this._router.reload();
  }

  ngOnInit(): void {}
}
