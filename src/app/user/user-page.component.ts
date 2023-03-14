import {Component, OnDestroy} from '@angular/core';
import {User} from "../model/user.model";
import {UserService} from "../service/user/user.service";
import {Subscription} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {ToastService} from "angular-toastify";
import {Router} from "@angular/router";

@UntilDestroy()
@Component({
  selector: 'app-user',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnDestroy {

  persons: Array<User> = [];
  person?: User;

  private getListSubscription?: Subscription;

  constructor(private service: UserService, private toastService: ToastService, private router: Router) {
    this.getPersons();
  }

  ngOnDestroy(): void {
        this.getListUnsubscribe();
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
    this.router.navigate(['user', personId]);
  }

  deletePerson(personId: number): void {
    if(window.confirm("Naozaj chcete vymazat osobu?")){
      this.service.deleteUser(personId).pipe(untilDestroyed(this)).subscribe(()=> {
        console.log("Delete person OK");
        this.getPersons();
      }, () => {
        this.toastService.error("Chyba. Osoba nebola vymazana.")
      })
    }
  }

  getPersons():void {
    this.service.getUsers().pipe(untilDestroyed(this)).subscribe((persons: User[]) => {
      this.persons = persons;
    })
  }

  private getListUnsubscribe(): void {
    if(this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }
}
