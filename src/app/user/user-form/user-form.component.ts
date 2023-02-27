import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
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
