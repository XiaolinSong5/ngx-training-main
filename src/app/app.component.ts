import {Component, inject} from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {HighlightDirective} from "./highlight.directive";
import {LicensePlateService} from "./services/license-plate.service";

@Component({
    selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [NavigationComponent,
  JumbotronComponent,
  LicensePlateComponent,
  HighlightDirective],
})
export class AppComponent {
  licensePlates: LicensePlate[] = [];
  service = inject(LicensePlateService);
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
  showDialog = false;

  constructor() {
    this.service.getList()
      .subscribe(data => this.licensePlates = data);
  }

  addToChat(plate: LicensePlate) {
    this.showDialog = true;
  }
}
