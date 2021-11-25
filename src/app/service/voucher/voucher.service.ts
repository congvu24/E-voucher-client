import { Injectable } from "@angular/core";
import {
  Voucher,
  VoucherStatus,
  VoucherType,
} from "../../core/interface/voucher";
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
    const vouchers: Array<Voucher> = [];
    for (let index = 0; index < 12; index++) {
      const iv: Voucher = {
        id: "123",
        type: VoucherType.help,
        status: VoucherStatus.used,
        value: 12321,
        validDate: "2021-11-22T15:37:33.911Z",
        createdAt: "2021-11-22T15:37:33.911Z",
        udatedAt: "2021-11-22T15:37:33.911Z",
      };
      vouchers.push(iv);
    }
    return vouchers;
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
