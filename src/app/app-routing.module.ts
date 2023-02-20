import { NgModule } from '@angular/core';
import {UserComponent} from "./user/user.component";
import {Router, RouterModule, Routes} from "@angular/router";

const  routes: Routes =[{
  path: 'user',
  component: UserComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
