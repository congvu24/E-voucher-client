import { Injectable } from "@angular/core";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Injectable({
  providedIn: "root",
})
export class UiService {
  constructor(private _notification: NzNotificationService) {}
  showError(msg: string) {
    this._notification.error("Error", msg);
    alert(msg);
  }
}
