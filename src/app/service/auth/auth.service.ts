import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../../core/services";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private _http: HttpService) {}
  login(email: string, password: string): Observable<any> {
    return this._http.patch("/login", { email, password });
  }
}
