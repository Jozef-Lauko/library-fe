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
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.max(20)]),
      title: new FormControl()
    })
  }

  menu = Menu;
  actualMenu: Menu = Menu.USERS;

  borrowings: Array<Borrowing>= [];

  saveBorrowing(): void{
    this.borrowings.push(this.form.value);
    this.form.reset();
  }

  deleteBorrowing(index: number): void {
    this.borrowings.splice(index, 1);
  }

  editBorrowing(index: number): void {
    this.form.setValue(this.borrowings[index]);
    this.deleteBorrowing(index);
  }
}
