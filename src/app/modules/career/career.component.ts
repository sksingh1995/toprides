import { Component, OnInit } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  constructor(private title: Title, private meta: Meta) {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`Career with Top Ride Cabs | Enhance Your Career with Top Ride Cabs`);

    this.meta.addTag({
      name: "description",
      content: `Enhance your career with top ride cabs, grow career with top ride cabs, how to improve your career in top ride cabs, career with top ride cabs`
    });

    this.meta.addTag({
      name: "keywords",
      content: `career with top ride cabs, enhance your career with top ride cabs, grow career with top ride cabs, how to improve your career in top ride cabs`
    });

  }

}
