import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrowthChartService {

  constructor() { }
  growthChartOptions={
    responsive: true,
    elements: {
      point: {
        radius: 0
      }
    },
    scales:{
      x:{
        display:false,
      },
      y:{
        display:false,
      }
    }
  }
  growthChartType='line';
  growthChartLegend=false;
  growthChartLabels = ['31 Dec', '1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'];
  growthChartData=[
    {
      data:[41,45,44,46,52,54,43,74,82,82,89],
      fill:false,
      borderColor: 'rgba(101, 113, 255, 0.85)',
      tension:0.5,
    }
  ]

}
