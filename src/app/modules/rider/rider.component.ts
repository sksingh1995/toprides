import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "topides-rider",
  templateUrl: "./rider.component.html",
  styleUrls: ["./rider.component.css"]
})
export class RiderComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle(`Online Cab Ride | Cab Booking | Sharing Cab Booking Online`);

    this.meta.addTag({
      name: "description",
      content: `Top ride offer best cab service such as online cab ride, cab booking, sharing cab boking online, cab booking nearby you , online sharing cab ride, cab ride online,  hire taxi, booking taxi at best price`
    });

    this.meta.addTag({
      name: "keywords",
      content: `online cab ride, cab booking, sharing cab booking online, cab booking nearby you,  online sharing cab ride, cab ride online,  hire taxi, booking taxi at best price, online cab ride in agra, cab booking online at lowest price`
    });

  }
}
