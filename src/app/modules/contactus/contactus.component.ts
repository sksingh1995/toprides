import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { HttpService } from "../../services/http.service";
import { GOOGLE_CAPTCHA_SITE_KEY } from "../../config/const";
import { ReCaptcha2Component } from "ngx-captcha";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"]
})
export class ContactUsComponent {
  @ViewChild("captcha") captcha: ReCaptcha2Component;
  captchaSolved: boolean = false;
  submitting: boolean = false;
  submitted: boolean = false;
  siteKey: string = GOOGLE_CAPTCHA_SITE_KEY;

  constructor(private http: HttpService, private title: Title) {
    this.title.setTitle(`Contact Us`);
  }

  handleCaptcha(e) {
    this.captchaSolved = true;
  }

  onSubmit(form: NgForm) {
    this.submitting = true;
    let formdata = new FormData();

    let values = form.value;

    Object.keys(values).forEach(el => {
      formdata.append(el, values[el]);
    });

    this.http
      .post("contact.php", formdata)
      .then(res => {
        this.submitting = false;
        this.submitted = true;
        this.captcha.resetCaptcha();
        this.captchaSolved = false;
        form.resetForm();
        setTimeout(() => {
          this.submitted = false;
        }, 3000);
      })
      .catch(error => {
        this.submitting = false;
      });
  }
}
