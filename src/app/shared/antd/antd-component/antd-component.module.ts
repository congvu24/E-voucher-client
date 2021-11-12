import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzNotificationModule } from "ng-zorro-antd/notification";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[NzButtonModule,NzNotificationModule]
})
export class AntdComponentModule { }
