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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
