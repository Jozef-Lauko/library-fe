import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from "./user/user.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [{
  path: 'user',
  component: UserComponent
},
  {
    path: 'genres',
    component: CategoryComponent
  }
];

import {BookComponent} from "./book/book.component";
import {BorrowingsComponent} from "./borrowings/borrowings.component";
import {UserPageComponent} from "./user/user-page.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'borrowing',
    component: BorrowingsComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'genres',
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
