import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactUsComponent } from "./contactus.component";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: ContactUsComponent }];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ContactUsModule {}
