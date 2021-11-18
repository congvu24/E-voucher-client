import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { UiRoutingModule } from "./ui/ui-routing.module";

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>
  new TranslateHttpLoader(http, "./assets/i18n/", ".json");

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UiRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
