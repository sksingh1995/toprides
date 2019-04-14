import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DriverComponent } from "./driver.component";
import { DriverDashboardComponent } from "./dashboard/driver-dashboard.component";
import { DriverBookingsComponent } from "./bookings/driver.bookings.component";
import { AuthGuard } from "../../services/auth-guard.service";
const routes: Routes = [
  {
    path: "",
    component: DriverComponent
  },
  {
    path: "dashboard",
    component: DriverDashboardComponent,
    canActivate: [AuthGuard],
    data: { user_type: "driver" },
    children: [
      { path: "", component: DriverBookingsComponent, outlet: "dashboard" }
    ]
  }
];

@NgModule({
  declarations: [
    DriverComponent,
    DriverDashboardComponent,
    DriverBookingsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DriverModule {}
