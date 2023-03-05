import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
<<<<<<< HEAD
import { UserComponent } from './user/user.component';
import {CategoryComponent} from "./category/category.component";
=======
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

>>>>>>> 8e2e4cc08e56f08787cac681ef063d55ce83510c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserComponent,
    CategoryComponent
=======
    BookComponent,
    BorrowingsComponent,
    UserPageComponent,
    UserFormComponent,
    UserListComponent,
    BorrowingFormComponent,
    BorrowingListComponent,
    BookFormComponent,
    BookListComponent
>>>>>>> 8e2e4cc08e56f08787cac681ef063d55ce83510c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
