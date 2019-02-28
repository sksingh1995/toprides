import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "topides-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.css"]
})
export class DriverComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(`Drive with Topride`);
  }
}



