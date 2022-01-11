import { Observable } from "rxjs";
import { DealerAnalyticInputPort } from "../service/inputPorts";

export abstract class IAnalyticService {
  abstract getDealerAnalytic(): Observable<DealerAnalyticInputPort>;
}
