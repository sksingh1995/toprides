import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private as: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let user = this.as.getLoggedInUser();

    if (user) {
      return true;
    } else {
      this.router.navigate(["/"]).then(() => {
        this.as.openLoginPopup.next(true);
      });

      return false;
    }
  }
}
