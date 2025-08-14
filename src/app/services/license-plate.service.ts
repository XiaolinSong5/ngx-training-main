import {inject, Injectable} from '@angular/core';
import {LICENSE_PLATES} from "../mock-data";
import {LicensePlate} from "../license-plate";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {
  private http = inject(HttpClient);
  constructor() { }
  getList(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:8000/data');
  }

}
