/* eslint-disable no-underscore-dangle */
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorService } from "../error/error.service";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { APP_CONFIG } from "../../../../environments/environment";
import { cleanObject } from "../../../until";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient, private _error: ErrorService) {}

  get(endpoint: string, data?: any): Observable<any> {
    console.log(cleanObject(data));
    return this._http
      .get(`${APP_CONFIG.apiUrl}${endpoint}`, { params: cleanObject(data) })
      .pipe(catchError((err) => this.handleError(err, this)));
  }
  post<T>(endpoint: string, data: any, customHeader?: any) {
    return this._http
      .post<T>(
        `${APP_CONFIG.apiUrl}${endpoint}}`,
        cleanObject(data),
        customHeader
      )
      .pipe(catchError((err) => this.handleError(err, this)));
  }
  put(endpoint: string, data: any, customHeader?: any) {
    return this._http
      .put(`${APP_CONFIG.apiUrl}${endpoint}}`, cleanObject(data), customHeader)
      .pipe(catchError((err) => this.handleError(err, this)));
  }

  patch<T>(endpoint: string, data: any, customHeader?: any) {
    return this._http
      .patch<T>(
        `${APP_CONFIG.apiUrl}${endpoint}`,
        cleanObject(data),
        customHeader
      )
      .pipe(catchError((err) => this.handleError(err, this)));
  }
  delete(endpoint: string, data?: any) {
    return this._http
      .delete(`${APP_CONFIG.apiUrl}${endpoint}`, cleanObject(data))
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
