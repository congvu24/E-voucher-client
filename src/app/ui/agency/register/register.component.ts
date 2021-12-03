import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { Register } from "../../../core/interface/register";
import { StorageService, UiService } from "../../../core/services";
import { IRegisterService } from "../../../interface/register-service";
import { RegisterService } from "../../../service/register/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [{ provide: IRegisterService, useExisting: RegisterService }],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  filterVisible: boolean;
  pagesize = 20;
  registers: Register[];
  meta: any;

  //table props
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<string>();

  constructor(
    private _register: IRegisterService,
    private _store: StorageService,
    private _ui: UiService,
    private _modal: NzModalService
  ) {}

  rejectRegister(id: string): void {
    this._register.editRegisterById(id, false).subscribe((res) => {
      const index = this.registers.findIndex((item) => item.id === id);
      if (index === -1) {
        this.registers.splice(index, 1);
        this._ui.showSuccess("Reject success");
      }
    });
  }
  acceptRegister(id: string): void {
    this._register.editRegisterById(id, true).subscribe((res) => {
      const index = this.registers.findIndex((item) => item.id === id);
      if (index === -1) {
        this.registers.splice(index, 1);
        this._ui.showSuccess("Accept success");
      }
    });
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
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
}
