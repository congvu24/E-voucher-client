import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Register } from "../../core/interface/register";
import { HttpService } from "../../core/services";
import { IRegisterService } from "../../interface/register-service";

@Injectable({
  providedIn: "root",
})
export class RegisterService implements IRegisterService {
  constructor(private _http: HttpService) {}
  editRegisterById(citizenId: any, isValid: boolean): Observable<Register> {
    return this._http
      .put(`goverment/citizen/${citizenId}`, { isValid })
      .pipe(map((res: unknown) => res as Register));
  }

  createRegister(p: Register): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getRegisters(params?: any): Observable<{ data: Register[]; meta: any }> {
    return this._http
      .get("citizen", { params })
      .pipe(map((res) => ({ data: res.data, meta: res.meta })));
  }
  getRegisterByIds(): Register[] {
    throw new Error("Method not implemented.");
  }

  addRegister(p: Register): Register[] {
    throw new Error("Method not implemented.");
  }
  updateRegister(id: string, updates: any) {
    throw new Error("Method not implemented.");
  }
}
