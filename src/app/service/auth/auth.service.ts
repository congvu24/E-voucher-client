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
  private _isLogin = false;

  private _name: string;
  private _roleAs: string;

  constructor(private _storage: StorageService, private http: HttpClient) {}
  logout() {
    this._isLogin = false;
    this._roleAs = "";
    this._storage.deleteToken("STATE");
    this._storage.deleteToken("ROLE");
    this._storage.deleteToken("AUTH");
    this._storage.deleteToken("USERNAME");
    return of({ success: !this._isLogin, role: "" });
    // window.location.href = "/login";
  }
  login(email: string, password: string) {
    return this.http.post<LoginResponse>(LOGIN_ENDPOINT, { email, password });
  }

  saveCredential(user, token): Observable<{ success: boolean; role: string }> {
    console.log("saving credential");

    this._isLogin = true;
    this._roleAs = user.role;
    this._name = user.name;
    this._storage.setToken("STATE", "true");
    this._storage.setToken("USERNAME", this._name);
    this._storage.setToken("ROLE", this._roleAs);
    this._storage.setToken("AUTH", token.accessToken, token.expiresIn);
    return of({ success: this._isLogin, role: this._roleAs });
  }

  isLoggedIn(): boolean {
    const loggedIn = this._storage.getToken("STATE");
    this._isLogin = loggedIn === "true";

    return this._isLogin;
  }

  getRole(): string {
    this._roleAs = this._storage.getToken("ROLE");
    return this._roleAs;
  }
  get name(): string {
    this._name = this._storage.getToken("USERNAME");
    return this._name;
  }
}

type LoginResponse = {
  role: UserRole;
  token: { expiresIn: number; accessToken: string };
};
