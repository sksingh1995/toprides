import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AgmCoreModule } from "@agm/core";
import { GOOGLE_API_KEY } from "../../config/const";
import { AuthGuard } from "../../services/auth-guard.service";
import { GooglePlaceAutocompleteDirective } from "../../directives/gpa.directive";
import { RiderComponent } from "./rider.component";
import { FindCarComponent } from "./find-car/find-car.component";
import { RiderBookingsComponent } from "./bookings/rider.bookings.component";
import { RiderSettingsComponent } from "./settings/rider.settings.component";
import { RiderDashboardComponent } from "./dashboard/rider-dashboard.component";
import { SharedModule } from "../shared.module";
import { SupportComponent } from "../../components/support/support.component";

const routes: Routes = [
  { path: "", component: RiderComponent },
  { path: "find-cars", component: FindCarComponent },
  {
    path: "dashboard", component: RiderDashboardComponent,
    canActivate: [AuthGuard], data: { user_type: "rider" },
    children: [
      { path: "", component: RiderBookingsComponent, pathMatch: "full" },
      { path: "settings", component: RiderSettingsComponent },
      { path: "support", component: SupportComponent },
    ]
  },
];

@NgModule({
  declarations: [
    RiderComponent,
    RiderDashboardComponent,
    FindCarComponent,
    RiderBookingsComponent,
    RiderSettingsComponent,
    GooglePlaceAutocompleteDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_API_KEY,
      libraries: ["places"]
    }),
    RouterModule.forChild(routes)
  ]
})
export class RiderModule { }
