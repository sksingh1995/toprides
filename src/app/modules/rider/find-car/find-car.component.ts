/// <reference types="@types/googlemaps" />

import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone
} from "@angular/core";
import { MapsAPILoader } from "@agm/core";

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

  @ViewChild("pickupLocation")
  public pickupLocation: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    //set current position
    // this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.pickupLocation.nativeElement,
        {
          types: ["establishment"],
          componentRestrictions: { country: "in" }
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
        });
      });
    });
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
