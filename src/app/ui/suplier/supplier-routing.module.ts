import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupplierComponent } from "./supplier.component";
import { VoucherCreatedComponent } from "./voucher-created/voucher-created.component";
import { VoucherRequestComponent } from "./voucher-request/voucher-request.component";

const routes: Routes = [
  {
    path: "",
    component: SupplierComponent,
    children: [
      {
        path: "",
        component: VoucherRequestComponent,
      },
      {
        path: "vouchers",
        component: VoucherCreatedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
