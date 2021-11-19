import { NgModule } from "@angular/core";
import { IconDefinition } from "@ant-design/icons-angular";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  LockOutline,
  UserOutline,
  FilterOutline,
  DeleteOutline,
  KeyOutline,
  BellOutline,
  LogoutOutline,
} from "@ant-design/icons-angular/icons";

const icons: IconDefinition[] = [
  LockOutline,
  UserOutline,
  FilterOutline,
  DeleteOutline,
  KeyOutline,
  LogoutOutline,
  BellOutline,
  KeyOutline,
  LogoutOutline,
];
@NgModule({
  declarations: [],
  imports: [NzIconModule.forRoot(icons)],
})
export class AntdIconModule {}
