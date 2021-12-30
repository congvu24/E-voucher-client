import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Package } from "../../core/interface/package";

import { HttpService } from "../../core/services";
import { Meta } from "../../interface/api";
import { IPackageService } from "../../interface/package-service";

import { PACKAGE_ENDPOINT } from "../../shared/router";

@Injectable({
  providedIn: "root",
})
export class PackageService implements IPackageService {
  constructor(private _http: HttpClient) {}
  deletePackage(id: string): Observable<boolean> {
    return this._http
      .delete(`${PACKAGE_ENDPOINT}/${id}`)
      .pipe(map((res) => true));
  }
  updatePackage(id: string, updates: any): Observable<any> {
    console.log(updates);
    return this._http.patch(`${PACKAGE_ENDPOINT}/${id}`, updates);
  }

  getPackages(params?: any): Observable<{ meta: Meta; data: Package[] }> {
    return this._http.get(PACKAGE_ENDPOINT, { params }).pipe(
      map((res: any) => {
        const meta: Meta = res.meta;
        const data = res.data.map((item) => item as Package);
        return { meta, data };
      })
    );
  }
}
