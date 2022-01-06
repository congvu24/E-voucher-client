import { CurrencyPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main-dashboard",
  templateUrl: "./main-dashboard.component.html",
  styleUrls: ["./main-dashboard.component.scss"],
})
export class MainDashboardComponent implements OnInit {
  packageData = [
    {
      value: 1589,
      name: "Jan",
    },
    {
      value: 1589,
      name: "Feb",
    },
    {
      value: 1589,
      name: "Mar",
    },
    {
      value: 1589,
      name: "Apr",
    },
    {
      value: 1839,
      name: "May",
    },
    {
      value: 2706,
      name: "Jun",
    },
    {
      value: 3893,
      name: "Jul",
    },
    {
      value: 5994,
      name: "Aug",
    },
    {
      value: 2900,
      name: "Sep",
    },
    {
      value: 3920,
      name: "Oct",
    },
    {
      value: 2904,
      name: "Nov",
    },
    {
      value: 4300,
      name: "Dec",
    },
  ];
  profitPerPackage = [
    {
      name: "United States",
      value: 50000,
    },
    {
      name: "Italy",
      value: 35800,
    },
    {
      name: "Malawi",
      value: 21458,
    },
    {
      name: "Azerbaijan",
      value: 30705,
    },
    {
      name: "Serbia",
      value: 23458,
    },
    {
      name: "Ireland",
      value: 38467,
    },
    {
      name: "Nauru",
      value: 37988,
    },
    {
      name: "Cocos (Keeling) Islands",
      value: 57795,
    },
    {
      name: "Moldova",
      value: 26371,
    },
    {
      name: "Isle of Man",
      value: 11049,
    },
    {
      name: "Poland",
      value: 39214,
    },
    {
      name: "Uruguay",
      value: 51676,
    },
    {
      name: "Faroe Islands",
      value: 26096,
    },
  ];
  blue = {
    domain: ["#1890ff"],
  };

  packages = [
    {
      name: "Lorem ipsum dolor, sit amet",
    },
    {
      name: "Lorem ipsum dolor, sit amet",
    },
    {
      name: "Lorem ipsum dolor, sit amet",
    },
    {
      name: "Lorem ipsum dolor, sit amet",
    },
    {
      name: "Lorem ipsum dolor, sit amet",
    },
  ];

  constructor() {}
  formatCurrency = (value) => `$${value.toLocaleString()}`;

  ngOnInit(): void {}
}
