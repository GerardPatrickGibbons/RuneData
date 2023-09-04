import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ChartType} from 'chart.js';

const SAMPLE_BARCHART_DATA: any[] = [
  {data: [63,53,62,74,34,12,63], label: 'red dhide'},
  {data: [14, 12, 32, 21, 15, 17], label: 'green dhide'}
];

const SAMPLE_BARCHART_LABELS: string[] = ['wk1', 'wk2', 'wk3', 'wk4'];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  constructor(){}

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }
  ngOnInit(){

  }
}
