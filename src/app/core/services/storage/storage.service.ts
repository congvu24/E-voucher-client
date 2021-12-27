import { Injectable } from "@angular/core";

import { TOKEN_EXPRISE_SEC } from "../../constant";
import { UntilService } from "../until/until.service";
@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(private _until: UntilService) {}

  setToken(
    name = "user",
    token: string,
    expiresIn = TOKEN_EXPRISE_SEC
  ): boolean {
    try {
      this._until.setCookie(name, token, expiresIn);
      return true;
    } catch (error) {
      return false;
    }
  }
  deleteToken(name = "user"): boolean {
    try {
      this._until.deleteCookie(name);
      return true;
    } catch (error) {
      return false;
    }
  }
  getToken(name = "user"): string {
    return this._until.getCookie(name);
  }
}
