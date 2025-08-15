import {Injectable, signal} from '@angular/core';
import {Currency} from "./currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  readonly currency = signal<Currency>('USD');
  constructor() { }
}
