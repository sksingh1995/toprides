import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from "../../services/http.service";

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"]
})
export class ContactUsComponent {
  submitting: boolean = false;
  submitted: boolean = false;

  constructor(private http: HttpService) {}

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
