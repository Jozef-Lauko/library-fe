import { Component } from '@angular/core';
import {User} from "../../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  form: FormGroup;
  persons: Array<User> = [];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
    })
  }

  editPerson(index: number):void {
    this.form.setValue(this.persons[index]);
    this.deletePerson(index);
  }

  deletePerson(index: number):void{
    this.persons.splice(index,1);
  }

}
