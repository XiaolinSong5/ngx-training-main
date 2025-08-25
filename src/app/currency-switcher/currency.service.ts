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

  readonly currency = signal<Currency>('USD');
  constructor() { }
  readonly currentExchangeRate = computed(
    () => this.exchangeRates()[this.currentCurrency().code]
  );

  setCurrency(currencyCode: string): void {
    const newCurrency = this.currencies().find((c) => c.code === currencyCode);
    if (newCurrency) this.currentCurrency.set(newCurrency);
  }
}
