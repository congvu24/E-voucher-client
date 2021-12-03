import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRequestService } from "../../interface/request-service";
import { Request } from "../../core/interface/request";
import { HttpService } from "../../core/services";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class RequestService implements IRequestService {
  protected _meta: unknown;
  private _requests: Request[];

  constructor(private _http: HttpService, private hts: HttpClient) {}
  deleteRequest(): void {
    throw new Error("Method not implemented.");
  }
  createRequest(p: Request): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getRequests(params?: any): Observable<any> {
    return this._http.get("supplier/request", { params }).pipe(
      map((res: any) => ({
        data: res.data,
        meta: res.meta,
      }))
    );
  }
  getRequestByIds(): Request[] {
    throw new Error("Method not implemented.");
  }
  editRequestById(): Request {
    throw new Error("Method not implemented.");
  }
  addRequest(p: Request): Request[] {
    throw new Error("Method not implemented.");
  }
  updateRequest(id: string, updates: any) {
    throw new Error("Method not implemented.");
  }

  //getter & setter
  get meta(): unknown {
    return this._meta;
  }
  get requests(): Request[] {
    return this._requests;
  }
}
