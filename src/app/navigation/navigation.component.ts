import { Component } from '@angular/core';
import {CurrencySwitcherComponent} from "../currency-switcher/currency-switcher.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CurrencySwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
