import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgencyRoutingModule } from "./agency-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { AgencyComponent } from "./agency.component";
import { RegisterComponent } from "./register/register.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [AgencyComponent, RegisterComponent],
  imports: [CommonModule, AgencyRoutingModule, SharedModule, NgxChartsModule],
})
export class AgencyModule {}
