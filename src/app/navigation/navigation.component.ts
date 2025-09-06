import {Component, inject} from '@angular/core';
import {CurrencySwitcherComponent} from "../currency-switcher/currency-switcher.component";
import {CurrencyService} from "../currency-switcher/currency.service";
import {CurrencyPipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CurrencySwitcherComponent, CurrencyPipe, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  currencyService = inject(CurrencyService);
  currency = this.currencyService.currentCurrency;
  exchangeRate = this.currencyService.currentExchangeRate;
  priceInUsd = 10;
  loginService = inject(LoginService);
}
