import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EnrollmentComponent } from "./enrollment.component";
import { NewEnrollmentComponent } from "./new-enrollment/new-enrollment.component";
import { SharedModule } from "../shared.module";
import { DriverEnrollmentComponent } from "./driver-enrollment/driver-enrollment.component";
import { CabEnrollmentComponent } from "./cab-enrollment/cab-enrollment.component";

const routes: Routes = [
  { path: "", component: EnrollmentComponent },
  { path: "new", component: NewEnrollmentComponent },
  { path: "driver", component: DriverEnrollmentComponent },
  { path: "cab", component: CabEnrollmentComponent }
];

@NgModule({
  declarations: [
    EnrollmentComponent,
    NewEnrollmentComponent,
    DriverEnrollmentComponent,
    CabEnrollmentComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class EnrollmentModule {}
