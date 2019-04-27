import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "toprides-enrollment",
  templateUrl: "./enrollment.component.html",
  styleUrls: ["./enrollment.component.css"]
})
export class EnrollmentComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`Online Cab Enrolment | Online Enrolment for Top Ride Cab`);

    this.meta.addTag({
      name: "description",
      content: `Everyone can do easily enrolment for cab, online cab enrolment, enrolment for cab, how to  enrolment for cab, cab enrolment, online cab booking enrolment, online enrolment for top ride cab, online taxi enrolment`
    });

    this.meta.addTag({
      name: "keywords",
      content: `online cab enrolment, enrolment for cab, online enrolment for top ride cab ,how to enrolment for cab, cab enrolment, online cab booking enrolment, online enrolment for top ride cab, online taxi enrolment, taxi enrolment, sharing cab enrolment, online sharing cab enrolment`
    });

  }
}
