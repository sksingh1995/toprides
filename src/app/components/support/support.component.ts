import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "./../../services/http.service";
import { AuthService } from "./../../services/auth.service";
import { USER_TYPES } from "./../../config/const";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.css"]
})
export class SupportComponent {

  public user: any;
  public submitting: boolean = false;
  public submitted: boolean = false;

  constructor(private http: HttpService, private authService: AuthService, private title: Title) {
    this.user = this.authService.getLoggedInUser();
    this.title.setTitle(this.user.type.toUpperCase() + ' | Support');
  }

  onSupport(form: NgForm) {
    this.submitting = true;

    this.http.post('message_support', Object.assign(form.value, {
      user_type: USER_TYPES[this.user.type].type,
      user_id: this.user.uid
    })).then((res: any) => {
      this.submitting = false;

      if (res.errorCode == 0) {
        form.resetForm();
        this.submitted = true;

        setTimeout(() => {
          this.submitted = false;
        }, 3000);
      }

    }).catch(error => {
      this.submitting = false;
    });
  }
}
