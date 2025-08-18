import {Component, inject, input, output} from '@angular/core';
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

  readonly plate = input.required<LicensePlate>();

  readonly buttonText = input.required<string>();

  service = inject(CurrencyService);

  readonly buttonClick = output<LicensePlate>();

  buttonClicked(): void {
    this.buttonClick.emit(this.plate());
  }

}
