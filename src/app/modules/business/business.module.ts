import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { BusinessComponent } from "./business.component";

const routes: Routes = [{ path: "", component: BusinessComponent }];

@NgModule({
  declarations: [BusinessComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BusinessModule {}
