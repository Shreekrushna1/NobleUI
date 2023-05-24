import { TestBed } from '@angular/core/testing';

import { NewOrdersChartService } from './new-orders-chart.service';

describe('NewOrdersChartService', () => {
  let service: NewOrdersChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewOrdersChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
