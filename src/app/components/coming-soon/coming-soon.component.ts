import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from "@angular/platform-browser";
import { MetaService } from "../../services/meta.service";

@Component({
  selector: "app-coming-soon",
  templateUrl: "./coming-soon.component.html",
  styleUrls: ["./coming-soon.component.css"]
})
export class ComingSoonComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`Cab Travel Agency |Tour And Travel Agency Nearby You`);

    this.meta.addTag({
      name: "description",
      content: `Find comfortable travel by top ride travel agency in agra, cab travel agency, travel agency nearby you, tour and travel agency, online travel agency, online cab travel agency, cab tour and travel`
    });

    this.meta.addTag({
      name: "keywords",
      content: `cab travel agency, tour and travel agency nearby you, travel agency in agra, tour and travel agency, online travel agency, online cab travel agency, cab tour and travel agency , online booking travel agency, travel agency near me`
    });

  }
}
