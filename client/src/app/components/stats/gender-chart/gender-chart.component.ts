import {Component, OnInit} from '@angular/core';
import {StatsService} from "../../../services/stats.service";
import {parseJson} from "@angular-devkit/core";

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {
  private chart: any;
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie'; // TODO maybe allow user to change this?

  constructor(private statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.getGenderChart().subscribe(data => {
        this.populateChert(data);
      },
      error => {
      }
    )
  }

  private populateChert(data: object) {
    this.pieChartLabels = Object.keys(data).sort();
    for (let key of this.pieChartLabels) {
      this.pieChartData.push(data[key]);
    }
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
