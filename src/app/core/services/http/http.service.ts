/* eslint-disable no-underscore-dangle */
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorService } from "../error/error.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { APP_CONFIG } from "../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient, private _error: ErrorService) {}

  get(endpoint: string, customHeader?: any) {
    return this._http
      .get(`${APP_CONFIG.apiUrl}${endpoint}}`, ...customHeader)
      .pipe(catchError((err) => this.handleError(err, this)));
  }
  post(endpoint: string, data: any, customHeader?: any) {
    return this._http
      .post(`${APP_CONFIG.apiUrl}${endpoint}}`, data, ...customHeader)
      .pipe(catchError((err) => this.handleError(err, this)));
  }
  patch(endpoint: string, data: any, customHeader?: any) {
    return this._http
      .patch(`${APP_CONFIG.apiUrl}${endpoint}}`, { ...data }, ...customHeader)
      .pipe(catchError((err) => this.handleError(err, this)));
  }
  delete(endpoint: string, customHeader?: any) {
    return this._http
      .delete(`${APP_CONFIG.apiUrl}${endpoint}}`, ...customHeader)
      .pipe(catchError((err) => this.handleError(err, this)));
  }

  private async handleError(error: HttpErrorResponse, self) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
      this._error.handleError(error.status, error.message);
    }
    // Return an observable with a user-facing error message.
    this._error.handleError(error.status, error.message);
    return throwError("Something bad happened; please try again later.");
  }
}
