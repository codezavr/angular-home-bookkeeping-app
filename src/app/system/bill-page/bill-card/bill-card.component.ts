import { Component, Input, OnInit } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  public euro: number;
  public rouble: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.euro = rates['EUR'] * this.bill.value;
    this.rouble = rates['RUB'] * this.bill.value;
  }

}
