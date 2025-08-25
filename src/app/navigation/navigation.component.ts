import {Component, inject} from '@angular/core';
import {CurrencySwitcherComponent} from "../currency-switcher/currency-switcher.component";
import {CurrencyService} from "../currency-switcher/currency.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CurrencySwitcherComponent, CurrencyPipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  currencyService = inject(CurrencyService);
  currency = this.currencyService.currentCurrency;
  exchangeRate = this.currencyService.currentExchangeRate;
  priceInUsd = 10;
}
