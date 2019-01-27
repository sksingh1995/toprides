import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RiderDashboardComponent } from "./dashboard/rider-dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard" },
  { path: "dashboard", component: RiderDashboardComponent }
];

@NgModule({
  declarations: [RiderDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class RiderModule {}
