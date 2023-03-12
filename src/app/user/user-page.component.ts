import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];
  person?: User;

  constructor(private http: HttpClient) {
    this.getPersons();
  }

  createPerson(person: User): void {
    this.http.post<User[]>('http://labs.fpv.umb.sk:8080/api/customers', person)
      .subscribe((person: User[]) => {
        console.log('Create person OK');
        this.getPersons();
    })
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

  getPersons(): void{
    this.http.get<User[]>('http://labs.fpv.umb.sk:8080/api/customers')
      .subscribe((persons: User[]) => {
        this.persons = persons;
      })
  }
}
