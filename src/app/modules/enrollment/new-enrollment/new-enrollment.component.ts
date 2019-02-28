import { Component, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { HttpService } from "../../../services/http.service";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "toprides-new-enrollment",
  templateUrl: "./new-enrollment.component.html",
  styleUrls: ["./new-enrollment.component.css"]
})
export class NewEnrollmentComponent {
  public submitting: Boolean = false;
  public enrolled: Boolean = false;
  public files: Array<any> = [];
  public driverDocs: Array<any> = [];
  public avatar: string = "";

  constructor(private http: HttpService,private title: Title) {
  this.title.setTitle(`New Enrollment`);
  }

  handleFileChange(e, type = "car_docs") {
    if (type == "car_docs") {
      this.files = e.target.files;
    } else {
      this.driverDocs = e.target.files;
    }
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

    for (let i = 0; i < this.driverDocs.length; i++) {
      formdata.append(
        "attachments[]",
        this.driverDocs[i],
        this.driverDocs[i].name
      );
    }

    this.http
      .post("sendmail.php", formdata)
      .then(res => {
        this.submitting = false;
        form.resetForm();
        this.enrolled = true;
        this.avatar = "";
        this.files = [];
        this.driverDocs = [];
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
