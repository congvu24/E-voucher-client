import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UiRoutingModule } from "./ui-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, UiRoutingModule, SharedModule],
})
export class UiModule {}
