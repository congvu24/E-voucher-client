import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiRoutingModule } from "./ui-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AgencyComponent } from './agency/agency.component';

@NgModule({
  imports: [CommonModule, UiRoutingModule, SharedModule],
  declarations: [
    AgencyComponent
  ],
})
export class UiModule {}
