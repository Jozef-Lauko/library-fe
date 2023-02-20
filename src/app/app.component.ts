import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "./model/user.model";

export enum Menu{
  BOOK = 'BOOKS',
  USERS = 'USERS',
  BORROWINGS = 'BORROWINGS',
  GENRES = 'GENRES',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;

  books: Array<{
    title: string;
    surname: string;
  }> = [];

  borrowings: Array<{
    name: string;
    title: string
    dateOfBorrowing: number
  }> = [];

  genres: Array<{
    name: string;
  }> = [];


  menu = Menu;
  actualMenu = Menu.USERS;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),  //mozem si upresnit dlzku priezviska
      title: new FormControl(),
      dateOfBorrowing: new FormControl(),
    })
  }

  saveBook(): void{
    this.books.push(this.form.value);
    this.form.reset();
  }

  saveBorrowing(): void{
    this.borrowings.push(this.form.value);
    this.form.reset();
  }

  saveGenre(): void{
    this.genres.push(this.form.value);
    this.form.reset();
  }



  changeMenu(menuItem: Menu): void{
    this.actualMenu = menuItem;
  }
}

