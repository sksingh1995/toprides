import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from "@angular/platform-browser";
import { MetaService } from "../../services/meta.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public base_url = "http://localhost:8000/";
  public users: Array<any> = [];
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

    this.title.setTitle(`Book a car`);
  }
}
