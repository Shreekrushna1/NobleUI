import { TestBed } from '@angular/core/testing';

import { GrowthChartService } from './growth-chart.service';

describe('GrowthChartService', () => {
  let service: GrowthChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowthChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
