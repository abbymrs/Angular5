import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile.component";
import { AuthGuardService } from "../core";

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
