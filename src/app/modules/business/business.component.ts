import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

    constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(`Connect With Topride Business To Business`);
  }

}
