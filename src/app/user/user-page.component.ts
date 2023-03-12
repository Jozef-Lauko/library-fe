import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../service/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

  persons: Array<User> = [];
  person?: User;

  constructor(private service: UserService) {
    this.getPersons();
  }

  createPerson(person: User): void {
    this.service.createUser(person).subscribe(() =>{
      console.log("Create person OK");
      this.getPersons();
    })
  }

  updatePerson(person: User): void {
    this.service.updateUser(person).subscribe(()=>{
      console.log("Update person OK");
      this.getPersons();
    })
  }

  selectPersonToUpdate(personId: number): void {
    this.service.getUser(personId).subscribe((person: User) => {
      this.person = person;
    })
  }

  deletePerson(personId: number): void {
    this.service.deleteUser(personId).subscribe(()=> {
      console.log("Delete person OK");
      this.getPersons();
    })
  }


  getPersons():void {
    this.service.getUsers().subscribe((persons: User[]) => {
      this.persons = persons;
    })
  }
}
