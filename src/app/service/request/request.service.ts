import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRequestService } from "../../interface/request-service";
import { RequesetStatus, Request } from "../../core/interface/request";
@Injectable({
  providedIn: "root",
})
export class RequestService implements IRequestService {
  request: Request[];
  constructor() {}
  deleteRequest(): void {
    throw new Error("Method not implemented.");
  }
  createRequest(p: Request): Observable<any> {
    throw new Error("Method not implemented.");
  }
  getRequests(): Request[] {
    // throw new Error("Method not implemented.");
    this.request = [
      {
        id: "sfdsaf",
        status: RequesetStatus.accepted,
        createdAt: "sdfdsf",
        userId: "sdf",
        note: "asdfdsf",
        voucherId: "dsfsd",
      },
    ];

    return this.request;
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
}
