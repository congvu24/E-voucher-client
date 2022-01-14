/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
import { UiService } from "..";

export enum ClientError {
  HTTP_401_UNAUTH = 401,
  HTTP_403_FORBIDDEN_RESOURCE = 403,
  HTTP_404_NOT_FOUND = 404,
  HTTP_409_VOUCHER_CANT_USE = 409,
  HTTP_400_BAD_REQUEST = 400,
  HTTP_429_TO_MANY_REQUEST = 429,
  HTTP_500_INTERNAL_SERVER_ERROR = 500,
  HTTP_0_TIME_OUT = 0,
}
@Injectable({
  providedIn: "root",
})
export class ErrorService {
  constructor(private _ui: UiService) {}
  handleError(errorCode: number, msg: string) {
    switch (errorCode) {
      case ClientError.HTTP_0_TIME_OUT:
        this._ui.showError("Request time out, try again");
        break;
      case ClientError.HTTP_401_UNAUTH:
        this._ui.showError("Wrong email or password");
        break;
      case ClientError.HTTP_403_FORBIDDEN_RESOURCE:
        this._ui.showError("Couldn't access this resource, try login again");
        break;
      case ClientError.HTTP_429_TO_MANY_REQUEST:
        this._ui.showError("To many request, please try again after 5 second");
        break;
      case ClientError.HTTP_400_BAD_REQUEST:
        this._ui.showError("Bad input!");
        break;
      case ClientError.HTTP_404_NOT_FOUND:
        this._ui.showError("Resouce no longer exsist");
        break;
      case ClientError.HTTP_409_VOUCHER_CANT_USE:
        this._ui.showError("Your voucher can't claim this package");
        break;
      case ClientError.HTTP_500_INTERNAL_SERVER_ERROR:
        this._ui.showError("Server down, contact administrator");
        break;

      default:
        this._ui.showError(
          "Unhandeled error, code " + errorCode + ", message :" + msg
        );
        break;
    }
  }
}
