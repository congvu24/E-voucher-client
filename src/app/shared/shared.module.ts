import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import {
  HeaderComponent,
  PageNotFoundComponent,
  PageTitleComponent,
  SideNavComponent,
} from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AntdIconModule } from "./antd/antd-icon/antd-icon.module";
import { AntdComponentModule } from "./antd/antd-component/antd-component.module";

const components = [
  HeaderComponent,
  PageNotFoundComponent,
  PageTitleComponent,
  SideNavComponent,
];

const modules = [
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
  AntdIconModule,
  AntdComponentModule,
];

@NgModule({
  declarations: [WebviewDirective, components],
  imports: [CommonModule, modules],
  exports: [WebviewDirective, modules, components],
})
export class SharedModule {}
