import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { stringify } from "querystring";
import { Observable, of } from "rxjs";
import { UserRole } from "../../core/constant";
import { HttpService, StorageService } from "../../core/services";
import { IAuthService } from "../../interface/auth-service";
import { LOGIN_ENDPOINT } from "../../shared/router";

@Injectable({
  providedIn: "root",
})
export class AuthService implements IAuthService {
  isLogin = false;

  roleAs: string;

  constructor(
    private _http: HttpService,
    private _storage: StorageService,
    private http: HttpClient
  ) {}
  logout() {
    this.isLogin = false;
    this.roleAs = "";
    this._storage.setToken("STATE", "false");
    this._storage.setToken("ROLE", "");
    return of({ success: !this.isLogin, role: "" });
    // window.location.href = "/login";
  }
  login(email: string, password: string) {
    return this.http.post<LoginResponse>(LOGIN_ENDPOINT, { email, password });
  }

  saveCredential(user, token): Observable<{ success: boolean; role: string }> {
    this.isLogin = true;
    this.roleAs = user.role;
    this._storage.setToken("STATE", "true");
    this._storage.setToken("ROLE", this.roleAs);
    this._storage.setToken("auth", token.accessToken, token.expiresIn);
    return of({ success: this.isLogin, role: this.roleAs });
  }

  isLoggedIn() {
    const loggedIn = this._storage.getToken("STATE");
    this.isLogin = JSON.parse(loggedIn);
    return this.isLogin;
  }

  getRole() {
    this.roleAs = this._storage.getToken("ROLE");
    return this.roleAs;
  }
}

type LoginResponse = {
  role: UserRole;
  token: { expiresIn: number; accessToken: string };
};
