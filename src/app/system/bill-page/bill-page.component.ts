import { Component, OnDestroy, OnInit } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { combineLatest, Subscription } from 'rxjs';
import { Currency } from '../shared/models/currency.model';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'app-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor( private billService: BillService) { }

  public ngOnInit() {
    this.subscription = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, Currency]) => {
      // console.log(data);
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
