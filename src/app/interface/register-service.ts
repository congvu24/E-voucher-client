import { Observable } from "rxjs";
import { Register } from "../core/interface/register";
import { AgencyAnalyticInput } from "../service/inputPorts";

export abstract class IRegisterService {
  abstract getRegisters(
    params?: any
  ): Observable<{ data: Register[]; meta: any }>;
  abstract acceptRegister(citizenId: UUID): Observable<Register>;
  abstract rejectRegister(citizenId: UUID): Observable<Register>;
  abstract getStatistic(): Observable<AgencyAnalyticInput>;
}
