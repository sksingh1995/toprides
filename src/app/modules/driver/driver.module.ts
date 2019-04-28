import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DriverComponent } from "./driver.component";
import { DriverDashboardComponent } from "./dashboard/driver-dashboard.component";
import { DriverBookingsComponent } from "./bookings/driver.bookings.component";
import { DriverSettingsComponent } from "./settings/driver.settings.component";
import { AuthGuard } from "../../services/auth-guard.service";
import { SharedModule } from "../shared.module";
import { SupportComponent } from "./../../components/support/support.component";

const routes: Routes = [
  { path: "", component: DriverComponent },
  {
    path: "dashboard", component: DriverDashboardComponent, canActivate: [AuthGuard],
    data: { user_type: "driver" },
    children: [
      { path: "", component: DriverBookingsComponent, },
      { path: "support", component: SupportComponent, },
    ]
  }
];

@NgModule({
  declarations: [
    DriverComponent,
    DriverDashboardComponent,
    DriverBookingsComponent,
    DriverSettingsComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class DriverModule { }
