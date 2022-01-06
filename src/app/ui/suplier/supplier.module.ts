import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupplierRoutingModule } from "./supplier-routing.module";
import { SupplierComponent } from "./supplier.component";
import { VoucherRequestComponent } from "./voucher-request/voucher-request.component";
import { SharedModule } from "../../shared/shared.module";
import { VoucherCreatedComponent } from "./voucher-created/voucher-created.component";
import { SupplierDashboardComponent } from "./dashboard/dashboard.component";
import { UserInfoComponent } from "./voucher-request/user-info/user-info.component";
import { VoucherDetailComponent } from "./voucher-created/voucher-detail/voucher-detail.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    SupplierComponent,
    VoucherRequestComponent,
    VoucherCreatedComponent,
    SupplierDashboardComponent,
    UserInfoComponent,
    VoucherDetailComponent,
  ],
  imports: [CommonModule, SupplierRoutingModule, SharedModule, NgxChartsModule],
})
export class SupplierModule {}
