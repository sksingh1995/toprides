import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RiderDashboardComponent } from "./dashboard/rider-dashboard.component";
import { FindCarComponent } from "./find-car/find-car.component";
import { AgmCoreModule } from "@agm/core";
import { GOOGLE_API_KEY } from "../../config/const";
import { AuthGuard } from "../../services/auth-guard.service";
import { GooglePlaceAutocompleteDirective } from "../../directives/gpa.directive";
import { RiderComponent } from "./rider.component";

const routes: Routes = [
  { path: "", component: RiderComponent },
  {
    path: "dashboard",
    component: RiderDashboardComponent
    // canActivate: [AuthGuard]
  },
  { path: "find-cars", component: FindCarComponent }
];

@NgModule({
  declarations: [
    RiderComponent,
    RiderDashboardComponent,
    FindCarComponent,
    GooglePlaceAutocompleteDirective
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_API_KEY,
      libraries: ["places"]
    }),
    RouterModule.forChild(routes)
  ]
})
export class RiderModule {}
