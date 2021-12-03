import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AgencyRoutingModule } from "./agency-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { AgencyComponent } from "./agency.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [AgencyComponent, RegisterComponent],
  imports: [CommonModule, AgencyRoutingModule, SharedModule],
})
export class AgencyModule {}
