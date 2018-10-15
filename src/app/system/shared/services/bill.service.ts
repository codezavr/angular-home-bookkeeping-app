import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.model';
import { Currency } from '../models/currency.model';
import { BaseApi } from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  public getBill(): Observable<Bill> {
    return this.get('bill');
  }

  public getCurrency(base: string = 'USD'): Observable<Currency> {
    return this.http.get<Currency>(`https://api.exchangeratesapi.io/latest?base=${base}`);
  }
}
