import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule } from "@angular/forms";
import { AntdIconModule } from "./antd/antd-icon/antd-icon.module";
import {AntdComponentModule} from "./antd/antd-component/antd-component.module";
@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule,AntdIconModule, AntdComponentModule ],
  exports: [TranslateModule, WebviewDirective, FormsModule,AntdIconModule, AntdComponentModule]
})
export class SharedModule {}
