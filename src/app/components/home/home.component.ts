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
    this.title.setTitle(`Taxi Service in Agra | Cab in Agra at Topride cabs`);

    this.meta.addTag({
      name: "description",
      content: `Topride cabs offer cab service in agra, taxi service in agra. You can book full day cabs in Agra. get taxi service nearby your location for best fares`
    });

    this.meta.addTag({
      name: "keywords",
      content: `agra taxi, cabs in agra, taxi in agra,taxi service in agra, agra to fatehpur sikri taxi fare, car rental in agra, topride cabs in agra, cab service in agra, agra taxi, topride cab booking, agra taxi hire, taxi booking in agra, online cab booking`
    });

  }
}
