import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels = ['A', 'B', 'C', 'D'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  
  constructor() { }

  ngOnInit() {
  }

}
