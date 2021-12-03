import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgencyComponent } from "./agency.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    component: AgencyComponent,
    children: [{ path: "", component: RegisterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}
