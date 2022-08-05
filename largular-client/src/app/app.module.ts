import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { CommentLargeComponent } from './components/comment-large/comment-large.component';
import { ProfileCommentBlockComponent } from './components/profile-comment-block/profile-comment-block.component';
import { AppRouterModule } from "./routing.module";
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopNavbarProfileComponent } from './components/top-navbar-profile/top-navbar-profile.component';
import { SignupScreenComponent } from './components/signup-screen/signup-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    CommentLargeComponent,
    ProfileCommentBlockComponent,
    HomeScreenComponent,
    ProfileScreenComponent,
    TopNavbarComponent,
    FooterComponent,
    TopNavbarProfileComponent,
    SignupScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
