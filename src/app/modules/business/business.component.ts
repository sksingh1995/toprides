import { Component, OnInit } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`Business with Travel Agency | Transportation Business`);

    this.meta.addTag({
      name: "description",
      content: `How to improve your business with top ride cabs,  business with travel agency, transportation business, online transportation business, online book cab for employee, booking cab for your partner`
    });

    this.meta.addTag({
      name: "keywords",
      content: `business with travel agency, transportation business, online transportation business, online book cab for employee, booking cab for your partner, grow your transportation business, earn money with transportation business, how to earn money by top ride`
    });

  }

}
