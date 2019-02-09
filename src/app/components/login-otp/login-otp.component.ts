import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { LocalStorageService } from "../../services/dom.service";
import { LOGGED_IN_USER } from "../../config/const";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "toprides-login-otp",
  templateUrl: "./login-otp.component.html"
})
export class LoginOtpComponent {
  public phone: string;
  public shortPhone;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginOtpComponent>,
    private ls: LocalStorageService,
    private router: Router,
    private as: AuthService
  ) {
    this.phone = data.phone;
    this.shortPhone = this.phone.slice(6, 10);
  }

  validateLoginOtp(form: NgForm) {
    this.ls.setItem(LOGGED_IN_USER, {
      username: "Shobhit Singh",
      id: "23",
      phone: this.phone
    });

    this.dialogRef.close();

    this.router.navigate(["/rider"]).then(() => {
      this.as.checkLogin();
    });
  }

  resendOTP() {
    console.log("OK");
  }
}
