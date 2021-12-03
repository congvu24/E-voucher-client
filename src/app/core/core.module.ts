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
@NgModule({
  providers: [
    ErrorService,
    HttpService,
    StorageService,
    UiService,
    UntilService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
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
