import { Component } from '@angular/core';
import {Borrowing} from "../model/borrowing.model";

import {UserService} from "../service/user/user.service";
import {User} from "../model/user.model";
import {BorrowingService} from "../service/borrowing/borrowing.service";

@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.css']
})

export class BorrowingsComponent {
  borrowings: Array<Borrowing> = [];
  borrowing?: Borrowing;

  users?: User[];

  constructor(private borService: BorrowingService, private usService: UserService) {
    this.borService.getBorrowings();
    this.getUsers();
  }

  createBorrowing(borrowing: Borrowing) {
    this.borService.createBorrowing(borrowing).subscribe(() => {
      console.log("Create borrowing OK");
      this.getBorrowings();
    })
  }

  updateBorrowing(borrowing: Borrowing) {
    this.borService.updateBorrowing(borrowing).subscribe(() => {
      console.log("Update borrowing OK");
      this.getBorrowings();
    })
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.borService.getBorrowing(borrowingId).subscribe((borrowing: Borrowing) => {
      this.borrowing = borrowing;
    })
  }

  deleteBorrowing(borrowingId: number): void {
    this.borService.deleteBorrowing(borrowingId).subscribe(() => {
      console.log("Delete borrowing OK");
      this.getBorrowings();
    })
  }

  private getBorrowings() {
    this.borService.getBorrowings().subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    })
  }

  private getUsers(): void {
    this.usService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
