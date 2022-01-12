import { Component, Input, OnInit } from "@angular/core";
import { Package } from "../../../../core/interface/package";
import { LoadingService } from "../../../../shared/service/loading.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  @Input() checkoutInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
