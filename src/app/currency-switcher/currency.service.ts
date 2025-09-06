import {computed, Injectable, signal} from '@angular/core';
import {of} from "rxjs";

type Currency = 'USD' | 'EUR' | 'GBP';
type ExchangeRates = Record<Currency, number>;

interface CurrencySymbol {
  code: Currency;
  symbol: string;
}

const DEFAULT_CURRENCIES: CurrencySymbol[] = [
  { code: 'USD', symbol: '$' },
  { code: 'GBP', symbol: '£' },
  { code: 'EUR', symbol: '€' },
];
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  readonly currencies = signal(DEFAULT_CURRENCIES);
  readonly currentCurrency = signal(DEFAULT_CURRENCIES[0]);
  readonly exchangeRates = signal<ExchangeRates>({
    EUR: 1.14,
    GBP: 1.31,
    USD: 1,
  });

 currency = signal<Currency>('USD');
  constructor() { }
  readonly currentExchangeRate = computed(
    () => {
      console.log('computing: this.currentcurrency()' + this.currentCurrency());
      console.log('computing: this.exchangeRates()' + this.exchangeRates());
      console.log('computing: this.exchangeRates()[this.currentCurrency().code]' + this.exchangeRates()[this.currentCurrency().code]);
      return this.exchangeRates()[this.currency()];
    }
  );

  setCurrency(currencyCode: string): void {
    const newCurrency = this.currencies().find((c) => c.code === currencyCode);
    if (newCurrency) {
      this.currentCurrency.set(newCurrency);
    console.log('crrRate', this.currentExchangeRate());
    }
  }
}
