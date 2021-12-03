import { Observable } from "rxjs";
import { Register } from "../core/interface/register";

export abstract class IRegisterService {
  abstract createRegister(p: Register): Observable<any>;
  abstract getRegisters(
    params?: any
  ): Observable<{ data: Register[]; meta: any }>;
  abstract getRegisterByIds(): Register[];
  abstract editRegisterById(
    citizenId: string,
    isValid: boolean
  ): Observable<Register>;
  abstract addRegister(p: Register): Register[];
  abstract updateRegister(id: UUID, updates: any);
}
