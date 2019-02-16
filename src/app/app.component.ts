import { Component, APP_ID, Inject, PLATFORM_ID } from "@angular/core";
import { HttpService } from "./services/http.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginOtpComponent } from "./components/login-otp/login-otp.component";
import { isPlatformBrowser, Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private isBrowser: Boolean;

  public isHomePage: boolean = false;

  constructor(
    private http: HttpService,
    private dialog: MatDialog,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onRouteChange(event) {
    if (this.isBrowser) {
      setTimeout(() => {
        window.scroll(0, 0);
      }, 100);
    }

    this.isHomePage = this.location.path() == "";
  }
}
