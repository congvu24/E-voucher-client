import { Observable } from "rxjs";
import { Request } from "../core/interface/request";

export abstract class IRequestService {
  abstract getRequests(
    params?: any
  ): Observable<{ data: Request[]; meta: any }>;
  abstract rejectRequest(id: UUID): Observable<any>;
}
