import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  persons: Array<User> = [];

  constructor() {

  }
}
