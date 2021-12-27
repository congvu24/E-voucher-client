import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Voucher, VoucherType } from "../core/interface/voucher";

@Injectable()
export abstract class IVoucherService {
  abstract createVoucher(id: UUID, type: VoucherType): Observable<any>;
  abstract getVouchers(
    params?: any
  ): Observable<{ data: Voucher[]; meta: any }>;
  abstract getVoucherByIds(): Voucher[];
  abstract deleteVoucher(): void;
  abstract editVoucherById(): Voucher;
  abstract commitVoucher(info: string): boolean;
}
