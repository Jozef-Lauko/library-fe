import { NgModule } from '@angular/core';
import {UserPageComponent} from "./user/user-page/user.component";
import {RouterModule, Routes} from "@angular/router";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'borrowings',
    component: BorrowingsPageComponent
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
