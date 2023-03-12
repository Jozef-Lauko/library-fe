import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Input() books: Array<Book> = [];
  @Output() bookToUpdate = new EventEmitter<number>();
  @Output() bookToDelete = new EventEmitter<number>();

  updateBook(bookId: number): void {
    this.bookToUpdate.emit(bookId);
  }

  deleteBook(bookId: number): void {
    this.bookToDelete.emit(bookId);
  }
}
