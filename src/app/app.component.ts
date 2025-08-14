import {Component, inject, OnDestroy} from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {HighlightDirective} from "./highlight.directive";
import {LicensePlateService} from "./services/license-plate.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [NavigationComponent,
  JumbotronComponent,
  LicensePlateComponent,
  HighlightDirective],
})
export class AppComponent implements OnDestroy{
  licensePlates: LicensePlate[] = [];
  service = inject(LicensePlateService);
  licensePlate: LicensePlate = CALIFORNIA_PLATE;
  showDialog = false;
  subscription!: Subscription;
  constructor() {
    this.subscription = this.service.getList()
      .subscribe(data => this.licensePlates = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToChat(plate: LicensePlate) {
    this.showDialog = true;
  }
}
