import { Routes, RouterModule } from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeScreenComponent} from "./components/home-screen/home-screen.component";
import {ProfileScreenComponent} from "./components/profile-screen/profile-screen.component";


const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'profile', component: ProfileScreenComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule { }
