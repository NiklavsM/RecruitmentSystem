import {Component, OnInit} from '@angular/core';
import {StatsService} from '../../../services/stats.service';

@Component({
  selector: 'app-ethnicity-chart',
  templateUrl: './ethnicity-chart.component.html',
  styleUrls: ['./ethnicity-chart.component.scss']
})
export class EthnicityChartComponent implements OnInit {

  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'doughnut';

  constructor(public statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.getEthnicityStats().subscribe(data => {
        this.populateChart(data);
      },
      error => {
      }
    );
  }

  private populateChart(data: object) {
    this.pieChartLabels = Object.keys(data).sort();
    for (const key of this.pieChartLabels) {
      this.pieChartData.push(data[key]);
    }
  }

}
