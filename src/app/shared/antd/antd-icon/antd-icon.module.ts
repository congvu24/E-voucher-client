import { NgModule } from "@angular/core";
import { IconDefinition } from "@ant-design/icons-angular";
import { NzIconModule } from "ng-zorro-antd/icon";
import {
  LockOutline,
  UserOutline,
  FilterOutline,
  DeleteOutline,
  KeyOutline,
  LogoutOutline,
  PlusOutline,
  LoadingOutline,
  DeleteFill,
  EyeFill,
  EditFill,
  TagsOutline,
  SecurityScanOutline,
  WalletOutline,
  BellFill,
  ScanOutline,
  ArrowLeftOutline,
  HomeOutline,
  HistoryOutline,
  CheckOutline,
  CloseOutline,
  SearchOutline,
  ArrowUpOutline,
  EyeInvisibleOutline,
  PieChartOutline,
  ForkOutline,
} from "@ant-design/icons-angular/icons";

const icons: IconDefinition[] = [
  LockOutline,
  UserOutline,
  FilterOutline,
  DeleteOutline,
  KeyOutline,
  LogoutOutline,
  DeleteFill,
  KeyOutline,
  LogoutOutline,
  PlusOutline,
  LoadingOutline,
  EyeFill,
  EditFill,
  TagsOutline,
  SecurityScanOutline,
  WalletOutline,
  BellFill,
  ScanOutline,
  ArrowLeftOutline,
  HomeOutline,
  HistoryOutline,
  CheckOutline,
  CloseOutline,
  SearchOutline,
  ArrowUpOutline,
  EyeInvisibleOutline,
  PieChartOutline,
  ForkOutline,
];
@NgModule({
  declarations: [],
  imports: [NzIconModule.forRoot(icons)],
  exports: [NzIconModule],
})
export class AntdIconModule {}
