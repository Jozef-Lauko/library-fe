import { Component } from '@angular/core';
import {Borrowing} from "../model/borrowing.model";

import {UserService} from "../service/user/user.service";
import {User} from "../model/user.model";
import {BorrowingService} from "../service/borrowing/borrowing.service";
import {Book} from "../model/book.model";
import {BookService} from "../service/book/book.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {Subscription} from "rxjs";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.css']
})

export class BorrowingsComponent {
  borrowings: Array<Borrowing> = [];
  borrowing?: Borrowing;

  users?: User[];
  books?: Book[];

  private getListSubscription?: Subscription;

  constructor(private borService: BorrowingService, private usService: UserService, private bookService: BookService, private router: Router, private toastService: ToastService) {
    this.getBorrowings();
    this.getUsers();
    this.getBooks();
  }

  ngOnDestroy(): void {
    this.getListUnsubscribe();
  }

  createBorrowing(borrowing: Borrowing) {
    this.borService.createBorrowing(borrowing).subscribe(() => {
      console.log("Create borrowing OK");
      this.getBorrowings();
    })
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.borService.getBorrowing(borrowingId).subscribe((borrowing: Borrowing) => {
      this.borrowing = borrowing;
    })
  }

  deleteBorrowing(borrowingId: number): void {
    if(window.confirm("Naozaj chcete vymazat vypozicku?")){
      this.borService.deleteBorrowing(borrowingId).subscribe(() => {
        console.log("Delete borrowing OK");
        this.getBorrowings();
      }, () => {
        this.toastService.error("Chyba. Vypozicka nebola vymazana.");
      })
    }
  }

  private getBorrowings() {
    this.borService.getBorrowings().pipe(untilDestroyed(this)).subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    })
  }

  selectBorrwingToUpdate(borrowingId: number): void {
    this.router.navigate(['borrowing', borrowingId]);
  }

  private getUsers(): void {
    this.usService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  private getBooks(): void {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    })
  }

  private getListUnsubscribe() {
    if(this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }
}
