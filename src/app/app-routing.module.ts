import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BookComponent} from "./book/book.component";
import {BorrowingsComponent} from "./borrowings/borrowings.component";
import {UserPageComponent} from "./user/user-page.component";
import {CategoryComponent} from "./category/category.component";
import {UserDetailPageComponent} from "./user/user-detail-page/user-detail-page.component";
import {BorrowingsDetailPageComponent} from "./borrowings/borrowings-detail-page/borrowings-detail-page.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'user/:userId',
    component: UserDetailPageComponent
  },
  {
    path: 'borrowing',
    component: BorrowingsComponent
  },
  {
    path: 'borrowing/:borrowingId',
    component: BorrowingsDetailPageComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
