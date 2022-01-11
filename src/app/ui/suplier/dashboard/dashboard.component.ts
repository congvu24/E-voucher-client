import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as line from "d3-shape";
import { RequesetStatus } from "../../../core/interface/request";
import { Voucher } from "../../../core/interface/voucher";
import { IVoucherService } from "../../../interface/voucher-service.";
import { VoucherService } from "../../../service/voucher/voucher.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [{ provide: IVoucherService, useClass: VoucherService }],
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

  recentVoucherData: Voucher[] = [];
  reqHistoryActive = [{ name: "Request" }];
  chartFilterValue = 12;
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
  constructor(private _router: Router, private _voucherSv: IVoucherService) {}
  openVoucherRequest() {
    this._router.navigate(["supplier/request"]);
  }
  openRequestHistory() {
    this._router.navigate(["supplier/request"]);
  }
  ngOnInit(): void {
    this._voucherSv.getVouchers().subscribe(({ data, meta }) => {
      this.recentVoucherData = data
        .sort((prev, next) =>
          prev.createdAt < next.createdAt
            ? 1
            : prev.createdAt === next.createdAt
            ? 0
            : -1
        )
        .slice(0, 4);
    });
  }
}
