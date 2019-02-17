import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-peronality-chart',
  templateUrl: './peronality-chart.component.html',
  styleUrls: ['./peronality-chart.component.scss']
})
export class PeronalityChartComponent implements OnInit {

  public radarChartLabels: string[] = ['Extroversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness to Experience '];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56], label: 'Personality'}
  ];
  public radarChartType: string = 'radar';
  public radarChartOptions = {
    scale: {
        ticks: {
          beginAtZero: true,
          min : 0,
          max : 100
        }
    }
  };

  ngOnInit(): void {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
