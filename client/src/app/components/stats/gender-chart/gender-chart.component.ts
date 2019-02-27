import {Component, OnInit} from '@angular/core';
import {StatsService} from "../../../services/stats.service";

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie'; // TODO maybe allow user to change this?

  constructor(public statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.getGenderStats().subscribe(data => {
        this.populateChart(data);
      },
      error => {
      }
    )
  }

  private populateChart(data: object) {
    this.pieChartLabels = Object.keys(data).sort();
    for (let key of this.pieChartLabels) {
      this.pieChartData.push(data[key]);
    }
  }

}
