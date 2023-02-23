import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {BorrowingsComponent} from "./borrowings/borrowings.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'borrowings',
    component: BorrowingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
