import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRequestService } from "../../interface/request-service";
import { Request } from "../../core/interface/request";
import { HttpService } from "../../core/services";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { cleanObject } from "../../until";
@Injectable({
  providedIn: "root",
})
export class RequestService implements IRequestService {
  constructor(private _http: HttpClient) {}
  getRequests(params?: any): Observable<any> {
    console.log(params);

    return this._http.get("supplier/request", { params }).pipe(
      map((res: any) => ({
        data: res.data,
        meta: res.meta,
      }))
    );
  }
  createRequest(p: Request): Observable<any> {
    throw new Error("Method not implemented.");
  }
  rejectRequest(id: string): Observable<any> {
    throw new Error("Method not implemented.");
  }
}
