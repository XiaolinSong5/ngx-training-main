import {Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {LicensePlate} from "../license-plate";
import {LicensePlateService} from "../services/license-plate.service";
import {CALIFORNIA_PLATE} from "../mock-data";
import {NavigationComponent} from "../navigation/navigation.component";
import {JumbotronComponent} from "../jumbotron/jumbotron.component";
import {LicensePlateComponent} from "../license-plate/license-plate.component";
import {HighlightDirective} from "../highlight.directive";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {CartService} from "../cart.service";
import {DialogComponent} from "../dialog/dialog.component";
import {CurrencyService} from "../currency-switcher/currency.service";
import {CurrencySwitcherComponent} from "../currency-switcher/currency-switcher.component";

@Component({
  selector: 'app-store-view',
  standalone: true,
  imports: [JumbotronComponent,
    LicensePlateComponent,
    HighlightDirective, AsyncPipe,
    DialogComponent, CurrencySwitcherComponent, CurrencyPipe],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.css'
})
export class StoreViewComponent {
  licensePlates$: Observable<LicensePlate[]>;
  service = inject(LicensePlateService);
  cartService: CartService = inject(CartService);
  currencyService = inject(CurrencyService);
  currency = this.currencyService.currentCurrency;
  exchangeRate = this.currencyService.currentExchangeRate;
  priceInUsd = 10;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
  showDialog = false;
  showPopup = false;
  constructor() {
    this.licensePlates$ = this.service.getList();
  }

  addToCart(plate: LicensePlate): void {
    this.cartService.addToCart(plate)
      .subscribe(() => this.showPopup = true);
  }


}
