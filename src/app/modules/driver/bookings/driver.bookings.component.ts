import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../../../services/dom.service";
import { LOGGED_IN_USER } from "../../../config/const";
import { HttpService } from "../../../services/http.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "driver-bookings",
  templateUrl: "./driver.bookings.component.html",
  styleUrls: ["./driver.bookings.component.css"]
})
export class DriverBookingsComponent implements OnInit {
  public user: any;
  public bookings: Array<any> = [];
  public bookingStatus: object = {
    1: "initiated",
    2: "success",
    3: "cancel"
  };
  public loading: Boolean = false;

  constructor(private ls: LocalStorageService, private http: HttpService, private title: Title) { }

  ngOnInit() {
    this.user = this.ls.getItem(LOGGED_IN_USER);
    this.title.setTitle(this.user.type.toUpperCase() + ' | Dashboard');
    this.getBookings();
  }

  getBookings() {
    this.loading = true;

    this.http
      .post("my_booking", { user_id: this.user.uid })
      .then((res: any) => {
        this.bookings = res.data;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
      });
  }
}
