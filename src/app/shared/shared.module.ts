import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import {
  HeaderComponent,
  PageNotFoundComponent,
  PageTitleComponent,
  SideNavComponent,
  FilterTagComponent,
  FilterVoucherComponent,
} from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AntdIconModule } from "./antd/antd-icon/antd-icon.module";
import { AntdComponentModule } from "./antd/antd-component/antd-component.module";
import { ServiceFormDirective } from "./directives/dealer/service-form.directive";
import { RouterModule } from "@angular/router";
import { VStatusTagComponent } from "./components/v-status-tag/v-status-tag.component";
import { VTypeTagComponent } from "./components/v-type-tag/v-type-tag.component";
import { RStatusTagComponent } from "./components/r-status-tag/r-status-tag.component";
import { TitleCasePipe } from "./pipe/title-case.pipe";
import { SStatusTagComponent } from "./components/s-status-tag/s-status-tag.component";
import { MinMaxCurrencyPipe } from "./pipe/min-max-currency.pipe";

const components = [
  HeaderComponent,
  PageNotFoundComponent,
  PageTitleComponent,
  SideNavComponent,
  FilterTagComponent,
  FilterVoucherComponent,
  VStatusTagComponent,
  VTypeTagComponent,
  RStatusTagComponent,
  TitleCasePipe,
  SStatusTagComponent,
  MinMaxCurrencyPipe,
];

const modules = [
  AntdIconModule,
  AntdComponentModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];
@NgModule({
  declarations: [WebviewDirective, components, ServiceFormDirective],
  imports: [CommonModule, modules],
  exports: [WebviewDirective, modules, components],
})
export class SharedModule {}
