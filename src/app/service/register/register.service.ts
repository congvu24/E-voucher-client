import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Register } from "../../core/interface/register";
import { HttpService } from "../../core/services";
import { Meta } from "../../interface/api";
import { IRegisterService } from "../../interface/register-service";

@Injectable({
  providedIn: "root",
})
export class RegisterService implements IRegisterService {
  constructor(private _http: HttpClient) {}
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
