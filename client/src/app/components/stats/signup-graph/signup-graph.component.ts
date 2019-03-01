import {Component, OnInit} from '@angular/core';
import {StatsService} from "../../../services/stats.service";

@Component({
  selector: 'app-signup-graph',
  templateUrl: './signup-graph.component.html',
  styleUrls: ['./signup-graph.component.scss']
})
export class SignupGraphComponent implements OnInit {

  constructor(public statsService: StatsService) {
  }

  ngOnInit() {
    this.statsService.getSignupStats(this.getYearAsDateArray(new Date())).subscribe(data => {
      this.lineChartData = [{data: this.flipArray(data), label: 'Number of student data collected'}];
    })
  }

  public lineChartData: Array<any> = [{data: []}];
  public lineChartLabels = this.getChartLabels();
  public lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1
        }
      }]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  private getYearAsDateArray(today: Date) {
    let dates = [];
    for (let i = 0; i < 12; i++) {
      let tempDate = new Date(today);
      tempDate.setMonth(today.getMonth() - i);
      dates.push({
        fromDate: tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-01',
        toDate: tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-31'
      })
    }
    return dates

  }

  // flips array [1,2,3] - > [3,2,1]
  private flipArray(array: any) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  }

  // Create labels so they start at current month
  private getChartLabels() {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lineChartLabels = [];
    let firstMonth = new Date().getMonth() + 1;
    for (let i = 0; i < months.length; i++) {
      lineChartLabels[i] = months[(firstMonth + i) % 12];
    }
    return lineChartLabels;
  }

}
