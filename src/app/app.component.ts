import { Component } from '@angular/core';
<<<<<<< HEAD
import {FormControl, FormGroup} from "@angular/forms";
=======
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "./model/user.model";
>>>>>>> 5c795fe8bc2d54b112a544d3a8202fd3d0640cac

export enum Menu {
  BOOKS = "BOOKS",
  USERS = "USERS",
  BORROWINGS = "BORROWINGS",
  GENRES = "GENRES"
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
<<<<<<< HEAD
      id: new FormControl(),
      name: new FormControl(),
      contact: new FormControl(),
      author: new FormControl(),
      title: new FormControl(),
      available: new FormControl(),
      book: new FormControl(),
      user: new FormControl()
=======
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.max(20)]),
      title: new FormControl()
>>>>>>> 5c795fe8bc2d54b112a544d3a8202fd3d0640cac
    })
  }

  menu = Menu;
  actualMenu: Menu = Menu.USERS

<<<<<<< HEAD
  persons: Array<{
    id: number,
    name: string,
    contact: number
  }> = [];

  books: Array<{
    id: number,
    name: string,
    author: string,
    available: string
  }> = [];

  borrowings: Array<{
    id: number,
    book: string,
    user: string,
=======
  books: Array<{
    title: string
>>>>>>> 5c795fe8bc2d54b112a544d3a8202fd3d0640cac
  }> = [];

  genres: Array<{
    title: string
  }> = [];

<<<<<<< HEAD
  savePerson(): void{
    this.persons.push(this.form.value);
    this.form.reset();
  }

=======
>>>>>>> 5c795fe8bc2d54b112a544d3a8202fd3d0640cac
  saveBook(): void{
    this.books.push(this.form.value);
    this.form.reset();
  }

<<<<<<< HEAD
  saveBorrowing(): void{
    this.borrowings.push(this.form.value);
    this.form.reset();
  }

=======
>>>>>>> 5c795fe8bc2d54b112a544d3a8202fd3d0640cac
  saveGenre(): void{
    this.genres.push(this.form.value);
    this.form.reset();
  }

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }

}
