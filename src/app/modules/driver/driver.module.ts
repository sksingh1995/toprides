import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DriverComponent } from "./driver.component";
const routes: Routes = [
  {
    path: "",
    component: DriverComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [DriverComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DriverModule {}
