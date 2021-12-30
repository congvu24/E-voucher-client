import { HttpClient, JsonpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Package } from "../../core/interface/package";
import { HttpService, StorageService } from "../../core/services";
import { PACKAGE_ENDPOINT } from "../../shared/router";
import { PackageService } from "./package.service";

@Injectable()
export class CreatePackageService {
  private _package: Package;
  constructor(private _http: HttpClient, private _storage: StorageService) {}
  create(): Observable<Package> {
    return this._http
      .post(PACKAGE_ENDPOINT, { ...this.package, isShow: true })
      .pipe(
        map(
          (res: any) =>
            new Package(res.name, res.description, res.minValue, res.maxValue)
        )
      );
  }
  build({ name, description, min, max }) {
    return new Package(name, description, min, max);
  }
  set package(data: Package) {
    this._package = data;
  }
  get package(): Package {
    return this._package;
  }
}
