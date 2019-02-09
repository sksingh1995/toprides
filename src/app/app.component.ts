import { Component, APP_ID, Inject, PLATFORM_ID } from "@angular/core";
import { HttpService } from "./services/http.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginOtpComponent } from "./components/login-otp/login-otp.component";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private isBrowser: Boolean;
  constructor(
    private http: HttpService,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    // this.dialog.open(LoginOtpComponent, {
    //   data: {
    //     phone: "9015470425"
    //   },
    //   disableClose: true
    // });

    // this.http.get("OK!").then(res => {
    //   console.log(res);
    // });
  }

  onRouteChange(event) {
    if (this.isBrowser) {
      setTimeout(() => {
        window.scroll(0, 0);
      }, 100);
    }
  }
}
