import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-manage",
  templateUrl: "./service-manage.component.html",
  styleUrls: ["./service-manage.component.scss"],
})
export class ServiceManageComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
