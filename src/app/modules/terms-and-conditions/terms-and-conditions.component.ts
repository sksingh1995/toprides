import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-terms-and-conditions",
  templateUrl: "./terms-and-conditions.component.html",
  styleUrls: ["./terms-and-conditions.component.css"]
})
export class TermsAndConditionsComponent  {
  constructor(private title: Title) {
  	this.title.setTitle(`Terms and Conditions`);
  }
}
