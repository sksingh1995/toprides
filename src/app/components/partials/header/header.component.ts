import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../../login/login.component";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "toprides-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: Boolean = false;
  public user: any;
  constructor(private dialog: MatDialog, private as: AuthService) {}

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
  }

  openLoginPopup() {
    this.dialog.open(LoginComponent);
  }

  logout() {
    this.as.logoutUser();
  }
}
