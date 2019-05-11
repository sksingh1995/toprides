import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { CarouselModule } from "ngx-owl-carousel-o";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { HeaderComponent } from "./components/partials/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { FooterComponent } from "./components/partials/footer/footer.component";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginOtpComponent } from "./components/login-otp/login-otp.component";
import { HttpInterceptorService } from "./services/http-interceptor.service";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { SharedModule } from "./modules/shared.module";
import { NotFoundComponent } from "./components/404/not-found.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: "toprides" }),
    AppRoutingModule,
    CarouselModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
    TransferHttpCacheModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ComingSoonComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginOtpComponent,
    NotFoundComponent
  ],
  entryComponents: [LoginComponent, LoginOtpComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
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
