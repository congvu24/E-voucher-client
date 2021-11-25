import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard
  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad
{
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url;
    return this.checkUserLogin(route, url);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canActivate(childRoute, state);
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this._auth.isLoggedIn()) {
      const userRole = this._auth.getRole();
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this._router.navigate(["/login"]); // default path
        console.log("auth route failed");
        return false;
      }
      console.log("auth route success");
      return true;
    }

    this._router.navigate(["/login"]);
    return false;
  }
}
