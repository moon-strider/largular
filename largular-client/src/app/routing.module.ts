import { Routes, RouterModule } from "@angular/router";

import {NgModule} from "@angular/core";
import {HomeScreenComponent} from "./components/home-screen/home-screen.component";
import {ProfileScreenComponent} from "./components/profile-screen/profile-screen.component";
import {LoginScreenComponent} from "./components/login-screen/login-screen.component";
import {SignupScreenComponent} from "./components/signup-screen/signup-screen.component";


const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'profile', component: ProfileScreenComponent },
  { path: 'login', component: LoginScreenComponent },
  { path: 'signup', component: SignupScreenComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule { }
