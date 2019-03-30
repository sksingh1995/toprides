import { Injectable } from "@angular/core";
import { LocalStorageService } from "./dom.service";
import { Subject } from "rxjs";
import { LOGGED_IN_USER } from "../config/const";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isLoggedIn: Subject<{ loggedIn: boolean; user: any }> = new Subject();
  public openLoginPopup: Subject<Boolean> = new Subject();

  constructor(private ls: LocalStorageService, private router: Router) {
    setTimeout(() => {
      this.checkLogin();
    }, 10);
  }

  checkLogin() {
    let user = this.getLoggedInUser();
    this.isLoggedIn.next({ loggedIn: user != null, user });
  }

  getLoggedInUser() {
    return this.ls.getItem(LOGGED_IN_USER);
  }

  logoutUser() {
    this.ls.removeItem(LOGGED_IN_USER);
    this.checkLogin();
    this.router.navigate(["/"]);
  }
}
