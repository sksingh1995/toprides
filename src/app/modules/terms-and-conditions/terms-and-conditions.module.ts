import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TermsAndConditionsComponent } from "./terms-and-conditions.component";

const routes: Routes = [{ path: "", component: TermsAndConditionsComponent }];

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class TermsAndConditionsModule {}
