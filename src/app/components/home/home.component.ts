import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from "@angular/platform-browser";
import { MetaService } from "../../services/meta.service";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public base_url = "http://localhost:8000/";
  public users: Array<any> = [];
  carouselData = [];
  public sliderOptions: any;
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

    for (let i = 0; i < 10; i++) {
      this.carouselData.push(i);
    }

    this.initSlider();
  }

  initSlider() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    });
  }
}
