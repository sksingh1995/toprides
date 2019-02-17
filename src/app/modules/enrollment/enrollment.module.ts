import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EnrollmentComponent } from "./enrollment.component";
import { NewEnrollmentComponent } from "./new-enrollment/new-enrollment.component";
import { SharedModule } from "../shared.module";

const routes: Routes = [
  { path: "", component: EnrollmentComponent },
  { path: "new", component: NewEnrollmentComponent }
];

@NgModule({
  declarations: [EnrollmentComponent, NewEnrollmentComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class EnrollmentModule {}
