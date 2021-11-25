import { Observable } from "rxjs";
import { Package } from "../core/interface/package";

export abstract class IPackageService {
  abstract deletePackage(): void;
  abstract createPackage(p: Package): Observable<any>;
  abstract getPackages(): Package[];
  abstract getPackageByIds(): Package[];
  abstract editPackageById(): Package;
  abstract addPackage(p: Package): Package[];
}
