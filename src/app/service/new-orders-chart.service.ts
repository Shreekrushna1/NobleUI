import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewOrdersChartService {

  constructor() {
    
   }
  barChartOptions={
    responsive:true,
    
    scales:{
      y:{
        display:false,
      },
      x:{
        display:false,
      }
    }
  }
  lineChartType = 'line';

  lineChartLegend = false;
  barChartLabels = ['31 Dec', '1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'];
  barChartData=[{
    data:[36,77,52,90,74,35,55,23,47,10,63],
    fill:true,
    backgroundColor: [
      'rgba(101, 113, 255, 0.85)'
    ],
    borderColor: [
      'rgba(101, 113, 255, 0.85)',
    ],
    borderWidth:1,
    pointRadius: 4,
    pointHoverRadius: 6,
  }]
}
