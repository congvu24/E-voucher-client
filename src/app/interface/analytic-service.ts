import { Observable } from "rxjs";
import {
  DealerAnalyticInputPort,
  SupplierAnalyticPort,
} from "../service/inputPorts";

export abstract class IAnalyticService {
  abstract getDealerAnalytic(): Observable<DealerAnalyticInputPort>;
  abstract getSupplierAnalytic(): Observable<SupplierAnalyticPort>;
}
