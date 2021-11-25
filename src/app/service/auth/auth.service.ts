import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpService, StorageService } from "../../core/services";
import { IAuthService } from "../../interface/auth-service";

@Injectable({
  providedIn: "root",
})
export class AuthService implements IAuthService {
  isLogin = false;

  roleAs: string;

  constructor(private _http: HttpService, private _storage: StorageService) {}
  logout() {
    this.isLogin = false;
    this.roleAs = "";
    this._storage.setToken("STATE", "false");
    this._storage.setToken("ROLE", "");
    return of({ success: this.isLogin, role: "" });
    // window.location.href = "/login";
  }
  login(email: string, password: string): Observable<any> {
    // return this._http.patch("/login", { email, password });
    return of("SUPPLIER");
  }

  saveCredential(role: string) {
    this.isLogin = true;
    this.roleAs = role;
    this._storage.setToken("STATE", "true");
    this._storage.setToken("ROLE", this.roleAs);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  isLoggedIn() {
    const loggedIn = this._storage.getToken("STATE");
    // if (loggedIn === "true") this.isLogin = true;
    // else this.isLogin = false;
    this.isLogin = JSON.parse(loggedIn);
    return this.isLogin;
  }

  getRole() {
    this.roleAs = this._storage.getToken("ROLE");
    return this.roleAs;
  }
}
