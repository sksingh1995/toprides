/// <reference types="@types/googlemaps" />

import { Component, OnInit, NgZone } from "@angular/core";
@Component({
  selector: "app-find-car",
  templateUrl: "./find-car.component.html",
  styleUrls: ["./find-car.component.css"]
})
export class FindCarComponent implements OnInit {
  markers: Array<any> = [];

  lat: number = 28.5272178;
  lng: number = 77.0685544;
  zoom: number = 13;
  icon: string = "assets/images/marker.png";
  location = "";
  animation: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {}

  onDropLocationSelect(place: google.maps.places.PlaceResult) {
    console.log(place);
  }

  setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.getLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
      });
    }
  }

  mapClicked(e) {
    this.markers.push(e.coords);
    // this.getLocation(e.coords);
  }

  getLocation(coords) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: coords }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          this.ngZone.run(() => {
            this.lat = coords.lat;
            this.lng = coords.lng;
            // changes will be detected because we are in a zone.
            this.location = results[0].formatted_address;
          });
        }
      }
    });
  }

  mapReady() {
    // this.animation = "BOUNCE";
    this.animation = "DROP";
  }
}
