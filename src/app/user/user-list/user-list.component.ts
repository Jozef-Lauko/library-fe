import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Input()
  persons: Array<User> = [];

  @Output()
  personToUpdate = new EventEmitter<number>();

  updatePerson(userId: number): void {
    this.personToUpdate.emit(userId);
  }

  @Output()
  personToDelete = new EventEmitter<number>();

  deletePerson(userId: number): void {
    this.personToDelete.emit(userId);
  }
}
