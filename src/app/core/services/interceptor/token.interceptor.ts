/* eslint-disable @typescript-eslint/naming-convention */
import { Inject, Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "..";
import { cleanObject } from "../../../until";

/**
 * this class inject base api url provided by core module
 * this also inject authentication token recived from server
 */
@Injectable({
  providedIn: "root",
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public _storage: StorageService,
    @Inject("BASE_API_URL") private baseUrl: string
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //clean params
    let cleanedParams = new HttpParams();
    request.params.keys().forEach((x) => {
      const paramvalue = request.params.get(x);
      if (paramvalue) {
        cleanedParams = cleanedParams.append(x, paramvalue);
      }
    });
    //clean body
    const cleanedBody = cleanObject(request.body);
    request = request.clone({
      setHeaders: {
        // Authorization: `Bearer ${this._storage.getToken()}`
        Authorization: `Bearer ${this._storage.getToken("auth")}`,
      },
      url: `${this.baseUrl}${request.url}`,
      params: cleanedParams,
      body: cleanedBody,
    });
    return next.handle(request);
  }
}
