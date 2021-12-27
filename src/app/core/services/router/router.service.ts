import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RouterService {
  constructor(private _router: Router, private _activeRoute: ActivatedRoute) {}

  goto(url: string = "") {
    const destination = "/" + url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this._router.onSameUrlNavigation = "reload";
    this._router.navigate([destination]);
  }

  reload() {
    this.goto(this._router.url);
  }

  getParams(paramNames: string[]): Map<string, any> {
    const result: Map<string, any> = new Map();
    let rawParams;
    this._activeRoute.queryParams.subscribe((p) => (rawParams = p));
    paramNames.forEach((n) => result.set(n, rawParams[n]));
    return result;
  }
}
