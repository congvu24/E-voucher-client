import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { SharedModule } from "../../shared/shared.module";
import { BellOutline } from "@ant-design/icons-angular/icons";
import { NzIconModule } from "ng-zorro-antd/icon";
import { VoucherManageComponent } from "./voucher-manage/voucher-manage.component";
const icon = [BellOutline];
@NgModule({
  declarations: [MainComponent, VoucherManageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    NzIconModule.forChild(icon),
  ],
})
export class MainModule {}
