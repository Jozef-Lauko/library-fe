import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  form: FormGroup;
  persons: Array<User> = [];

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required,
        Validators.minLength(3)]),
    })
  }

  savePerson(): void {
    this.persons.push(this.form.value);
    this.form.reset();
  }

  editPerson(index: number):void {
    this.form.setValue(this.persons[index]);
    this.deletePerson(index);
  }

  deletePerson(index: number):void{
    this.persons.splice(index,1);
  }

}
