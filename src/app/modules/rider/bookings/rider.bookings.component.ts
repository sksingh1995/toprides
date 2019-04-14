import { Component, OnInit } from "@angular/core";
import { LocalStorageService } from "../../../services/dom.service";
import { LOGGED_IN_USER } from "../../../config/const";
import { HttpService } from "../../../services/http.service";

@Component({
  selector: "rider-bookings",
  templateUrl: "./rider.bookings.component.html",
  styleUrls: ["./rider.bookings.component.css"]
})
export class RiderBookingsComponent implements OnInit {
  public user: any;
  public bookings: Array<any> = [];
  public bookingStatus: object = {
    1: "initiated",
    2: "success",
    3: "cancel"
  };
  public loading: Boolean = false;

  constructor(private ls: LocalStorageService, private http: HttpService) {}

  ngOnInit() {
    this.user = this.ls.getItem(LOGGED_IN_USER);
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
