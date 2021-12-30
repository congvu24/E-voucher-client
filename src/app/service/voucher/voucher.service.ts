import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import {
  Voucher,
  VoucherStatus,
  VoucherType,
} from "../../core/interface/voucher";
import { HttpService } from "../../core/services";
import { QrResult } from "../../interface/common";
import { IVoucherService } from "../../interface/voucher-service.";
import { VOUCHER_ENDPOINT } from "../../shared/router";

@Injectable({
  providedIn: "root",
})
export class VoucherService implements IVoucherService {
  constructor(private _http: HttpClient) {}

  claimVoucher(info: any): Observable<boolean> {
    return this._http
      .put(`${VOUCHER_ENDPOINT}/claim`, info)
      .pipe(map((res) => true));
  }
  createVoucher(id: string, type: VoucherType): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getVouchers(params?: any): Observable<{ data: Voucher[]; meta: Meta }> {
    return this._http.get(VOUCHER_ENDPOINT, { params }).pipe(
      map((res: any) => {
        const meta: Meta = res.meta;
        const data = res.data.map((item) => item as Voucher);
        return { meta, data };
      })
    );
  }
}
