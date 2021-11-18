import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main.component";
import { VoucherManageComponent } from "./voucher-manage/voucher-manage.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [{ path: "voucher-manage", component: VoucherManageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
