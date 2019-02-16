import { Component, OnInit, Input, Inject, PLATFORM_ID } from "@angular/core";
import { LoginComponent } from "../../login/login.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../../../services/auth.service";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "toprides-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: Boolean = false;
  public isBrowser: Boolean = false;
  public pagescrolled: Boolean = false;
  @Input("isHomePage") isHomePage: Boolean;
  public user: any;

  constructor(
    private dialog: MatDialog,
    private as: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.as.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data.loggedIn;
      this.user = data.user;
    });

    this.as.openLoginPopup.subscribe(data => {
      if (data) {
        this.openLoginPopup();
      }
    });

    this.handleScroll();
  }

  openLoginPopup() {
    this.dialog.open(LoginComponent);
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
