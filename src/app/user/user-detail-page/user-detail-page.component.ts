import { Component } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {ToastService} from "angular-toastify";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../model/user.model";

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

  private getUser() {

  }
}


