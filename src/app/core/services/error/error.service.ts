/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from "@angular/core";
import { UiService } from "..";

export enum ClientError {
  HTTP_404_NOT_FOUND = 404,
  HTTP_400_BAD_REQUEST = 404,
}
export enum ClientSuccess {
  HTTP_200_OK = 200,
}



@Injectable({
  providedIn: "root"
})
export class ErrorService {

  constructor(private _ui: UiService) { }
  handleError(errorCode: number, msg: string) {
    switch (errorCode) {
      case ClientError.HTTP_400_BAD_REQUEST:
        this._ui.showError("Bad input!");
        break;
      case ClientError.HTTP_404_NOT_FOUND:
        this._ui.showError("Item not found");
        break;

      default:
          this._ui.showError("Something bad happened");
          break;
    }
  }
}
