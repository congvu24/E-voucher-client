import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UntilService {
  constructor() {}
  setCookie(name, value, time, path = "/") {
    // const expires = new Date(Date.now() + days * 864e5).toUTCString();
    const expires = time;
    document.cookie =
      name + "=" + encodeURIComponent(value) + "; expires=" + expires;
  }

  getCookie(name) {
    const value = document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
    return value;
  }

  deleteCookie(name, path = "/") {
    this.setCookie(name, "", -1, path);
  }
}
