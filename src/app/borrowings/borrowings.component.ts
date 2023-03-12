import { Component } from '@angular/core';
import {Borrowing} from "../model/borrowing.model";

import {BorrowingService} from "../service/borrowing/borrowing.service";

@Component({
  selector: 'app-borrowings',
  templateUrl: './borrowings.component.html',
  styleUrls: ['./borrowings.component.css']
})

export class BorrowingsComponent {
  borrowings: Array<Borrowing>= [];
  borrowing?: Borrowing;

  constructor(private service: BorrowingService) {
    this.getBorrowings();
  }

  createBorrowing(borrowing: Borrowing) {
    this.service.createBorrowing(borrowing).subscribe(() =>{
      console.log("Create borrowing OK");
      this.getBorrowings();
    })
  }

  updateBorrowing(borrowing: Borrowing) {
    this.service.updateBorrowing(borrowing).subscribe(()=>{
      console.log("Update borrowing OK");
      this.getBorrowings();
    })
  }

  selectBorrowingToUpdate(borrowingId: number): void {
    this.service.getBorrowing(borrowingId).subscribe((borrowing: Borrowing) => {
      this.borrowing = borrowing;
    })
  }

  deleteBorrowing(borrowingId: number): void {
    this.service.deleteBorrowing(borrowingId).subscribe(()=> {
      console.log("Delete borrowing OK");
      this.getBorrowings();
    })
  }

  private getBorrowings() {
    this.service.getBorrowings().subscribe((borrowings: Borrowing[]) => {
      this.borrowings = borrowings;
    })
  }
}
