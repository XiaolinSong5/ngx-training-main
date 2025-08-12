import { Component } from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {HighlightDirective} from "./highlight.directive";

@Component({
    selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [NavigationComponent,
  JumbotronComponent,
  LicensePlateComponent],
})
export class AppComponent {
  licensePlates: LicensePlate[] = LICENSE_PLATES;
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
showDialog = false;
  addToChat(plate: LicensePlate) {
this.showDialog = true;
  }
}
