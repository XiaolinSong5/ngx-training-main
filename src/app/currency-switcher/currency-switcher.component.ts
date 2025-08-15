import {Component, inject} from '@angular/core';
import {Currency} from './currency';
import {CurrencyService} from "./currency.service";

@Component({
  selector: 'app-currency-switcher',
  standalone: true,
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {
  service = inject(CurrencyService);
  showItems = false;

  changeCurrency(currency: Currency): void {
    this.service.currency.set(currency);
    this.showItems = false;
  }
}
