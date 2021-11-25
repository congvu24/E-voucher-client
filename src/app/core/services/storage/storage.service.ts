import { Injectable } from "@angular/core";

import { TOKEN_EXPRISE_DAY } from "../../constant";
import { UntilService } from "../until/until.service";
@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor(private _until: UntilService) {}

  setToken(name = "user", token: string): boolean {
    try {
      this._until.setCookie(name, token, TOKEN_EXPRISE_DAY);
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
