import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "../../services/http.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { LoginOtpComponent } from "../login-otp/login-otp.component";

@Component({
  selector: "toprides-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  public loading: Boolean = false;

  constructor(
    private http: HttpService,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>
  ) {}

  onLoginSubmit(form: NgForm) {
    this.loading = true;
    this.http
      .post("login", {
        country_code: "+91",
        phone: form.value.phone,
        user_type: "1"
      })
      .then((res: any) => {
        this.dialogRef.close();
        if (res.errorCode == 0) {
          this.dialog.open(LoginOtpComponent, {
            data: {
              phone: form.value.phone,
              userId: res.data[0].user_id
            }
          });
        }
      })
      .catch(err => {
        this.dialogRef.close();
      });
  }
}
