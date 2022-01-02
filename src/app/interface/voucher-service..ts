import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Voucher, VoucherType } from "../core/interface/voucher";
import { QrResult } from "./common";

@Injectable()
export abstract class IVoucherService {
  abstract createVoucher(id: UUID, type: VoucherType): Observable<any>;
  abstract getVouchers(
    params?: any
  ): Observable<{ data: Voucher[]; meta: any }>;
  abstract getClaimedVouchers(
    params?: any
  ): Observable<{ data: Voucher[]; meta: any }>;
  abstract claimVoucher(info: any): Observable<boolean>;
}
