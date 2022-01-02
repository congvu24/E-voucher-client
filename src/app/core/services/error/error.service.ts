/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
import { UiService } from "..";

export enum ClientError {
  HTTP_403_FORBIDDEN_RESOURCE = 403,
  HTTP_404_NOT_FOUND = 404,
  HTTP_400_BAD_REQUEST = 400,
  HTTP_500_INTERNAL_SERVER_ERROR = 500,
}
@Injectable({
  providedIn: "root",
})
export class ErrorService {
  constructor(private _ui: UiService) {}
  handleError(errorCode: number, msg: string) {
    switch (errorCode) {
      case ClientError.HTTP_403_FORBIDDEN_RESOURCE:
        this._ui.showError("Cant access this resource, try login again");
        break;
      case ClientError.HTTP_400_BAD_REQUEST:
        this._ui.showError("Bad input!");
        break;
      case ClientError.HTTP_404_NOT_FOUND:
        this._ui.showError("Item not found");
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
