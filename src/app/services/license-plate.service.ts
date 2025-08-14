import { Injectable } from '@angular/core';
import {LICENSE_PLATES} from "../mock-data";
import {LicensePlate} from "../license-plate";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor() { }
  getList(): Observable<LicensePlate[]> {
    return of(LICENSE_PLATES);
  }

}
