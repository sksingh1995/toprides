import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "topides-rider",
  templateUrl: "./rider.component.html",
  styleUrls: ["./rider.component.css"]
})
export class RiderComponent implements OnInit {
    constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(`Topride for Rider`);
  }
}
