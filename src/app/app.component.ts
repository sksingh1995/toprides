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
  public shouldShowFooter: boolean = true;

  constructor(
    private http: HttpService,
    private dialog: MatDialog,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initTawk();
    }
  }

  onRouteChange(event) {
    if (this.isBrowser) {
      this.shouldRenderFooter();
      setTimeout(() => {
        window.scroll(0, 0);
      }, 100);
    }

    this.isHomePage = this.location.path() == "";
  }

  initTawk() {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/5c287be87a79fc1bddf2adc8/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }

  /**
* decides weather to add black background to header or not
* @returns void
*/
  shouldRenderFooter() {
    this.shouldShowFooter = this.location.path().indexOf('dashboard') === -1;
  }
}
