import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CustomFormsModule } from "ngx-custom-validators";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    FormsModule,
    CustomFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [MatDatepickerModule]
})
export class SharedModule {}
