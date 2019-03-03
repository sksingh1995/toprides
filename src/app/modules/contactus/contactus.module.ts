import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ContactUsComponent } from "./contactus.component";
import { NgxCaptchaModule } from "ngx-captcha";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: ContactUsComponent }];

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NgxCaptchaModule
  ]
})
export class ContactUsModule {}
