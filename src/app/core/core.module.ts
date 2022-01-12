import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import {
  ErrorService,
  HttpService,
  StorageService,
  UiService,
} from "./services";
import { TokenInterceptor } from "./services/interceptor/token.interceptor";
import { UntilService } from "./services/until/until.service";

/** config ng-zorro-antd i18n **/
import { NZ_I18N, en_US } from "ng-zorro-antd/i18n";
import { ErrorInterceptor } from "./services/interceptor/error.interceptor";
import { APP_CONFIG } from "../../environments/environment";
import { NetworkInterceptor } from "./services/interceptor/network.interceptor";
@NgModule({
  providers: [
    ErrorService,
    HttpService,
    StorageService,
    UiService,
    UntilService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true },
    { provide: NZ_I18N, useValue: en_US },
    { provide: "BASE_API_URL", useValue: APP_CONFIG.apiUrl },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule has already been loaded. You should only import Core modules in the AppModule only."
      );
    }
  }
}
