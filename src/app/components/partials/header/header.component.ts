import { Component, OnInit, Input, Inject, PLATFORM_ID } from "@angular/core";
import { LoginComponent } from "../../login/login.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../../../services/auth.service";
import { isPlatformBrowser } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { LoginOtpComponent } from "../../login-otp/login-otp.component";

@Component({
  selector: "toprides-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: Boolean = false;
  public isBrowser: Boolean = false;
  public isLeft0: Boolean = false;
  public pagescrolled: Boolean = false;
  @Input("isHomePage") isHomePage: Boolean;
  public user: any;

  constructor(
    private dialog: MatDialog,
    private as: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLeft0 = false;
      }
    });

    this.as.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data.loggedIn;
      this.user = data.user;
    });

    this.as.openLoginPopup.subscribe(data => {
      if (data && this.isBrowser) {
        this.openLoginPopup();
      }
    });

    this.handleScroll();
  }

  openLoginPopup() {
    this.dialog.open(LoginComponent, {
      disableClose: true
    });
  }

  logout() {
    this.as.logoutUser();
  }

  handleScroll() {
    if (this.isBrowser) {
      window.onscroll = () => {
        this.pagescrolled = document.documentElement.scrollTop > 50;
      };
    }
  }
}
