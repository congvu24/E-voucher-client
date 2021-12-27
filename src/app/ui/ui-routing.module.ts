import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserRole } from "../core/constant";
import { PageNotFoundComponent } from "../shared/components";
import { AuthGuard } from "../shared/guard/auth.guard";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "dealer",
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
    canActivate: [AuthGuard],
    data: {
      role: UserRole.dealer,
    },
  },
  {
    path: "supplier",
    loadChildren: () =>
      import("./suplier/supplier.module").then((m) => m.SupplierModule),
    canActivate: [AuthGuard],
    data: {
      role: UserRole.suppier,
    },
  },
  {
    path: "agency",
    loadChildren: () =>
      import("./agency/agency.module").then((m) => m.AgencyModule),
    canActivate: [AuthGuard],
    data: {
      role: UserRole.agency,
    },
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
