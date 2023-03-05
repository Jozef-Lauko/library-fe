import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-borrowing-list',
  templateUrl: './borrowing-list.component.html',
  styleUrls: ['./borrowing-list.component.css']
})
export class BorrowingListComponent {

  @Input() borrowings: Array<Borrowing> = [];
  @Output() borrowingToUpdate = new EventEmitter<number>();
  @Output() borrowingToDelete = new EventEmitter<number>();

  updateBorrowing(borrowingId: number): void {
    this.borrowingToUpdate.emit(borrowingId);
  }

  deleteBorrowing(borrowingId: number): void {
    this.borrowingToDelete.emit(borrowingId);
  }
}
