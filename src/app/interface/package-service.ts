import { Observable } from "rxjs";
import { Package } from "../core/interface/package";
import { Meta } from "./api";

export abstract class IPackageService {
  abstract deletePackage(id: UUID): Observable<boolean>;
  abstract getPackages(
    params: any
  ): Observable<{ meta: Meta; data: Package[] }>;
  abstract updatePackage(id: UUID, updates: any): Observable<any>;
}
