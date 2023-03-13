import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user/user.service";
import {ToastService} from "angular-toastify";
import {User} from "../../model/user.model";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent {
  person?: User;

  private personId: number | null;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: UserService,
              private toastService: ToastService) {
    this.personId = Number(route.snapshot.paramMap.get('userId'));
    this.getUser();

  }

  getUser(): void {
    if (this.personId) {
      this.service.getUser(this.personId).pipe(untilDestroyed(this)).subscribe((person: User) => {
        this.person = person;
      })
    }
  }

  updatePerson(person: User): void {
    this.service.updateUser(person).pipe(untilDestroyed(this)).subscribe(()=>{
      this.toastService.success('Osoba bola uspesne zmenena.');
    }, () =>{this.toastService.error('Chyba. Osoba nebola zmenena');})
  }

  cancel(): void{
    this.router.navigate(['user']);
  }
}
