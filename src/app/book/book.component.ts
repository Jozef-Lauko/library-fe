import { Component } from '@angular/core';

import {Book} from "../model/book.model";
import {BookService} from "../service/book/book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {

  books: Array<Book> = [];
  book?: Book;

  constructor(private service: BookService) {
    this.getBooks();
  }

  createBook(book: Book) {
    this.service.createBook(book).subscribe(() => {
      console.log("Create book OK");
      this.getBooks();
    })
  }

  updateBook(book: Book) {
    this.service.updateBook(book).subscribe(() => {
      console.log("Update book OK");
      this.getBooks();
    })
  }

  selectBookToUpdate(bookId: number): void {
    this.service.getBook(bookId).subscribe((book: Book) => {
      this.book = book;
    })
  }

  deleteBook(bookId: number): void {
    this.service.deleteBook(bookId).subscribe(() => {
      console.log("Delete book OK");
    })
  }

  private getBooks(){
    this.service.getBooks().subscribe((books:Book[])=>{
      this.books = books;
    })
  }
}
