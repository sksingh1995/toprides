import { Component, OnInit, Inject, PLATFORM_ID, APP_ID } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from "@angular/platform-browser";
import { MetaService } from "../../services/meta.service";
import { isPlatformBrowser } from "@angular/common";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public base_url = "http://localhost:8000/";
  public users: Array<any> = [];
  public carouselData: Array<any> = [];
  public sliderOptions: any;
  public isBrowser: boolean;
  constructor(
    private http: HttpClient,
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {

    this.setMetaTags();

    for (let i = 0; i < 10; i++) {
      this.carouselData.push(i);
    }

    if (this.isBrowser) {
      this.initSlider();
    }
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

  setMetaTags() {
    this.title.setTitle(`Online Cab Booking | Book Cab at Lowest Price Near by You`);

    this.meta.addTag({
      name: "description",
      content: `Top ride provide service online cab booking at lowest price at nearby you. Online taxi book, book cab at best price, online cab booking in agra, cab booking in agra, taxi booking online`
    });

    this.meta.addTag({
      name: "keywords",
      content: `online Cab booking, Book cab at lowest price nearby you, online taxi book , online cab booking in agra, cab booking in agar, taxi booking online, cheap taxi booking, hire taxi nearby you, book safe cab, online book cab`
    });

  }
}
