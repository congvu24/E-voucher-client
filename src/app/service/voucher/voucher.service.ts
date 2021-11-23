import { Injectable } from "@angular/core";
import { Voucher } from "../../core/interface/voucher";
import { IVoucherService } from "../../interface/voucher-service.";

@Injectable({
  providedIn: "root",
})
export class VoucherService implements IVoucherService {
  constructor() {}
  createVoucher(): void {
    throw new Error("Method not implemented.");
  }
  getVouchers(): Voucher[] {
    throw new Error("Method not implemented.");
  }
  getVoucherByIds(): Voucher[] {
    throw new Error("Method not implemented.");
  }
  deleteVoucher(): void {
    throw new Error("Method not implemented.");
  }
  editVoucherById(): Voucher {
    throw new Error("Method not implemented.");
  }
  commitVoucher(info: string): boolean {
    throw new Error("Method not implemented.");
  }
}
