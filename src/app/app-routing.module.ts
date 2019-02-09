import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", loadChildren: "./modules/about/about.module#AboutModule" },
  {
    path: "career",
    loadChildren: "./modules/career/career.module#CareerModule"
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
  { path: "rider", loadChildren: "./modules/rider/rider.module#RiderModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
