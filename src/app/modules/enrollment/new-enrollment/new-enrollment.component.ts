import { Component, ViewChild } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "toprides-new-enrollment",
  templateUrl: "./new-enrollment.component.html",
  styleUrls: ["./new-enrollment.component.css"]
})
export class NewEnrollmentComponent {
  private postURL = "http://52.66.235.25/toprides-server/sendmail.php";
  public submitting: Boolean = false;
  public enrolled: Boolean = false;
  public files: Array<any> = [];
  public avatar: string = "";
  public uploadedFiles: any = "";

  constructor(private http: HttpService) {}

  handleFileChange(e) {
    this.files = e.target.files;
    this.uploadedFiles = this.files.length;
  }

  handleAvatarUpload(e) {
    let reader = new FileReader();

    reader.onload = (data:any) => {
      this.avatar = data.target.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  onNewRegistration(form: NgForm) {
    if (this.avatar == "" || this.files.length == 0) {
      return false;
    }

    this.submitting = true;
    let formdata = new FormData();

    let values = form.value;

    Object.keys(values).forEach(el => {
      formdata.append(el, values[el]);
    });

    for (let i = 0; i < this.files.length; i++) {
      formdata.append("attachments[]", this.files[i], this.files[i].name);
    }

    this.http
      .post(this.postURL, formdata)
      .then(res => {
        this.submitting = false;
        form.resetForm();
        this.enrolled = true;
        this.avatar = "";
        this.files = [];
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
