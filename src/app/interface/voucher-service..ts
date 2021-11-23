import { Injectable } from "@angular/core";
import { Voucher } from "../core/interface/voucher";

@Injectable()
export abstract class IVoucherService {
  abstract createVoucher(): void;
  abstract getVouchers(): Voucher[];
  abstract getVoucherByIds(): Voucher[];
  abstract deleteVoucher(): void;
  abstract editVoucherById(): Voucher;
  abstract commitVoucher(info: string): boolean;
}
