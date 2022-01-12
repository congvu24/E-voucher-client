import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SharedModule } from "../../shared/shared.module";

import { VoucherManageComponent } from "./voucher-manage/voucher-manage.component";
import { ServiceManageComponent } from "./service-manage/service-manage.component";
import { ServiceManageTableComponent } from "./service-manage-table/service-manage.component";
import { CreateServiceComponent } from "./create-service/create-service.component";
import { StepOneComponent } from "./create-service/step-one/step-one.component";
import { StepTwoComponent } from "./create-service/step-two/step-two.component";
import { StepThreeComponent } from "./create-service/step-three/step-three.component";
import { CardComponent } from "./service-manage/card/card.component";
import { FormComponent } from "./service-manage-table/form/form.component";
import { QrScanComponent } from "./qr-scan/qr-scan.component";
import { RouterModule } from "@angular/router";
import { DetailFormComponent } from "./voucher-manage/detail-form/detail-form.component";
import { CheckoutComponent } from "./qr-scan/checkout/checkout.component";
import { InvoiceComponent } from "./qr-scan/invoice/invoice.component";
import { MainDashboardComponent } from "./main-dashboard/main-dashboard.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
@NgModule({
  declarations: [
    MainComponent,
    VoucherManageComponent,
    ServiceManageComponent,
    CreateServiceComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    CardComponent,
    FormComponent,
    QrScanComponent,
    ServiceManageTableComponent,
    DetailFormComponent,
    CheckoutComponent,
    InvoiceComponent,
    MainDashboardComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule, NgxChartsModule],
})
export class MainModule {}
