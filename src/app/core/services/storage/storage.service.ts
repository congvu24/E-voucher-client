import { Injectable } from "@angular/core";
import * as dayjs from "dayjs";

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
    console.log(name, token);
    try {
      const object = {
        token,
        expiresIn: dayjs().add(expiresIn, "second").toDate(),
      };
      localStorage.setItem(name, JSON.stringify(object));
      return true;
    } catch (error) {
      return false;
    }
  }
  deleteToken(name = "user"): boolean {
    try {
      localStorage.removeItem(name);
      return true;
    } catch (error) {
      return false;
    }
  }
  getToken(name = "user"): string {
    const storage: { token: string; expiresIn: any } = JSON.parse(
      localStorage.getItem(name)
    );
    console.log(storage);

    const currentTime = new Date();

    if (currentTime > storage?.expiresIn || !storage) {
      this.deleteToken(name);
      return undefined;
    }

    return storage.token;
  }
}
