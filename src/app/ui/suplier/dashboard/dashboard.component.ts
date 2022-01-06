import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as line from "d3-shape";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class SupplierDashboardComponent implements OnInit {
  supportVoucherData = [
    {
      name: "Support voucher",
      series: [
        {
          value: 90,
          name: "Jan",
        },
        {
          value: 123,
          name: "Feb",
        },
        {
          value: 134,
          name: "Mar",
        },
        {
          value: 111,
          name: "Apr",
        },
        {
          value: 90,
          name: "May",
        },
        {
          value: 49,
          name: "Jun",
        },
        {
          value: 100,
          name: "Jul",
        },
      ],
    },
  ];
  helpVoucherData = [
    {
      name: "Help voucher",
      series: [
        {
          value: 64,
          name: "Jan",
        },
        {
          value: 72,
          name: "Feb",
        },
        {
          value: 65,
          name: "Mar",
        },
        {
          value: 91,
          name: "Apr",
        },
        {
          value: 101,
          name: "May",
        },
        {
          value: 125,
          name: "Jun",
        },
        {
          value: 61,
          name: "Jul",
        },
      ],
    },
  ];
  urgentVoucherData = [
    {
      name: "Urgen voucher",
      series: [
        {
          value: 99,
          name: "Jan",
        },
        {
          value: 81,
          name: "Feb",
        },
        {
          value: 122,
          name: "Mar",
        },
        {
          value: 88,
          name: "Apr",
        },
        {
          value: 72,
          name: "May",
        },
        {
          value: 75,
          name: "Jun",
        },
        {
          value: 89,
          name: "Jul",
        },
      ],
    },
  ];
  requestHistoryData = [
    {
      name: "Request",
      series: [
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
      ],
    },
  ];
  recentVoucherData = [
    {
      title: "Urgent",
      value: "2390",
    },
    {
      title: "Urgent",
      value: "2390",
    },
    {
      title: "Urgent",
      value: "2390",
    },
  ];
  reqHistoryActive = [{ name: "Request" }];
  orange = {
    domain: ["#faad67"],
  };
  green = {
    domain: ["#00b862"],
  };
  red = {
    domain: ["#ff3d00"],
  };
  blue = {
    domain: ["#1d68fb"],
  };
  curveSmall = line.curveBumpX;
  curve = line.curveBumpX;
  constructor(private _router: Router) {}
  openVoucherRequest() {
    this._router.navigate(["supplier/request"]);
  }
  ngOnInit(): void {}
}
