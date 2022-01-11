import { CurrencyPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IAnalyticService } from "../../../interface/analytic-service";
import { IVoucherService } from "../../../interface/voucher-service.";
import { AnalyticService } from "../../../service/analytic/analytic.service";

@Component({
  selector: "app-main-dashboard",
  templateUrl: "./main-dashboard.component.html",
  styleUrls: ["./main-dashboard.component.scss"],
  providers: [{ provide: IAnalyticService, useClass: AnalyticService }],
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
  profitPerPackage: { name: string; value: number }[] = [];
  blue = {
    domain: ["#1890ff"],
  };
  packageRank: {
    name: string;
    value: number;
    thumbnail: string;
    numberClaim: number;
  }[] = [];
  totalProfit = 0;
  numberPackage = 0;
  numberVoucherClaimed = 0;

  constructor(private _analyticService: IAnalyticService) {}
  formatCurrency = (value) => `$${value.toLocaleString()}`;

  ngOnInit(): void {
    this._analyticService.getDealerAnalytic().subscribe((res) => {
      this.profitPerPackage = res.sumMoneyByPackage;
      this.totalProfit = res.sumValue;
      this.numberVoucherClaimed = res.allOrder;
      this.numberPackage = res.numberPackage;
      this.packageRank = res.packageRank;
    });
  }
}
