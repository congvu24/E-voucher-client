import { Observable } from "rxjs";
import { Package } from "../core/interface/package";

// Package to crete dealer Package
export interface IPackageService {
  deletePackage(): void;

  createPackage(p: Package): Observable<any>;
  getPackages(): Package[];
  getPackageByIds(): Package[];
  editPackageById(): Package;
  addPackage(p: Package): Package[];
}
