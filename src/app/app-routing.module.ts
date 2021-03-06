import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { NotFoundComponent } from "./components/404/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "coming-soon", component: ComingSoonComponent },
  { path: "about-cab-booking-company", loadChildren: "./modules/about/about.module#AboutModule" },
  {
    path: "business-with-travel-agency",
    loadChildren: "./modules/business/business.module#BusinessModule"
  },
  {
    path: "contactus",
    loadChildren: "./modules/contactus/contactus.module#ContactUsModule"
  },
  {
    path: "career-topride-cabs",
    loadChildren: "./modules/career/career.module#CareerModule"
  },
  {
    path: "online-cab-enrollment",
    loadChildren: "./modules/enrollment/enrollment.module#EnrollmentModule"
  },
  {
    path: "privacy-policy",
    loadChildren:
      "./modules/privacy-policy/privacy-policy.module#PrivacyPolicyModule"
  },
  {
    path: "terms-and-conditions",
    loadChildren:
      "./modules/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule"
  },
  { path: "rider", loadChildren: "./modules/rider/rider.module#RiderModule" },
  {
    path: "driver",
    loadChildren: "./modules/driver/driver.module#DriverModule"
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
