import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "topides-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.css"]
})
export class DriverComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`Cab Drive Job |  Cab Driver For Agra | Taxi Driver Job`);

    this.meta.addTag({
      name: "description",
      content: `Top ride Offer cab driver job in agra , who are expert in driving. Part time cab driver, taxi driver, taxi driver job, cab driver job in agra, cab driver for top ride, expert cab driver, car driver job`
    });

    this.meta.addTag({
      name: "keywords",
      content: `cab drive job, cab driver for agra, part time cab driver job, taxi driver, taxi driver job, cab driver job in agra, cab driver for top ride, expert cab driver, car driver job, cab driver, driver job in agra, best cab driver`
    });

  }
}



