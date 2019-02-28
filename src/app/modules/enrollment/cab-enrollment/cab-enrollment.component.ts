import { Component, ViewChild } from "@angular/core";
import { HttpService } from "../../../services/http.service";
import { NgForm, NgModel } from "@angular/forms";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "cab-enrollment",
  templateUrl: "./cab-enrollment.component.html",
  styleUrls: ["./cab-enrollment.component.css"]
})
export class CabEnrollmentComponent {
  public submitting: Boolean = false;
  public enrolled: Boolean = false;
  public files: Array<any> = [];
  public avatar: string = "";
  public uploadedFiles: any = "";

  constructor(private http: HttpService,private title: Title) {
  this.title.setTitle(`Enrollment For - Cab`);
  }

  handleFileChange(e) {
    this.files = e.target.files;
    this.uploadedFiles = this.files.length;
  }

  handleAvatarUpload(e) {
    let reader = new FileReader();

    reader.onload = (data: any) => {
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
      .post("cab.php", formdata)
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
