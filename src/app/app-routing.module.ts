import { NgModule } from '@angular/core';
import {UserPageComponent} from "./user/user-page/user.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {

}
