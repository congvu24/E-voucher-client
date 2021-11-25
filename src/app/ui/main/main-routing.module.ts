import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateServiceComponent } from "./create-service/create-service.component";
import { MainComponent } from "./main.component";
import { QrScanComponent } from "./qr-scan/qr-scan.component";
import { ServiceManageTableComponent } from "./service-manage-table/service-manage.component";
import { ServiceManageComponent } from "./service-manage/service-manage.component";
import { VoucherManageComponent } from "./voucher-manage/voucher-manage.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: ServiceManageComponent },
      { path: "services/create", component: CreateServiceComponent },
      {
        path: "voucher/select-service/:id/scanner",
        component: QrScanComponent,
      },
      { path: "voucher/select-service", component: ServiceManageComponent },
      { path: "services", component: ServiceManageTableComponent },
      { path: "vouchers", component: VoucherManageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
