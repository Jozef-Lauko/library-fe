import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UserPageComponent} from './user/user-page/user.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink
>>>>>>> 5c795fe8bc2d54b112a544d3a8202fd3d0640cac
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
