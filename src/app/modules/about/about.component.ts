import { Component } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private title: Title, private meta: Meta) {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`About- Top Ride Online Cab Booking Company | Cab Travel Service`);

    this.meta.addTag({
      name: "description",
      content: `Top ride is online cabs booking company, It provide online cab service, cab service, tour and travel service, online cab service, best cab service, cab travel service in agra`
    });

    this.meta.addTag({
      name: "keywords",
      content: `top ride online cab booking company, cab travel service in agra , online cab service, cab service, tour and travel service, online cab service, best cab service`
    });

  }


}
