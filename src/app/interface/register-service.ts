import { Observable } from "rxjs";
import { Register } from "../core/interface/register";

export abstract class IRegisterService {
  abstract getRegisters(
    params?: any
  ): Observable<{ data: Register[]; meta: any }>;
  abstract acceptRegister(citizenId: UUID): Observable<Register>;
  abstract rejectRegister(citizenId: UUID): Observable<Register>;
}
