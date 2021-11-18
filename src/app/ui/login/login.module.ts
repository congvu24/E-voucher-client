import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { SharedModule } from "../../shared/shared.module";
import { NzIconModule } from "ng-zorro-antd/icon";
import { GithubFill } from "@ant-design/icons-angular/icons";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    NzIconModule.forChild([GithubFill]),
  ],
})
export class LoginModule {}
