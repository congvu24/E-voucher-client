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
import {
  VOUCHER_ENDPOINT,
  VOUCHER_REQUEST_ENDPOINT,
} from "../../shared/router";

@Injectable({
  providedIn: "root",
})
export class VoucherService implements IVoucherService {
  constructor(private _http: HttpClient) {}

  claimVoucher(info: any): Observable<boolean> {
    return this._http
      .put(
        `${VOUCHER_ENDPOINT}/claim?${Object.keys(info)
          .map((key) => `${key}=${info[key]}`)
          .join("&")}`,
        {}
      )
      .pipe(map((res) => true));
  }
  createVoucher(requestId: UUID, type: VoucherType): Observable<any> {
    return this._http.post(`${VOUCHER_ENDPOINT}/create`, {
      requestId,
      type,
    });
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
  getClaimedVouchers(
    params?: any
  ): Observable<{ data: Voucher[]; meta: Meta }> {
    return this._http.get(`${VOUCHER_ENDPOINT}/claimed`, { params }).pipe(
      map((res: any) => {
        const meta: Meta = res.meta;
        const data = res.data.map((item) => item as Voucher);
        return { meta, data };
      })
    );
  }
}
