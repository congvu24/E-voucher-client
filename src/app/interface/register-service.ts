import { Observable } from "rxjs";
import { Register } from "../core/interface/register";

export abstract class IRegisterService {
  abstract getRegisters(
    params?: any
  ): Observable<{ data: Register[]; meta: any }>;
  abstract editRegisterById(
    citizenId: string,
    isValid: boolean
  ): Observable<Register>;
}
