import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { LocalStorageService } from "../../services/dom.service";
import { LOGGED_IN_USER } from "../../config/const";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { HttpService } from "../../services/http.service";

@Component({
  selector: "toprides-login-otp",
  templateUrl: "./login-otp.component.html"
})
export class LoginOtpComponent {
  public phone: string;
  public shortPhone;
  public resendingOTP: boolean = false;
  public resent: boolean = false;
  public verifying: boolean = false;
  public invalidOTP: boolean = false;
  private userTypes: object = {
    1: "rider",
    3: "driver"
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginOtpComponent>,
    private ls: LocalStorageService,
    private router: Router,
    private as: AuthService,
    private http: HttpService
  ) {
    this.phone = data.phone;
    this.shortPhone = this.phone.slice(6, 10);
  }

  verifyLoginOtp(form: NgForm) {
    this.verifying = true;
    this.http
      .post("otp_verify", {
        user_id: this.data.userId,
        otp: form.value.otp
      })
      .then((res: any) => {
        this.verifying = false;
        if (res.errorCode == 0) {
          this.loginUser(res.data[0]);
        } else {
          this.invalidOTP = true;
        }
      });
  }

  resendOTP() {
    this.resendingOTP = true;

    this.http
      .post("resend_otp", {
        user_id: this.data.userId
      })
      .then((res: any) => {
        this.resendingOTP = false;
        this.resent = true;

        setTimeout(() => {
          this.resent = false;
        }, 3000);
      });
  }

  loginUser(data) {
    this.ls.setItem(LOGGED_IN_USER, {
      uid: data.user_id,
      name: data.first_name + " " + data.last_name,
      email: data.email,
      type: this.userTypes[data.user_type],
      phone: data.phone
    });

    this.dialogRef.close();

    this.router
      .navigate([this.userTypes[data.user_type], "dashboard"])
      .then(() => {
        this.as.checkLogin();
      });
  }
}
