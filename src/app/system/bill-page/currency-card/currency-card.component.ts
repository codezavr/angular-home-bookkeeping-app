import { Component, Input } from '@angular/core';
import { Currency } from '../../shared/models/currency.model';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent {
  @Input() currency: Currency;
  public currencies: string[] = ['EUR', 'RUB'];
}
