import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
      id: new FormControl(),
      name: new FormControl(),
      contact: new FormControl(),
      author: new FormControl(),
      title: new FormControl(),
      available: new FormControl(),
      book: new FormControl(),
      user: new FormControl()
    })
  }

  menu = Menu;
  actualMenu: Menu = Menu.USERS

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
  }> = [];

  genres: Array<{
    title: string
  }> = [];

  savePerson(): void{
    this.persons.push(this.form.value);
    this.form.reset();
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

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }

}
