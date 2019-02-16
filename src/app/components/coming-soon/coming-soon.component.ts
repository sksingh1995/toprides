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
  ) {}

  ngOnInit() {
    this.meta.addTag({
      name: "description",
      content: `Book a car from anywhere in 3 simple clicks`
    });

    this.title.setTitle(`Coming Soon`);
  }
}
