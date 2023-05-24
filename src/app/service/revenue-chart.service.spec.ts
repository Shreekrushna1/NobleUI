import { TestBed } from '@angular/core/testing';

import { RevenueChartService } from './revenue-chart.service';

describe('RevenueChartService', () => {
  let service: RevenueChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevenueChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
