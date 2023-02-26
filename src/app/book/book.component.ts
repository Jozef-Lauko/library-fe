import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../app.component";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  form: FormGroup;


  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      authorFirstName: new FormControl(null, Validators.required),
      authorLastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      available: new FormControl(null, Validators.required)
    });
  }

  menu = Menu;
  actualMenu: Menu = Menu.BOOKS;

  books: Array<Book> = [];

  saveBook(): void{
    this.books.push(this.form.value);
    this.form.reset();
  }

  deleteBook(index: number): void{
    this.books.splice(index, 1);
  }

  editBook(index: number): void{
    this.form.setValue(this.books[index]);
    this.deleteBook(index);
  }
}

