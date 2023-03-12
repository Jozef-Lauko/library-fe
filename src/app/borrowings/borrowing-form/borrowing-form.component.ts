import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrowing} from "../../model/borrowing.model";

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {
  form: FormGroup;

  @Output() formCreate = new EventEmitter<Borrowing>();
  @Output() formUpdate = new EventEmitter<Borrowing>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      customerID: new FormControl(null, Validators.required),
      bookID: new FormControl(null, Validators.required),
    })
  }

  saveBorrowing(): void {
    if(this.form.valid) {
      if(this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareBorrowing(this.form.controls.id.value))
      } else {
        this.formCreate.emit(this.prepareBorrowing());
      }
      this.form.reset();
    }
  }

  private prepareBorrowing(id?: number): Borrowing {
    return {
      id: id !== undefined ? id : Date.now(),
      customerID: this.form.controls.customerID.value,
      bookID: this.form.controls.bookID.value
    }
  }

  @Input()
  set BorrowingData(borrowing: Borrowing | undefined) {
    if (borrowing) {
      this.form.setValue(borrowing);
    }
  }
}
