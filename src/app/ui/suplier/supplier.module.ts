import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupplierRoutingModule } from "./supplier-routing.module";
import { SupplierComponent } from "./supplier.component";
import { VoucherRequestComponent } from "./voucher-request/voucher-request.component";
import { SharedModule } from "../../shared/shared.module";
import { VoucherCreatedComponent } from "./voucher-created/voucher-created.component";

@NgModule({
  declarations: [
    SupplierComponent,
    VoucherRequestComponent,
    VoucherCreatedComponent,
  ],
  imports: [CommonModule, SupplierRoutingModule, SharedModule],
})
export class SupplierModule {}
