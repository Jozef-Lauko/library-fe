import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {User} from "./model/user.model";

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
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.max(20)]),
      title: new FormControl()
    })
  }

  menu = Menu;
  actualMenu: Menu = Menu.USERS

  books: Array<{
    title: string
  }> = [];

  genres: Array<{
    title: string
  }> = [];

  saveBook(): void{
    this.books.push(this.form.value);
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
