import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BookComponent} from "./book/book.component";
import {BorrowingsComponent} from "./borrowings/borrowings.component";
import { UserPageComponent } from './user/user-page.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import {HttpClientModule} from "@angular/common/http";
import { BorrowingFormComponent } from './borrowings/borrowing-form/borrowing-form.component';
import { BorrowingListComponent } from './borrowings/borrowing-list/borrowing-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookListComponent } from './book/book-list/book-list.component';
import {CategoryComponent} from "./category/category.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {UserService} from "./service/user/user.service";
import { UserDetailPageComponent } from './user/user-detail-page/user-detail-page.component';
import {BorrowingService} from "./service/borrowing/borrowing.service";
import {AngularToastifyModule, ToastService} from "angular-toastify";
import { BorrowingsDetailPageComponent } from './borrowings/borrowings-detail-page/borrowings-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BorrowingsComponent,
    UserPageComponent,
    UserFormComponent,
    UserListComponent,
    BorrowingFormComponent,
    BorrowingListComponent,
    BookFormComponent,
    BookListComponent,
    CategoryComponent,
    CategoryFormComponent,
    CategoryListComponent,
    UserDetailPageComponent,
    BorrowingsDetailPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularToastifyModule
  ],
  providers: [
    UserService,
    BorrowingService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
