import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', loadChildren: 'app/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: true }
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }