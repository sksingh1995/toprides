import { Component } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "toprides-new-enrollment",
  templateUrl: "./new-enrollment.component.html",
  styleUrls: ["./new-enrollment.component.css"]
})
export class NewEnrollmentComponent {
  private postURL = "http://52.66.235.25/toprides-server/post.php";
  public submitting: Boolean = false;
  public enrolled: Boolean = false;

  constructor(private http: HttpService) {}

  onNewRegistration(form: NgForm) {
    this.submitting = true;
    let formdata = new FormData();

    let values = form.value;

    Object.keys(values).forEach(el => {
      formdata.append(el, values[el]);
    });

    this.http
      .post(this.postURL, formdata)
      .then(res => {
        this.submitting = false;
        form.resetForm();
        this.enrolled = true;

        setTimeout(() => {
          this.enrolled = false;
        }, 3000);
      })
      .catch(error => {
        this.submitting = false;
        console.log(error);
      });
  }
}
