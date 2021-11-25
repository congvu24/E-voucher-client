import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UntilService {
  constructor() {}
  setCookie = (name, value, days = 7, path = "/") => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie =
      name + "=" + encodeURIComponent(value) + "; expires=" + expires;
  };

  getCookie = (name) =>
    document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");

  deleteCookie = (name, path = "/") => {
    this.setCookie(name, "", -1, path);
  };
}
