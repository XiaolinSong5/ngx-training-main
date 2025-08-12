import {Component, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import {CurrencyRendererPipe} from "../currency-renderer.pipe";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-license-plate',
  standalone: true,
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css'],
  imports:[CurrencyRendererPipe]
})
export class LicensePlateComponent {

  @Input()
  plate!: LicensePlate;

  @Input()
  buttonText!: string;

  @Output()
  buttonClicked(): void {

    alert("Plate added to cart");
  }

}
