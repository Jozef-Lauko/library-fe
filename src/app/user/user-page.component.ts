import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];
  person?: User;

  createPerson(person: User): void {
    this.persons.push(person);
    console.log('PERSONS:', this.persons);
  }

  updatePerson(person: User): void {
    const index = this.persons.findIndex(
      person => person.id === person.id);
    if (index !== -1) {
      this.persons[index] = person;
      this.person = undefined;
    }
  }

  selectPersonToUpdate(personId: number): void {
    this.person = this.persons.find(person =>
      person.id === personId);
  }

  deletePerson(personId: number): void {
    const index = this.persons.findIndex(person =>
      person.id === personId);
    if (index !== -1) { this.persons.splice(index, 1); }
  }
}
