import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SharedModule } from "../../shared/shared.module";
import {
  BellOutline,
  KeyOutline,
  LogoutOutline,
} from "@ant-design/icons-angular/icons";
import { NzIconModule } from "ng-zorro-antd/icon";
import { VoucherManageComponent } from "./voucher-manage/voucher-manage.component";
import { ServiceManageComponent } from "./service-manage/service-manage.component";
const icon = [];
@NgModule({
  declarations: [MainComponent, VoucherManageComponent, ServiceManageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NzIconModule.forChild(icon),
  ],
})
export class MainModule {}
