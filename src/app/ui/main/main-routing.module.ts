import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateServiceComponent } from "./create-service/create-service.component";
import { MainComponent } from "./main.component";
import { QrScanComponent } from "./qr-scan/qr-scan.component";
import { ServiceManageComponent } from "./service-manage/service-manage.component";
import { VoucherManageComponent } from "./voucher-manage/voucher-manage.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "voucher-manage", component: VoucherManageComponent },
      { path: "service-manage", component: ServiceManageComponent },
      { path: "service-create", component: CreateServiceComponent },
      { path: "voucher-scan", component: QrScanComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
