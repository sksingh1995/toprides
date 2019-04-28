import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ngx-custom-validators";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { SupportComponent } from "../components/support/support.component";

@NgModule({
  declarations: [SupportComponent],
  imports: [CommonModule, FormsModule],
  exports: [
    FormsModule,
    CustomFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule { }
