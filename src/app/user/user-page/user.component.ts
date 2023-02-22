import { Component } from '@angular/core';
import {User} from "../../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserPageComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })
  }

  persons: Array<User> = [];

  savePerson(): void{
    this.persons.push(this.form.value);
    //reset formu
    this.form.reset();
  }

  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }

  editPerson(index: number): void {
    this.form.setValue(this.persons[index]);
    this.deletePerson(index);
  }
}
