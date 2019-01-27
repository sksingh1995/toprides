import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { HeaderComponent } from "./components/partials/header/header.component";
import { FooterComponent } from "./components/partials/footer/footer.component";
import { TransferHttpCacheModule } from "@nguniversal/common";

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: "toprides" }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule
  ],
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
