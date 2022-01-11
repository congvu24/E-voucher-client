/* eslint-disable id-blacklist */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Register } from "../../core/interface/register";
import { RequesetStatus } from "../../core/interface/request";
import { HttpService } from "../../core/services";
import { toTitleCase } from "../../core/services/until/help";
import { Meta } from "../../interface/api";
import { IRegisterService } from "../../interface/register-service";
import { AgencyAnalyticInput } from "../inputPorts";

@Injectable({
  providedIn: "root",
})
export class RegisterService implements IRegisterService {
  constructor(private _http: HttpClient) {}
  getStatistic(): Observable<AgencyAnalyticInput> {
    return this._http.get("analytics/agency", {}).pipe(
      map((res: any) => {
        const response = { ...res };
        response.countRegisterByStatus = res.countRegisterByStatus
          .reverse()
          .map((element) => ({
            name: toTitleCase(element.name),
            value: element.value,
          }));
        return response;
      })
    );
  }

  acceptRegister(citizenId: UUID): Observable<Register> {
    return this._http
      .put(`goverment/citizen/${citizenId}`, {}, { params: { isValid: true } })
      .pipe(map((res: unknown) => res as Register));
  }
  rejectRegister(citizenId: string): Observable<Register> {
    return this._http
      .delete(`goverment/citizen/${citizenId}`)
      .pipe(map((res: unknown) => res as Register));
  }

  getRegisters(params?: any): Observable<{ data: Register[]; meta: any }> {
    return this._http
      .get<{ data: Register[]; meta: Meta }>("citizen", {
        params,
      })
      .pipe(map((res) => ({ data: res.data, meta: res.meta })));
  }
}
