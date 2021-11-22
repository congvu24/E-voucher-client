import { Injectable } from "@angular/core";
import { IPackageService } from "@appInterface/package-service";
import { Package } from "@core/interface/package";
import { HttpService } from "@core/services";
import { Observable } from "rxjs";
import { CREATE_PACKAGE_ENDPOINT } from "src/app/shared/router";

@Injectable({
  providedIn: "root",
})
export class PackageService implements IPackageService {
  _package: Package;
  _packages: Package[];

  constructor(private _http: HttpService) {}
  createPackage(p): Observable<any> {
    return this._http.patch(CREATE_PACKAGE_ENDPOINT, p);
  }
  deletePackage(): void {
    throw new Error("Method not implemented.");
  }
  getPackages(): Package[] {
    throw new Error("Method not implemented.");
  }
  getPackageByIds(): Package[] {
    throw new Error("Method not implemented.");
  }
  editPackageById(): Package {
    throw new Error("Method not implemented.");
  }
  addPackage(p: Package): Package[] {
    return [...this._packages, p];
  }
  get package() {
    return this._package;
  }
  set package(value: Package) {
    this._package = value;
  }
}
