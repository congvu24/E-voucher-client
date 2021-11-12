import { NgModule } from "@angular/core";
import { IconDefinition } from "@ant-design/icons-angular";
import { NzIconModule } from "ng-zorro-antd/icon";
import { GithubFill } from "@ant-design/icons-angular/icons";

const icons: IconDefinition[] = [ GithubFill];
@NgModule({
  declarations: [],
  imports: [
    NzIconModule.forRoot(icons),
  ],
})
export class AntdIconModule { }
