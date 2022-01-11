import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAnalyticService } from "../../interface/analytic-service";
import { DealerAnalyticInputPort } from "../inputPorts";

@Injectable({
  providedIn: "root",
})
export class AnalyticService implements IAnalyticService {
  constructor(private _http: HttpClient) {}

  getDealerAnalytic(): Observable<DealerAnalyticInputPort> {
    return this._http.get<any>("analytics/dealer").pipe(
      map((res) => {
        const response: DealerAnalyticInputPort = { ...res };

        response.sumMoneyByPackage = res.sumMoneyByPackage
          .map((element) => ({
            name: element.name,
            value: element.value || 0,
          }))
          .sort((prev, next) => next.value - prev.value);

        response.packageRank = res.sumMoneyByPackage
          .map((element) => ({
            name: element.name,
            value: element.value || 0,
            thumbnail: element.thumbnail,
            numberClaim: element.numberClaim,
          }))
          .sort((prev, next) => next.numberClaim - prev.numberClaim)
          .splice(0, 5);

        return response;
      })
    );
  }
}
