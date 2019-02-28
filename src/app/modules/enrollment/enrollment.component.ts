import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "toprides-enrollment",
  templateUrl: "./enrollment.component.html",
  styleUrls: ["./enrollment.component.css"]
})
export class EnrollmentComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(`Enrollment`);
  }
}
