import { Injectable } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataPoints from 'chartjs-plugin-datalabels';
import {  ChartOptions, ChartType } from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class MonthlySalesService {
  constructor() { Chart.register(ChartDataPoints) }
  monthlyBarChartOptions: ChartOptions = {
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200,
        min: 0,
        ticks: {
          stepSize: 50
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        display: (context: any) => {
          return context.datasetIndex === 0;
        },
        formatter: (value: any) => {
          return value.toString();
        }
      }
    }
  }
  monthlyBarChartLegend = false;
  monthlyBarChartType:ChartType = 'bar';
  monthlyBarChartLabels = ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sep 22', 'Oct 22', 'Nov 22', 'Dec 22']
  monthlyBarChartData = [{
    data: [152, 109, 93, 113, 126, 161, 188, 143, 102, 113, 116, 124],
    fill: false,
    backgroundColor: [
      'rgba(101, 113, 255, 0.85)'
    ],
    borderColor: [
      'rgba(101, 113, 255, 0.85)',
    ],
    borderWidth: 2,
    tension: 0.5,
  }]
}
