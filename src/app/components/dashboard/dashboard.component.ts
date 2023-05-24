import { Component, ViewChild } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ChartsService } from 'src/app/service/charts.service';
import { GrowthChartService } from 'src/app/service/growth-chart.service';
import { NewOrdersChartService } from 'src/app/service/new-orders-chart.service';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { RevenueChartService } from 'src/app/service/revenue-chart.service';
import { MonthlySalesService } from 'src/app/service/monthly-sales.service';
import { CloudStorageService } from 'src/app/service/cloud-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private barChart: NewOrdersChartService, private growth: GrowthChartService, private chartService: ChartsService, private revenue: RevenueChartService, private monthly: MonthlySalesService,private cloud: CloudStorageService) {
  }

  chart = {
    datasets: this.chartService.lineChartData,
    options: this.chartService.lineChartOptions,
    labels: this.chartService.lineChartLabels,
    legend: this.chartService.lineChartLegend,
    type: this.chartService.lineChartType
  }
  newOrders = {
    datasets: this.barChart.barChartData,
    options: this.barChart.barChartOptions,
    labels: this.barChart.barChartLabels,
    legend: this.barChart.lineChartLegend,
    type: this.barChart.lineChartType
  }
  growthChart = {
    datasets: this.growth.growthChartData,
    options: this.growth.growthChartOptions,
    labels: this.growth.growthChartLabels,
    legend: this.growth.growthChartLegend,
    type: this.growth.growthChartType,
  }
  revenueChart = {
    datasets: this.revenue.revenueChartData,
    options: this.revenue.revenueChartOptions,
    labels: this.revenue.revenueChartLabels,
    legend: this.revenue.revenueChartLegend,
    type: this.revenue.revenueChartType
  }

  monthlyChart = {
    datasets: this.monthly.monthlyBarChartData,
    options: this.monthly.monthlyBarChartOptions,
    labels: this.monthly.monthlyBarChartLabels,
    legend: this.monthly.monthlyBarChartLegend,
    type: this.monthly.monthlyBarChartType,
  }
  cloudChart = {
    datasets: this.cloud.cloudStorageChartData,
    options: this.cloud.cloudStorageChartOptions,
    labels: this.cloud.cloudStorageChartLabels,
    legend: this.cloud.cloudStorageChartLegend,
    type: this.cloud.cloudStorageChartType,
  }

  hello() {
    alert('Hello');
  }
  toggleEmailMenu() {
    let emailMenu = document.getElementById("email-menu");

    emailMenu?.classList.toggle("show");
  }
  toggleUiMenu() {
    let uiMenu = document.getElementById("ui-menu");

    uiMenu?.classList.toggle("show");
  }
  toggleAdvanceUiMenu() {
    let advanceUiMenu = document.getElementById("advanceUi-menu");

    advanceUiMenu?.classList.toggle("show");
  }
  toggleFormsMenu() {
    let uiMenu = document.getElementById("forms-menu");

    uiMenu?.classList.toggle("show");
  }
  toggleChartsMenu() {
    let uiMenu = document.getElementById("charts-menu");

    uiMenu?.classList.toggle("show");
  }
  toggleTablesMenu() {
    let uiMenu = document.getElementById("tables-menu");

    uiMenu?.classList.toggle("show");
  }
  toggleIconsMenu() {
    let uiMenu = document.getElementById("icons-menu");

    uiMenu?.classList.toggle("show");
  }
  toggleSpecialPagesMenu() {
    let pagesMenu = document.getElementById("pages-menu");

    pagesMenu?.classList.toggle("show");
  }
  toggleAuthMenu() {
    let pagesMenu = document.getElementById("auth-menu");

    pagesMenu?.classList.toggle("show");
  }
  toggleErrorMenu() {
    let pagesMenu = document.getElementById("error-menu");

    pagesMenu?.classList.toggle("show");
  }
  toggleDocsMenu() {
    let pagesMenu = document.getElementById("docs-menu");

    pagesMenu?.classList.toggle("show");
  }

}
