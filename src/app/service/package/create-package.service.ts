import {
  HttpClient,
  HttpHeaders,
  JsonpInterceptor,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Package } from "../../core/interface/package";
import { HttpService, StorageService } from "../../core/services";
import { PACKAGE_ENDPOINT } from "../../shared/router";
import { PackageService } from "./package.service";

@Injectable()
export class CreatePackageService {
  private _package: Package;
  private _thumbnail: any;
  constructor(private _http: HttpClient) {}

  create(): Observable<Package> {
    const f = new FormData();
    f.append("thumbnail", this._thumbnail);
    f.append("isShow", "true");
    Object.keys(this.package).forEach((key) => {
      f.append(key, this.package[key]);
    });

    return this._http
      .post(PACKAGE_ENDPOINT, f)
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
  get thumbnail(): any {
    return this._thumbnail;
  }
  set thumbnail(tn: any) {
    this._thumbnail = tn;
  }
}
