/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { EMPTY, Observable } from "rxjs";
import { ErrorService } from "..";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public _error: ErrorService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          // Request timeout
          alert("Request timeout, try again");
        } else {
          console.error(
            `Backend returned code ${error.status}, body was: `,
            error.error
          );
        }
        //handle error
        this._error.handleError(error.status, error.message);
        return EMPTY;
      })
    );
  }
}
