import {
  Directive,
  NgZone,
  OnInit,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";
import { MapsAPILoader } from "@agm/core";

@Directive({
  selector: "[gpa]"
})
export class GooglePlaceAutocompleteDirective implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private el: ElementRef
  ) {}

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.el.nativeElement,
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

          this.onSelect.emit(place);
          // place.geometry.location.lat();
          // place.geometry.location.lng();
        });
      });
    });
  }
}
