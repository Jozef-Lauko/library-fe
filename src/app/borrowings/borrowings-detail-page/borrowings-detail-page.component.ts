import { Component } from '@angular/core';
import {Borrowing} from "../../model/borrowing.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastService} from "angular-toastify";
import {BorrowingService} from "../../service/borrowing/borrowing.service";
import {untilDestroyed} from "@ngneat/until-destroy";

@Component({
  selector: 'app-borrowings-detail-page',
  templateUrl: './borrowings-detail-page.component.html',
  styleUrls: ['./borrowings-detail-page.component.css']
})
export class BorrowingsDetailPageComponent {
  borrowing?: Borrowing;
  private borrowingId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: BorrowingService,
              private toastService: ToastService) {

    this.borrowingId = Number(route.snapshot.paramMap.get('userId'));
    this.getBorrowing();
  }

  private getBorrowing(): void {
    if(this.borrowingId) {}
    this.service.getBorrowing(this.borrowingId).pipe(untilDestroyed(this)).subscribe((borrowing: Borrowing) => {
      this.borrowing = borrowing;
    })
  }

  updateBorrowing(borrowing: Borrowing) {
    this.service.updateBorrowing(borrowing).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success("Vypozicka bola uspesne zmenena.");
      console.log("Update borrowing OK");
    }, () => {
      this.toastService.error('CHYBA. Vypozicka nebola zmenena.')
    })
  }


  cancel() {
    this.router.navigate(['borrowing']);
  }
}
