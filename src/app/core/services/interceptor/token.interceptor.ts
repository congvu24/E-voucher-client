/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "..";


@Injectable({
    providedIn: "root"
  })
export class TokenInterceptor implements HttpInterceptor {
  constructor(public _storage: StorageService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        // Authorization: `Bearer ${this._storage.getToken()}`
        Authorization: `Bearer ${"dsa"}`
      }
    });
    return next.handle(request);
  }
}
