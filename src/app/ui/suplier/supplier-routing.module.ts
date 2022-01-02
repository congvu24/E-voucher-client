import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SupplierComponent } from "./supplier.component";
import { VoucherCreatedComponent } from "./voucher-created/voucher-created.component";
import { VoucherRequestComponent } from "./voucher-request/voucher-request.component";

const routes: Routes = [
  {
    path: "",
    component: SupplierComponent,
    children: [
      {
        path: "vouchers",
        component: VoucherCreatedComponent,
      },
      {
        path: "request",
        component: VoucherRequestComponent,
      },
      {
        path: "statistic",
        component: DashboardComponent,
      },
      {
        path: "",
        redirectTo: "request",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
