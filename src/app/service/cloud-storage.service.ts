import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudStorageService {

  constructor() { }

  fillPercentage = 67;
  emptyPercentage = 100 - this.fillPercentage;

  cloudStorageChartType ='doughnut';
  cloudStorageChartOptions={
    responsive:true,
  }
  cloudStorageChartLabels=['FillPercentage', 'EmptyPercentage'];
  cloudStorageChartLegend=false;
  cloudStorageChartData=[{
    data:[this.fillPercentage,this.emptyPercentage],
    fill:false,
    backgroundColor: [
      'rgba(101, 113, 255, 0.85)'
    ],
    borderColor: [
      'white',
    ],
    borderWidth: 7,

  }]
}
