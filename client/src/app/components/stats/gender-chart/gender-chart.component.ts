import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {
  public pieChartLabels: string[] = ['Male', 'Female', 'Other'];
  public pieChartData: number[] = [500, 300, 100];
  public pieChartType: string = 'pie';

  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
