import {Component, inject, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyRendererPipe} from "../currency-renderer.pipe";
import {CurrencyService} from "../currency-switcher/currency.service";

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css'],
  imports: [CurrencyRendererPipe]
})
export class LicensePlateComponent {

  @Input()
  plate!: LicensePlate;

  @Input()
  buttonText!: string;

  @Output()
  service = inject(CurrencyService);
  buttonClicked(): void {

    alert("Plate added to cart");
  }

}
