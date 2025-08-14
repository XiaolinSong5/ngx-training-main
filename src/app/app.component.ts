import {Component, inject, OnDestroy} from '@angular/core';
import {CALIFORNIA_PLATE, LICENSE_PLATES} from "./mock-data";
import {LicensePlate} from "./license-plate";
import {NavigationComponent} from "./navigation/navigation.component";
import {JumbotronComponent} from "./jumbotron/jumbotron.component";
import {LicensePlateComponent} from "./license-plate/license-plate.component";
import {HighlightDirective} from "./highlight.directive";
import {LicensePlateService} from "./services/license-plate.service";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    RouterOutlet,
    NavigationComponent
  ],
})
export class AppComponent {
}
