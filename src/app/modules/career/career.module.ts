import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CareerComponent } from "./career.component";

const routes: Routes = [{ path: "", component: CareerComponent }];

@NgModule({
  declarations: [CareerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class CareerModule {}
