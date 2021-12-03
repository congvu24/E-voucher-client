import { Injectable } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzNotificationService } from "ng-zorro-antd/notification";

@Injectable({
  providedIn: "root",
})
export class UiService {
  constructor(
    private _notification: NzNotificationService,
    private _message: NzMessageService
  ) {}
  showError(msg: string) {
    this._notification.error("Error", msg);
  }
  showSuccess(msg: string) {
    this._notification.success("Success", msg);
  }
  showMessage(type: MessageType, msg: string) {
    switch (type) {
      case MessageType.error:
        this._message.error(msg);
        break;
      case MessageType.success:
        this._message.success(msg);
        break;
    }
  }
}

export enum MessageType {
  error = "error",
  success = "success",
}
