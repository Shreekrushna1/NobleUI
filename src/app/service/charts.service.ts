import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ChartsService {
  lineChartOptions = {
    responsive: true,
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6, 
      }
    },
    scales: {
      y: {
        display: false
      },
      x: {
        display: false
      }
    },
  };

  lineChartLabels = ['31 Dec', '1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan', '8 Jan', '9 Jan', '10 Jan'];

  lineChartType = 'line';

  lineChartLegend = false;

  lineChartData = [
    {
      data: [3844, 3855, 3841, 3867, 3822, 3843, 3821, 3841, 3856, 3827, 3843],
      fill: false,
      borderColor: 'rgba(101, 113, 255, 0.85)',
      tension: 0.5,
    }
  ];
}
