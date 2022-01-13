import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { NzModalService } from "ng-zorro-antd/modal";
import { isThisTypeNode } from "typescript/lib/tsserverlibrary";
import { Register } from "../../../core/interface/register";
import { StorageService, UiService } from "../../../core/services";
import { IRegisterService } from "../../../interface/register-service";
import { AgencyAnalyticInput } from "../../../service/inputPorts";
import { RegisterService } from "../../../service/register/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [{ provide: IRegisterService, useExisting: RegisterService }],
})
export class RegisterComponent implements OnInit {
  filterVisible: boolean;
  registers: Register[];
  meta: any;

  //statistic
  registerData: AgencyAnalyticInput;

  //table props
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<string>();

  //ui control
  filter: FormGroup;
  page = 1;
  loading = false;
  colorScheme = {
    domain: ["#1890ff", "#d3342d"],
  };
  openStatistic = true;

  constructor(
    private _register: IRegisterService,
    private _ui: UiService,
    private _modal: NzModalService
  ) {}

  toggleStatistic() {
    this.openStatistic = !this.openStatistic;
  }

  rejectRegister(id: string): void {
    this._ui.showInfo("Processing");
    this._register.rejectRegister(id).subscribe((res) => {
      this.registers = this.registers.filter((r) => r.id !== id);
      this._ui.showSuccess("Reject success");
      this.loading = false;
    });
  }
  acceptRegister(id: UUID): void {
    this._ui.showInfo("Processing");
    this._register.acceptRegister(id).subscribe((res) => {
      this.registers = this.registers.filter((r) => r.id !== id);
      this._ui.showSuccess("Accept success");
    });
  }
  acceptBulk(): void {
    this._ui.showInfo();
  }
  rejectBulk(): void {
    this._ui.showInfo();
  }
  confirmReject(id: string): void {
    const user = this.registers.find((item) => item.id === id);
    this._modal.confirm({
      nzTitle: "Reject user register request",
      nzContent: `Do you want to reject <i>${user.name}</i> register request?`,
      nzOkText: "OK",
      nzCancelText: "Canel",
      nzOnOk: () => this.rejectRegister(id),
    });
  }
  confirmAccept(id: string): void {
    const user = this.registers.find((item) => item.id === id);
    this._modal.confirm({
      nzTitle: "Accept user register request",
      nzContent: `Do you want to accept <i>${user.name}</i> register request?`,
      nzOkText: "OK",
      nzCancelText: "Canel",
      nzOnOk: () => this.acceptRegister(id),
    });
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.registers.forEach((item) => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onPageIndexChange(page: number): void {
    this.page = page;
    this._register
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .getRegisters({ is_valid: false })
      .subscribe(({ data, meta }) => {
        this.registers = data;
        this.meta = meta;
      });
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.registers.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.registers.some((item) => this.setOfCheckedId.has(item.id)) &&
      !this.checked;
  }

  ngOnInit(): void {
    this.filterVisible = false;
    this._register
      // eslint-disable-next-line @typescript-eslint/naming-convention
      .getRegisters({ is_valid: false })
      .subscribe(({ data, meta }) => {
        this.registers = data;
        this.meta = meta;
      });
    this._register.getStatistic().subscribe((res) => {
      this.registerData = res;
    });
  }
}
