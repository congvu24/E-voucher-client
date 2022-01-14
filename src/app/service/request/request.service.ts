import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRequestService } from "../../interface/request-service";
import { Request } from "../../core/interface/request";
import { HttpService } from "../../core/services";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { cleanObject } from "../../until";
import { VOUCHER_REQUEST_ENDPOINT } from "../../shared/router";
@Injectable({
  providedIn: "root",
})
export class RequestService implements IRequestService {
  constructor(private _http: HttpClient) {}
  getRequests(params?: any): Observable<any> {
    console.log(params);

    return this._http.get("supplier/request", { params }).pipe(
      map((res: any) => ({
        data: res.data.sort((prev, next) =>
          prev.createdAt < next.createdAt
            ? 1
            : prev.createdAt === next.createdAt
            ? 0
            : -1
        ),
        meta: res.meta,
      }))
    );
  }
  rejectRequest(id: UUID): Observable<any> {
    return this._http.put(`${VOUCHER_REQUEST_ENDPOINT}/reject/${id}`, {});
  }
}
