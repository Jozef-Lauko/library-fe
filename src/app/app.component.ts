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
      name: new FormControl(),
      surname: new FormControl(),
      title: new FormControl()
    })
  }

  menu = Menu;
  actualMenu: Menu = Menu.USERS

  persons: Array<{
    name: string,
    surname: string
  }> = [];

  books: Array<{
    title: string
  }> = [];

  borrowings: Array<{
    name: string,
    surname: string,
    title: string,
  }> = [];

  genres: Array<{
    title: string
  }> = [];

  savePerson(): void{
    this.persons.push(this.form.value);
    //reset formu
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
