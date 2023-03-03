import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../app.component";
import {Borrowing} from "../model/borrowing.model";

@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.css']
})

export class BorrowingsComponent {

  menu = Menu;
  actualMenu: Menu = Menu.USERS;

  borrowings: Array<Borrowing>= [];
  borrowing?: Borrowing;

  createBorrowing(borrowing: Borrowing) {
    this.borrowings.push(borrowing);
  }

  updateBorrowing(borrowing: Borrowing) {
    const index = this.borrowings.findIndex(
      borrowing => borrowing.id === borrowing.id);
    if (index !== -1) {
      this.borrowings[index] = borrowing;
      this.borrowing = undefined;
    }
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.borrowing = this.borrowings.find(
      borrowing => borrowing.id === borrowingId);
  }

  deleteBorrowing(borrowingId: number): void {
    const index = this.borrowings.findIndex(borrowing =>
      borrowing.id === borrowingId);
    if (index !== -1) { this.borrowings.splice(index, 1); }
  }
}
