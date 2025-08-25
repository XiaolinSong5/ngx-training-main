import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('CurrencyService', () => {
  let service: CurrencyService;

  const fakeHttpClient = {
    get: () => of({USD:1, GBP: 1.5, EUR: 1.2})
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: fakeHttpClient}],
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change currencies properly', () => {
    service.currency.set("EUR");
    expect(service.currency()).toBe("EUR");
    expect(service.currentExchangeRate()).toBe(1.2);
  });

});
