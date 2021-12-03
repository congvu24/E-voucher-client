import { Observable } from "rxjs";
import { Request } from "../core/interface/request";

export abstract class IRequestService {
  abstract deleteRequest(): void;
  abstract createRequest(p: Request): Observable<any>;
  abstract getRequests(
    params?: any
  ): Observable<{ data: Request[]; meta: any }>;
  abstract getRequestByIds(): Request[];
  abstract editRequestById(): Request;
  abstract addRequest(p: Request): Request[];
  abstract updateRequest(id: UUID, updates: any);
  abstract get meta(): unknown;
  abstract get requests(): unknown;
}
