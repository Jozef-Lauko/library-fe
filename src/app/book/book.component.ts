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
  menu = Menu;
  actualMenu: Menu = Menu.BOOKS;

  books: Array<Book> = [];
  book?: Book;

  createBook(book: Book){
    this.books.push(book);
  }

  updateBook(tmp: Book){
    const index = this.books.findIndex(book => book.id === book.id);
    if (index !== -1){
      this.books[index] = tmp;
      this.book = undefined;
    }
  }

  selectBookToUpdate(bookId: number): void{
    this.book = this.books.find(book => book.id === bookId);
  }

  deleteBook(bookId: number): void{
    const index = this.books.findIndex(book => book.id === bookId);
    if (index !== -1){ this.books.splice(index, 1); }
  }
}

